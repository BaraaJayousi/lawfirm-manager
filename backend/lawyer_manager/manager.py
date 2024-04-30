from django.db.models import Manager

class ContactsManager(Manager):

  def create_contact(self, name, email, created_by, national_id, company_name, nationality, contact_type, notes, phone_number):

    contact = self.model(name=name, email=email, created_by=created_by, national_id=national_id, company_name = company_name, nationality = nationality, contact_type = contact_type, notes = notes, phone_number = phone_number)
    contact.save(using=self._db)
    return contact

  def get_all_customers(self):
    return self.filter(contact_type='customer')
  
  def delete_customer(self,customer_id):
    try:
      user = self.get(id=customer_id)
    except Exception as exp:
      raise f'User does not exist {exp}'
    
    user.delete()