from django.urls import path

from . import views

urlpatterns = [
    path('me/', views.RetrieveUserView.as_view())
]
