from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import UserRegisterSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .utils import send_code_to_user
from .models import OneTimePassword
# Create your views here.


class UserRegisterView(GenericAPIView):
  serializer_class=UserRegisterSerializer

#executes when there post request
  def post(self, request):
    user_data=request.data
    serializer= self.serializer_class(data=user_data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      user=serializer.data
      send_code_to_user(user['email'])
      return Response({
        'data':user,
        'message': f"Hi { user['name'] } Thanks for signing up! A passcode has been sent to your email"
      }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  


#class view verifies if the user has an authentic email address by checking OTP code
class VerifyUserEmail(GenericAPIView):
  def post(self, request):
    otp_code = request.data.get('otp')
    try:
      user_code_obj= OneTimePassword.objects.get(code=otp_code)
      user = user_code_obj.user
      if not user.is_verified:
        user.is_verified=True
        user.save()
        return Response({
          'message':'account email verified successfully'
        }, status=status.HTTP_200_OK)
      
      return Response({
        'message': 'invalid code, user is already verified'
      }, status.HTTP_204_NO_CONTENT)
    except OneTimePassword.DoesNotExist:
      return Response({
        'message': 'Passcode or user are invalid'
      }, status.HTTP_404_NOT_FOUND)
  

class LoginUserView(GenericAPIView):
  serializer_class=LoginSerializer
  
  def post(self, request):
    serializer = self.serializer_class(data=request.data, context={'request':request})
    serializer.is_valid(raise_exception=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
  

class TestAuthenticationView(GenericAPIView):
  permission_classes=[IsAuthenticated]
  def get(self,request):
    data={
      'msg':'it works'
    }
    return Response(data, status=status.HTTP_200_OK)
  
  