from ast import mod
from turtle import mode
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
#importing UserManager class
from .manager import UserManager
# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
  email= models.EmailField(max_length=255, unique=True)
  name= models.CharField(max_length=255)
  is_superuser= models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)
  last_login=models.DateTimeField(auto_now=True)
  created_at= models.DateTimeField(auto_now_add=True)
  updated_at= models.DateTimeField(auto_now=True)

  USERNAME_FIELD= 'email'

  REQUIRED_FIELDS= ['name']

  objects= UserManager()

  def __str__(self):
    return self.email
  
  @property
  def get_full_name(self):
    return self.name

  def tokens(self):
    pass
