from django.db import models

# Create your models here.

class TrackedMed(models.Model):
    user=models.CharField(max_length=200) # user id
    title=models.CharField(max_length=200)
    name=models.CharField(max_length=200)
    start=models.DateField()
    end=models.DateField()


