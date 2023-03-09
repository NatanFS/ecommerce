from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email é obrigatório')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class Produto(models.Model):
    nome = models.CharField("nome", max_length=100, null=False, blank=False)
    descricao = models.CharField("descricao", max_length=600,  null=False, blank=False)
    preco = models.FloatField("preço", null=False, blank=False)
    imagem = models.ImageField()
