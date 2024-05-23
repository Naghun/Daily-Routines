from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ['user', 'task_name', 'description', 'completed', 'time_created']

admin.site.register(Task, TaskAdmin)
