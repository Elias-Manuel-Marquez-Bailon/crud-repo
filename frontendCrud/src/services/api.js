import axios from 'axios';

// URL base de tu backend Django
const API_URL = 'http://localhost:8000/api/productos/';

// Configurar axios con la URL base
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// ============ FUNCIONES PARA EL CRUD ============

// Obtener todos los productos (GET)
export const obtenerProductos = async () => {
    try {
        const response = await api.get('');
        return response.data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw error;
    }
};

// Crear un nuevo producto (POST)
export const crearProducto = async (producto) => {
    try {
        const response = await api.post('', producto);
        return response.data;
    } catch (error) {
        console.error('Error al crear producto:', error);
        throw error;
    }
};

// Actualizar un producto (PUT)
export const actualizarProducto = async (id, producto) => {
    try {
        const response = await api.put(`${id}/`, producto);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error;
    }
};

// Eliminar un producto (DELETE)
export const eliminarProducto = async (id) => {
    try {
        await api.delete(`${id}/`);
    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw error;
    }
};

export default api;