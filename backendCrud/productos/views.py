from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import Producto
from .serializers import ProductoSerializer


class ProductoListCreate(generics.ListCreateAPIView):
    """
    Vista para listar todos los productos (GET) y crear uno nuevo (POST)
    GET /api/productos/ - obtiene lista de todos los productos
    POST /api/productos/ - crea un nuevo producto
    """
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer


class ProductoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    """
    Vista para obtener, actualizar y eliminar un producto específico
    GET /api/productos/<id>/ - obtiene los datos de un producto
    PUT /api/productos/<id>/ - actualiza un producto
    DELETE /api/productos/<id>/ - elimina un producto
    """
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer
    lookup_field = 'pk'
