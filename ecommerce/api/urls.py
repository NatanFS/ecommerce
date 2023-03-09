from django.urls import path
from . import views

urlpatterns = [
    path('api-auth-token', views.CustomAuthToken.as_view(), name='auth-token-api'),
    path('usuario', views.UserDataView.as_view(), name='dados-usuario'),
    path('cadastrar', views.CadastrarCliente.as_view(), name='dados-usuario'),
    path('produtos/criar/', views.CriarProduto.as_view(), name='criar-produto'),
    path('produtos/', views.ListaProdutos.as_view(), name='produto-lista'),
    path('produtos/<int:pk>', views.ProdutoAPIView.as_view(), name="produto"),
    path('produtos/favoritar/<int:pk>/', views.FavoritarProdutoView.as_view(), name='produto-favoritar'),
    path('carrinho/lista', views.ListaItensCarrinhoView.as_view(), name='carrinho'),
    path('carrinho/adicionar/', views.AdicionarItemCarrinhoView.as_view(), name='carrinho-adicionar'),
    path('produtos/remover/', views.RemoverItemCarrinhoView.as_view(), name='carrinho-remover'),
    path('pedido/realizar/', views.CriarPedidoView.as_view(), name='fazer_pedido'),
]
