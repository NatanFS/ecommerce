from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt

class CustomAuthToken(ObtainAuthToken):
    @csrf_exempt
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

    @csrf_exempt
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
    @csrf_exempt
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

