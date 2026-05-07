# CRUD de Productos - Django REST + React

## Descripción
Aplicación web tipo CRUD para gestionar productos. Permite registrar, consultar, editar y eliminar productos con una interfaz moderna usando React en el frontend y Django REST Framework en el backend.

## Tecnologías Utilizadas
- **Backend:** Django, Django REST Framework, Python
- **Frontend:** React, Vite, JavaScript
- **Base de Datos:**  MySQL (producción)
- **Otras:** Axios (para peticiones HTTP), Git

## Funcionalidades
- ✅ Registrar nuevos productos
- ✅ Listar todos los productos
- ✅ Editar productos existentes
- ✅ Eliminar productos
- ✅ API RESTful

## Campos del Producto
Cada producto contiene:
1. **ID** - Identificador único
2. **Nombre** - Nombre del producto
3. **Descripción** - Descripción detallada
4. **Precio** - Precio del producto
5. **Stock** - Cantidad disponible

## Instrucciones para Ejecutar

### Backend (Django)
```bash
cd backendCrud
python manage.py migrate
python manage.py runserver
```
El backend estará disponible en `http://localhost:8000`

### Frontend (React)
```bash
cd frontendCrud
npm install
npm run dev
```
El frontend estará disponible en `http://localhost:5173`

## Uso de IA
Se utilizó IA para:
- Ayuda en la estructura del proyecto
- Generación de código boilerplate
- Debugging de errores específicos
- La IA Consultada fue claude debido al experiencia del programador con dicha herramienta, por alta efectividad en el codigo y en respuestas

**Nota:** Toda la funcionalidad fue revisada y entendida completamente por el desarrollador.

## Autor
Elias Manuel Márquez Bailón