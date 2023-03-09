from django.shortcuts import get_object_or_404
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from rest_framework import generics, status
from api.models import Carrinho, Favorito, ItemCarrinho, ItemPedido, Pedido, Produto
from api.serializers import FavoritoSerializer, ItemCarrinhoSerializer, PedidoSerializer, ProdutoSerializer


class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        print(request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDataView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        data = {
            'nome': user.first_name,
            'email': user.email,
            # 'endereco': user.endereco if hasattr(user, 'endereco') else None,
            'is_staff': user.is_staff,
        }
        print(data)
        return Response(data)

User = get_user_model()
class CadastrarCliente(APIView):
    def post(self, request):
        print(request.data)
        email = request.data.get('email')
        password = request.data.get('password')
        nome = request.data.get('nome')
        
        if not email or not password:
            return Response({'error': 'Email e senha são obrigatórios.'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Este email já está registrado.'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_user(email=email, password=password, username=email, first_name=nome)
        user.is_active = True
        user.is_staff = False
        user.save()
        
        return Response({'message': 'Cliente registrado com sucesso.'}, status=status.HTTP_201_CREATED)

class CriarProduto(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

    def post(self, request, *args, **kwargs):
        if request.user.is_staff:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ListaProdutos(generics.ListAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

class ProdutoAPIView(APIView):
    def get(self, request, pk):
        try:
            produto = Produto.objects.get(pk=pk)
        except Produto.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ProdutoSerializer(produto)
        return Response(serializer.data)

class AdicionarItemCarrinhoView(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    serializer_class = ItemCarrinhoSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        carrinho = self.get_carrinho()
        id_produto = request.data.get('produto')
        quantidade = request.data.get('quantidade', 1)

        try:
            produto = Produto.objects.get(id=id_produto)
        except Produto.DoesNotExist:
            return Response({"detail": "Produto não encontrado."}, status=status.HTTP_404_NOT_FOUND)

        print("hello2")
        item, created = ItemCarrinho.objects.get_or_create(carrinho=carrinho, produto=produto)
        item.quantidade += int(quantidade)
        item.save()

        serializer = self.serializer_class(item)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_carrinho(self):
        carrinho, created = Carrinho.objects.get_or_create(usuario=self.request.user.pk)
        return carrinho

class RemoverItemCarrinhoView(generics.DestroyAPIView):
    serializer_class = ItemCarrinhoSerializer
    permission_classes = [IsAuthenticated]

    def delete(self, request, *args, **kwargs):
        carrinho = self.get_carrinho()
        produto_id = kwargs.get('produto_id')

        try:
            item = ItemCarrinho.objects.get(carrinho=carrinho, produto_id=produto_id)
        except ItemCarrinho.DoesNotExist:
            return Response({"detail": "Item não encontrado."}, status=status.HTTP_404_NOT_FOUND)

        item.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_carrinho(self):
        carrinho_id = self.kwargs.get('carrinho_id')
        return get_object_or_404(Carrinho, id=carrinho_id, usuario=self.request.user)

class CriarPedidoView(generics.CreateAPIView):
    authentication_classes = [TokenAuthentication]
    serializer_class = PedidoSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        carrinho = self.get_carrinho()

        if not carrinho.itens.exists():
            return Response({"detail": "Não é possível criar um pedido sem itens."}, status=status.HTTP_400_BAD_REQUEST)

        valor_total = sum(item.quantidade * item.produto.preco for item in carrinho.itens.all())

        pedido = Pedido.objects.create(usuario=request.user, valor_total=valor_total)

        for item in carrinho.itens.all():
            ItemPedido.objects.create(pedido=pedido, produto=item.produto, quantidade=item.quantidade)
            item.delete()

        serializer = self.serializer_class(pedido)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_carrinho(self):
        return get_object_or_404(Carrinho, usuario=self.request.user)

class FavoritarProdutoView(generics.CreateAPIView, generics.DestroyAPIView):
    authentication_classes = [TokenAuthentication]
    serializer_class = FavoritoSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        produto_id = self.kwargs.get('pk')
        produto = get_object_or_404(Produto, pk=produto_id)
        favorite, created = Favorito.objects.get_or_create(
            usuario=request.user,
            produto=produto
        )
        if created:
            message = f"{produto.nome} adicionado aos favoritos."
        else:
            favorite.delete()
            message = f"{produto.nome} removido dos favoritos."
        return Response({'message': message}, status=status.HTTP_200_OK)

class ListaItensCarrinhoView(generics.ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ItemCarrinhoSerializer

    def get_queryset(self):
        user = self.request.user
        carrinho = Carrinho.objects.filter(usuario=user).last()
        return carrinho.itens.all()

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data)