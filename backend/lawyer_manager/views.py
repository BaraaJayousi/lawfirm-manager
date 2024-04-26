from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from .serializers import ContactCreateSerializer, GetAllCustomersSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import Contact

# Create your views here.

class CreateContactView(GenericAPIView):
  serializer_class = ContactCreateSerializer
  permission_classes=[IsAuthenticated]
  def post(self, request):
    contact_data = request.data
    serializer = self.serializer_class(data=contact_data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return Response({'message':'contact has been added successfully'}, status= status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetAllCustomersView(GenericAPIView):
  serializer_class= GetAllCustomersSerializer
  def get(self,request):
    customers = Contact.objects.get_all_customers()
    serializer = self.serializer_class(customers, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)