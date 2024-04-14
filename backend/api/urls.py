from django.urls import path

from . import views

urlpatterns = [
    path("whoami", views.getUser, name="getUser"),
    path("", views.index, name="index"),
]

