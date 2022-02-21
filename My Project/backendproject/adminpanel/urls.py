from django.urls import path

from adminpanel import views

urlpatterns = [
    path('user', views.user_create)
]
