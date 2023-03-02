from django.urls import path

from . import views

urlpatterns = [
    path('me/', views.RetrieveUserView.as_view()),
    path('signup/', views.CreateUser.as_view())
]
