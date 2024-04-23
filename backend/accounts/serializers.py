from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
#formats registration data coming from the frontend into python format
class UserRegisterSerializer(serializers.ModelSerializer):

  #write only prevents the value to be returned back to the user
  password = serializers.CharField(max_length= 100, min_length=8, write_only=True)
  password2 = serializers.CharField(max_length= 100, min_length=8, write_only=True)

  class Meta:
    model = User
    fields= ['email', 'name', 'password', 'password2']

#Validate the input data for the model
  def validate(self, attrs):
    password = attrs.get("password",'')
    password2= attrs.get("password2", '')
    if password != password2:
      raise serializers.ValidationError("Passwords do not match")
    return super().validate(attrs)
  
  def create(self, validated_data):
    user = User.objects.create_user(
      email= validated_data['email'],
      name= validated_data['name'],
      password= validated_data['password']
      )
    return user
  

class LoginSerializer(serializers.ModelSerializer):
  email=serializers.EmailField(max_length=100)
  password= serializers.CharField(write_only=True, max_length=100)
  name= serializers.CharField(max_length=255, read_only=True)
  access_token= serializers.CharField(max_length=255, read_only=True)
  refresh_token= serializers.CharField(max_length=255, read_only=True)

  class Meta:
    model=User
    fields=['email', 'password', 'name', 'access_token', 'refresh_token']

  def validate(self, attrs):
    email=attrs.get('email')
    password=attrs.get('password')
    request= self.context.get('request')
    user=authenticate(request=request, email=email, password=password)
    if not user:
      raise AuthenticationFailed
    
    token = user.tokens()
    return {
      'email': user.email,
      'name': user.get_full_name,
      'access_token': token
    }