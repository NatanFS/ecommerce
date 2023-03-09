from django.contrib import admin

from api.models import Produto

# Register your models here.
class ProdutoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Produto, ProdutoAdmin)
