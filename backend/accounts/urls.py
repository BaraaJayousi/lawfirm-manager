from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegisterView.as_view(), name='register'),
    path('verify-email/', views.VerifyUserEmail.as_view(), name='verify_email'),
    path('login/', views.LoginUserView.as_view(), name='login')

]
