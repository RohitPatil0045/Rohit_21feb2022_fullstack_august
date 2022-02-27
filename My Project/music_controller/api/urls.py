from django.urls import path
from api import views

urlpatterns = [
    path('home', views.RoomView.as_view()),

]
