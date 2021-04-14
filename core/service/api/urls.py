# from django.urls import path

# from.views import (
#     UserListView,
#     UserDetailView,
#     UserCreateView,
#     UserUpdateView,
#     UserDeleteView,
#     DaysListView,
#     DaysCreateView,
#     DaysUpdateView,
#     DaysDeleteView
# )

# urlpatterns = [
#     path('', UserListView.as_view()),
#     path('user/<pk>', UserDetailView.as_view()),
#     path('user/create/', UserCreateView.as_view()),
#     path('user/update/<pk>', UserUpdateView.as_view()),
#     path('user/delete/<pk>', UserDeleteView.as_view()),
#     path('day/', DaysListView.as_view()),
#     path('day/create/', DaysCreateView.as_view()),
#     path('day/update/<pk>', DaysUpdateView.as_view()),
#     path('day/delete/<pk>', DaysDeleteView.as_view())

# ]

from service.api.views import (UserViewSet, DayViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')
router.register(r'days', DayViewSet, basename='day')
urlpatterns = router.urls
