from django.contrib.auth.models import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

class UserManager(BaseUserManager):
  #validate email using django built in function
  def email_validator(self, email):
    try:
      validate_email(email)
    except ValidationError:
      raise ValueError("Please Enter a valid email address")

#create the user
  def create_user(self, email, name, password, **extra_fields):
    if email:
      email = self.normalize_email(email)
      self.email_validator(email)
    else:
      raise ValueError("An email address is required")

    if not name:
      raise ValueError("A name is required")
    
    user = self.model(email=email, name=name, **extra_fields)
    #a django built in function to hash the password
    user.set_password(password)
    user.save(using=self._db)
    return user
  
  def create_superuser(self, email, name, password, **extra_fields):
    extra_fields.setdefault("is_superuser", True)

    if extra_fields.get("is_superuser") is not True:
      raise ValueError("is superuser must be true for admin user")
    
    user = self.create_user(email, name, password, **extra_fields )
    user.save(using=self._db)
    return user