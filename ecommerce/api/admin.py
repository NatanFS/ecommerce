from django.contrib import admin

from api.models import Pedido, Produto

# Register your models here.
class ProdutoAdmin(admin.ModelAdmin):
    pass

class PedidoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Produto, ProdutoAdmin)
admin.site.register(Pedido, PedidoAdmin)
