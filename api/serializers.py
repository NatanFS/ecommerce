from rest_framework import serializers
from .models import Produto, Carrinho, ItemCarrinho, Pedido, ItemPedido, Favorito

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'

class CarrinhoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrinho
        fields = ['id', 'usuario']

class ItemCarrinhoSerializer(serializers.ModelSerializer):
    produto = ProdutoSerializer()
    class Meta:
        model = ItemCarrinho
        fields = ['id', 'carrinho', 'produto', 'quantidade']

class ItemPedidoSerializer(serializers.ModelSerializer):
    produto = ProdutoSerializer()

    class Meta:
        model = ItemPedido
        fields = ['id', 'produto', 'quantidade']


class PedidoSerializer(serializers.ModelSerializer):
    itens = ItemPedidoSerializer(many=True, read_only=True)

    class Meta:
        model = Pedido
        fields = ['id', 'data_pedido', 'valor_total', 'itens']

class FavoritoSerializer(serializers.ModelSerializer):
    produto = serializers.StringRelatedField()

    class Meta:
        model = Favorito
        fields = ['id', 'usuario', 'produto']
