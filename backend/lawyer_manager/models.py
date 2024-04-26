from django.db import models
from accounts.models import User
from .manager import ContactsManager
# Create your models here.

class Contact(models.Model):
  name = models.CharField( max_length=255)
  email = models.EmailField(max_length=254, blank=True)
  created_by = models.ForeignKey(User, on_delete=models.CASCADE)
  national_id = models.CharField(max_length=25)
  company_name= models.CharField(max_length=255)
  nationality = models.CharField(max_length=255)
  phone_number = models.CharField(max_length=20)
  # Could be customer, lawyer, opposition, vendor
  contact_type= models.CharField(max_length=10)
  notes = models.TextField(blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = ContactsManager()