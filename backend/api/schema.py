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
    
schema = graphene.Schema(query=Query)