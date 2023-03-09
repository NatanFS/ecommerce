from django.urls import path
from . import views

urlpatterns = [
    path('api-auth-token', views.CustomAuthToken.as_view(), name='auth-token-api'),
    path('usuario', views.UserDataView.as_view(), name='dados-usuario'),
    path('cadastrar', views.CadastrarCliente.as_view(), name='dados-usuario'),
    path('produtos/criar/', views.CriarProduto.as_view(), name='criar-produto'),
    path('produtos/', views.ListaProdutos.as_view(), name='lista-produtos'),
]
