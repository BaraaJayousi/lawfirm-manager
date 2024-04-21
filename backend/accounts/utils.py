import random
from django.core.mail import EmailMessage

from backend import settings
from .models import User, OneTimePassword
#Utilities module for, added extra functionalities 

#generates OTP code for email verification
#not optimal, use for prototype
def generateOTP():
  otp =""
  for i in range(6):
    otp+= str(random.randint(1,9))
  return otp


def send_code_to_user(email):
  subject= "One time passcode email verification"
  otp_code=generateOTP()
  print(otp_code)
  user=User.objects.get(email=email)
  email_body=f"You one time passcode is <strong>{otp_code}</strong>"
  from_email=settings.DEFAULT_FROM_EMAIL

  OneTimePassword.objects.create(user=user, code=otp_code)

  send_email= EmailMessage(subject=subject, body=email_body, from_email=from_email, to=[email])
  send_email.send(fail_silently=True)
