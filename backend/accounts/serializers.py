from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import smart_str, smart_bytes
from django.urls import reverse
from .utils import send_normal_email

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
      raise AuthenticationFailed("Invalid Credentials try again")
    if not user.is_verified:
      raise AuthenticationFailed("Email is not verified")
    
    user_token = user.tokens()
    return {
      'email': user.email,
      'name': user.get_full_name,
      'access_token': user_token.get('access'),
      'refresh_token': user_token.get('refresh')
    }
  
#Checks if the user email is verified and the password is 
class PasswordResetRequestSerializer(serializers.Serializer):
  email = serializers.EmailField(max_length=255)

  class Meta:
    fields=['email']

  def validate(self, attrs):
    email = attrs.get('email')
    if User.objects.filter(email=email).exists():
      user= User.objects.get(email=email)
      #user id encoded in base 64
      uib64= urlsafe_base64_encode(smart_bytes(user.id))
      token=PasswordResetTokenGenerator().make_token(user)
      request=self.context.get('request')
      site_domain= get_current_site(request).domain
      relative_link=reverse('password-reset-confirm',kwargs={"uib64":uib64, 'token':token})
      abslink=f"http://{site_domain}{relative_link}"
      email_body=f"Hi use the link below to reset your password \n {abslink}"
      print(email_body)
      data={
        'email_body':email_body,
        'email_subject': "Reset Your Password Lawyer Manger",
        'to_email':user.email
      }
      send_normal_email(data)

      return super().validate(attrs)

