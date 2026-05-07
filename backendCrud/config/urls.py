from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Incluir todas las URLs de la app productos
    path('api/', include('productos.urls')),
]
