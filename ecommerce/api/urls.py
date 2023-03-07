from json import detect_encoding
from django.urls import path
from . import views

urlpatterns = [
    path('api-auth-token', views.CustomAuthToken.as_view(), name='auth-token'),
]