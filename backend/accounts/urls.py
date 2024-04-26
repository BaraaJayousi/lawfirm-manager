from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', views.UserRegisterView.as_view(), name='register'),
    path('verify-email/', views.VerifyUserEmail.as_view(), name='verify_email'),
    path('login/', views.LoginUserView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    path('profile/', views.TestAuthenticationView.as_view(), name='profile_test'),
    path('password-reset/', views.PasswordResetRequestView.as_view(), name='password-reset'),
    path('password-reset-confirm/<uidb64>/<token>', views.PasswordResetConfirm.as_view(), name='password-reset-confirm'),
    path('set-new-password/', views.SetNewPassword.as_view(), name='set-new-password'),
    path('logout/', views.LogoutUserView.as_view(), name='logout')


]
