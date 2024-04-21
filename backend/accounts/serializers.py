from dataclasses import field
from rest_framework import serializers
from .models import User

#formats registration data coming from the frontend into python format
class UserRegisterSerializer(serializers.ModelSerializer):

  #write only prevents the value to be returned back to the user
  password = serializers.CharField(max_length= 100, min_length=8, write_only=True)
  password2 = serializers.CharField(max_length= 100, min_length=8, write_only=True)

  class Meta:
    model = User
    fields= ['email', 'name', 'password', 'password2']

  def validate(self, attrs):
    return super().validate(attrs)
  
  def create(self, validated_data):
    return super().create(validated_data)