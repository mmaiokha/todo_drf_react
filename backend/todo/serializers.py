from rest_framework import serializers

from .models import TaskList, Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'task_list', 'title', 'created', 'completed']


class TaskListSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')
    tasks = TaskSerializer(many=True)

    class Meta:
        model = TaskList
        fields = ['id', 'title', 'user', 'tasks', 'created']
