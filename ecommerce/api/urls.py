from django.urls import path
from . import views

urlpatterns = [
    path('api-auth-token', views.CustomAuthToken.as_view(), name='auth-token-api'),
    path('usuario', views.UserDataView.as_view(), name='dados-usuario'),
    path('cadastrar', views.CadastrarCliente.as_view(), name='dados-usuario'),
]