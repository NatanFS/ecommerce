from django.urls import path
from ecommerce.views import index

urlpatterns = [
    path('checkout/', index, name='index'),
]