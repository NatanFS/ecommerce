from django.urls import path
from ecommerce.views import index

urlpatterns = [
    path('checkout/', index, name='index'),
    path('produto/<int:id>', index, name='index'),
    path('adicionar-produto', index, name='index'),
    path('login', index, name='index'),
    path('perfil', index, name='index'),
    path('cadastro', index, name='index'),

]