from django.db import models

# Create your models here.

from propelauth_django_rest_framework import init_auth

# api keys in code just for the demo, they can be regenerated
auth = init_auth(
    "https://9853473183.propelauthtest.com",
    "YOUR_API_KEY",
)

class TrackedMed(models.Model):
    title=models.CharField(max_length=200)
    name=models.CharField(max_length=200)
    start=models.DateField()
    end=models.DateField()


