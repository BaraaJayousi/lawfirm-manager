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