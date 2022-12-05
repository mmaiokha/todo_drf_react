from datetime import datetime

from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import TaskList, Task
from .serializers import TaskListSerializer, TaskSerializer
from .utils.date_to_storke import date_to_stroke


class CurrentTaskListView(generics.RetrieveAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer
    permission_classes = [IsAuthenticated, ]

    def get(self, request, *args, **kwargs):
        try:
            current = self.queryset.filter(user=request.user).order_by('-created').first()
            if datetime.now().date() != current.created:
                current = TaskList.objects.create(user=request.user, title=date_to_stroke())
        except:
            current = TaskList.objects.create(user=request.user, title=date_to_stroke())
        current = TaskListSerializer(current)
        return Response(current.data)


class TaskListView(generics.RetrieveAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer
    permission_classes = [IsAuthenticated, ]


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    permission_classes = [IsAuthenticated, ]
