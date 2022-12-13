from django.urls import path, include
from rest_framework.routers import SimpleRouter

from . import views


router = SimpleRouter()
router.register(r'task', views.TaskViewSet)

urlpatterns = [
    path('task_list/current/', views.CurrentTaskListView.as_view()),
    path('task_list/<int:pk>/', views.TaskListView.as_view()),
    path('task_list/my_list/', views.MyTaskListsView.as_view()),
    path('', include(router.urls)),
]
