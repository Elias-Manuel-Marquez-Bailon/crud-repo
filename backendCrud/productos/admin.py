from django.contrib import admin
from .models import Producto


@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    """
    Configuración del administrador para el modelo Producto
    """
    
    # Campos que se muestran en la lista
    list_display = ('id', 'nombre', 'precio', 'stock', 'fecha_creacion')
    
    # Campos por los que se puede buscar
    search_fields = ('nombre', 'descripcion')
    
    # Campos por los que se puede filtrar
    list_filter = ('fecha_creacion', 'precio')
    
    # Orden por defecto
    ordering = ('-fecha_creacion',)
