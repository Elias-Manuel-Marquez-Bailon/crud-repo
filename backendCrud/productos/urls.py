from django.urls import path
from . import views

app_name = 'productos'

urlpatterns = [
    # Ruta para listar todos los productos y crear uno nuevo
    path(
        'productos/',
        views.ProductoListCreate.as_view(),
        name='producto-list-create'
    ),
    
    # Ruta para obtener, actualizar o eliminar un producto específico
    path(
        'productos/<int:pk>/',
        views.ProductoRetrieveUpdateDestroy.as_view(),
        name='producto-detail'
    ),
]
