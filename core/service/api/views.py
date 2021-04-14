from rest_framework import viewsets

from service.models import User, VacationDays
from .serializers import UserSerializer, DaySerializar


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class DayViewSet(viewsets.ModelViewSet):
    serializer_class = DaySerializar
    queryset = VacationDays.objects.all()


# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView,
#     DestroyAPIView
# )

# from service.models import User, VacationDays
# from .serializers import UserSerializer, DaySerializar

# class UserListView(ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class UserDetailView(RetrieveAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class UserCreateView(CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class UserUpdateView(UpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class UserDeleteView(DestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer


# class DaysListView(ListAPIView):
#     queryset = VacationDays.objects.all()
#     serializer_class = DaySerializar


# class DaysCreateView(CreateAPIView):
#     queryset = VacationDays.objects.all()
#     serializer_class = DaySerializar


# class DaysUpdateView(UpdateAPIView):
#     queryset = VacationDays.objects.all()
#     serializer_class = DaySerializar


# class DaysDeleteView(DestroyAPIView):
#     queryset = VacationDays.objects.all()
#     serializer_class = DaySerializar
