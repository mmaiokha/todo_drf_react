from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User

from .serializers import UserSerializer, UserCreateSerializer


class RetrieveUserView(APIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)
        return Response(user.data, status=200)


class CreateUser(CreateAPIView):
    model = User
    serializer_class = UserCreateSerializer
