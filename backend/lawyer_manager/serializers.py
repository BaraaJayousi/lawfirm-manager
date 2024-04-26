from rest_framework import serializers
from accounts.models import User
from .models import Contact

class ContactCreateSerializer(serializers.ModelSerializer):
  user_id = serializers.CharField(max_length=255)
  class Meta:
    model=Contact
    fields=['name','user_id','email','national_id','company_name', 'nationality','notes', 'phone_number']

  def validate(self, attr):
    return super().validate(attr)

  def create(self, validated_data):
    created_by = User.objects.filter(id = validated_data['user_id']).first()
    contact = Contact.objects.create_contact(name=validated_data['name'],
                                              created_by=created_by,
                                              email=validated_data['email'],
                                              phone_number=validated_data['phone_number'],
                                              national_id= validated_data['national_id'],
                                              company_name= validated_data['company_name'],
                                              nationality=validated_data['nationality'],
                                              contact_type='customer',
                                              notes=validated_data['notes'])
    return contact
  

class GetAllCustomersSerializer(serializers.BaseSerializer):
  def to_representation(self,instance):
    return{
      "id": instance.id,
      "name":instance.name,
      "created_by": instance.created_by.id  ,
      "email": instance.email,
      "phone_number":instance.phone_number,
      "national_id": instance.national_id,
      "company_name": instance.company_name,
      "nationality": instance.nationality,
      "notes": instance.notes
    }