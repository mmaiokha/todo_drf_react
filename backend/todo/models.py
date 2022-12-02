from django.db import models
from django.contrib.auth.models import User


class TaskList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='task_lists')
    created = models.DateField(auto_now_add=True)
    is_active = models.BooleanField(default=True)


class Task(models.Model):
    title = models.CharField(max_length=255, verbose_name='Title')
    description = models.TextField(blank=True, verbose_name='Description')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=True)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self):
        return self.title


