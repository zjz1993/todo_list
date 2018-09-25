from django.db import models
import datetime

# Create your models here.

class UserInfo(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=32)
    age = models.IntegerField()

class Book(models.Model):
    title = models.CharField(null=True, blank=True, max_length=50)
    author = models.CharField(null=True, blank=True, max_length=50)
    summary = models.TextField(null=True, blank=True)

class Task(models.Model):
    name = models.CharField(null=True, max_length=500)
    createTime = models.DateTimeField(auto_now_add=True, null=True)
    startTime = models.DateField(null=True)
    endTime = models.DateField(null=True)
    isFinished = models.BooleanField(default=False)
    priority = models.IntegerField(choices=((0, '紧急'), (1, '一般'), (2, '不紧急')))
