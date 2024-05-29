import graphene
from graphene_django import DjangoObjectType
from .models import Task
from django.contrib.auth.models import User

class TasksType(DjangoObjectType):
    class Meta:
        model = Task
        fields = '__all__'


class Query(graphene.ObjectType):
    all_tasks = graphene.List(TasksType)
    specific_tasks = graphene.List(TasksType, username=graphene.String(required=True))

    def resolve_all_tasks(self, info):
        return Task.objects.all()
    
    def resolve_specific_tasks(self, info, username):
        try:
            user = User.objects.get(username=username)
            return Task.objects.filter(user=user)
        except User.DoesNotExist:
            return None

class TaskMutation(graphene.Mutation):
    class Arguments:
        task_name = graphene.String(required=True)
        description = graphene.String()
        completed = graphene.Boolean()
    task = graphene.Field(TasksType)

    @classmethod
    def mutate(cls, root, info, task_name, description=None, completed=False):
        user = info.context.user
        if user.is_anonymous:
            raise Exception("Not logged in!")
        task = Task(task_name=task_name, description=description, completed=completed, user=user)
        task.save()
        return TaskMutation(task=task)
    
class Mutation(graphene.ObjectType):
    update_task = TaskMutation.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
