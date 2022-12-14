from rest_framework import serializers

from .models import TaskList, Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'task_list', 'title', 'created', 'completed']


class TaskListSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(read_only=True, slug_field='username')
    tasks = TaskSerializer(many=True)
    count_tasks = serializers.SerializerMethodField()
    count_completed_tasks = serializers.SerializerMethodField()

    class Meta:
        model = TaskList
        fields = ['id', 'title', 'user', 'tasks', 'created', 'count_tasks', 'count_completed_tasks']


    def get_count_tasks(self, obj):
        return obj.tasks.count()

    def get_count_completed_tasks(self, obj):
        return obj.tasks.filter(completed=True).count()
