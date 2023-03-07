from django.shortcuts import render
from django.contrib.auth import authenticate
from django.http import JsonResponse
from rest_framework.authtoken.views import ObtainAuthToken

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token = response.data['token']
        return JsonResponse({'token': token})

def logout(request):
    logout(request)
    return JsonResponse({'success': True})