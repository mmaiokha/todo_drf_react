from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import TaskList, Task
from .serializers import TaskListSerializer, TaskSerializer


class TaskListView(generics.RetrieveAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer
    permission_classes = [IsAuthenticated, ]


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = [IsAuthenticated, ]
