from rest_framework import serializers
from .models import Producto


class ProductoSerializer(serializers.ModelSerializer):
    """
    Serializador para el modelo Producto
    Convierte los datos de la base de datos a JSON y viceversa
    """
    
    class Meta:
        model = Producto
        fields = [
            'id',
            'nombre',
            'descripcion',
            'precio',
            'stock',
            'fecha_creacion',
            'fecha_actualizacion',
        ]
        
        # Configuración de campos read-only (solo lectura)
        read_only_fields = ['id', 'fecha_creacion', 'fecha_actualizacion']
