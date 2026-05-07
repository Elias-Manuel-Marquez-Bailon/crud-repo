from django.db import models


class Producto(models.Model):
    """
    Modelo para almacenar información de productos
    """
    # Campo de nombre - requerido
    nombre = models.CharField(
        max_length=200,
        help_text="Nombre del producto"
    )
    
    # Campo de descripción - opcional
    descripcion = models.TextField(
        blank=True,
        null=True,
        help_text="Descripción detallada del producto"
    )
    
    # Campo de precio
    precio = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        help_text="Precio del producto"
    )
    
    # Campo de stock
    stock = models.IntegerField(
        default=0,
        help_text="Cantidad disponible en stock"
    )
    
    # Campo de fecha de creación - automático
    fecha_creacion = models.DateTimeField(
        auto_now_add=True,
        help_text="Fecha en que se creó el producto"
    )
    
    # Campo de fecha de actualización - automático
    fecha_actualizacion = models.DateTimeField(
        auto_now=True,
        help_text="Fecha de la última actualización"
    )
    
    class Meta:
        ordering = ['-fecha_creacion']
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
    
    def __str__(self):
        return self.nombre
