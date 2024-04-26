from django.urls import path
from . import views

urlpatterns = [
    path('contact/create/', views.CreateContactView.as_view(), name='create_contact'),
    path('contact/customers/', views.GetAllCustomersView.as_view(), name='get_all_customers')
]
