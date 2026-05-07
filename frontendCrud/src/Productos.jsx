import { useState, useEffect } from 'react';
import { obtenerProductos, crearProducto, actualizarProducto, eliminarProducto } from './services/api';

function Productos() {
    // Estados
    const [productos, setProductos] = useState([]);
    const [formulario, setFormulario] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: ''
    });
    const [editando, setEditando] = useState(false);
    const [idEditando, setIdEditando] = useState(null);

    // Cargar productos al iniciar
    useEffect(() => {
        cargarProductos();
    }, []);

    // ========== FUNCIONES ==========

    // Cargar todos los productos
    const cargarProductos = async () => {
        try {
            const data = await obtenerProductos();
            setProductos(data);
        } catch (error) {
            alert('Error al cargar productos');
        }
    };

    // Manejar cambios en el formulario
    const manejarCambio = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    // Agregar o Actualizar producto
    const manejarSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (editando) {
                // Actualizar producto existente
                await actualizarProducto(idEditando, formulario);
                alert('Producto actualizado correctamente');
            } else {
                // Crear nuevo producto
                await crearProducto(formulario);
                alert('Producto agregado correctamente');
            }
            
            // Limpiar formulario y recargar lista
            limpiarFormulario();
            cargarProductos();
        } catch (error) {
            alert('Error al guardar el producto');
        }
    };

    // Preparar edición
    const prepararEdicion = (producto) => {
        setFormulario({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            stock: producto.stock
        });
        setEditando(true);
        setIdEditando(producto.id);
    };

    // Eliminar producto
    const manejarEliminar = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar este producto?')) {
            try {
                await eliminarProducto(id);
                alert('Producto eliminado correctamente');
                cargarProductos();
            } catch (error) {
                alert('Error al eliminar el producto');
            }
        }
    };

    // Limpiar formulario
    const limpiarFormulario = () => {
        setFormulario({
            nombre: '',
            descripcion: '',
            precio: '',
            stock: ''
        });
        setEditando(false);
        setIdEditando(null);
    };

    // ========== RENDER ==========

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2>Gestión de Productos</h2>

            {/* FORMULARIO */}
            <div style={{ 
                backgroundColor: '#f5f5f5', 
                padding: '20px', 
                borderRadius: '8px',
                marginBottom: '30px'
            }}>
                <h3>{editando ? 'Editar Producto' : 'Agregar Producto'}</h3>
                <form onSubmit={manejarSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre del producto"
                            value={formulario.nombre}
                            onChange={manejarCambio}
                            required
                            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <textarea
                            name="descripcion"
                            placeholder="Descripción"
                            value={formulario.descripcion}
                            onChange={manejarCambio}
                            required
                            style={{ width: '100%', padding: '10px', fontSize: '16px', minHeight: '80px' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <input
                            type="number"
                            name="precio"
                            placeholder="Precio"
                            value={formulario.precio}
                            onChange={manejarCambio}
                            required
                            step="0.01"
                            style={{ flex: 1, padding: '10px', fontSize: '16px' }}
                        />
                        <input
                            type="number"
                            name="stock"
                            placeholder="Stock"
                            value={formulario.stock}
                            onChange={manejarCambio}
                            required
                            style={{ flex: 1, padding: '10px', fontSize: '16px' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                            type="submit"
                            style={{
                                backgroundColor: editando ? '#ffa500' : '#4CAF50',
                                color: 'white',
                                padding: '12px 24px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                flex: 1
                            }}
                        >
                            {editando ? '✏️ Actualizar' : '➕ Agregar'}
                        </button>
                        
                        {editando && (
                            <button 
                                type="button"
                                onClick={limpiarFormulario}
                                style={{
                                    backgroundColor: '#999',
                                    color: 'white',
                                    padding: '12px 24px',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px'
                                }}
                            >
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* LISTA DE PRODUCTOS */}
            <div>
                <h3>Lista de Productos ({productos.length})</h3>
                
                {productos.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#999', padding: '40px' }}>
                        No hay productos registrados. ¡Agrega el primero!
                    </p>
                ) : (
                    <div style={{ display: 'grid', gap: '15px' }}>
                        {productos.map((producto) => (
                            <div 
                                key={producto.id}
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ margin: '0 0 5px 0' }}>{producto.nombre}</h4>
                                    <p style={{ margin: '0 0 5px 0', color: '#666' }}>
                                        {producto.descripcion}
                                    </p>
                                    <p style={{ margin: '0', fontWeight: 'bold' }}>
                                        💰 ${producto.precio} | 📦 Stock: {producto.stock}
                                    </p>
                                </div>
                                
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button
                                        onClick={() => prepararEdicion(producto)}
                                        style={{
                                            backgroundColor: '#2196F3',
                                            color: 'white',
                                            padding: '8px 16px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ✏️ Editar
                                    </button>
                                    <button
                                        onClick={() => manejarEliminar(producto.id)}
                                        style={{
                                            backgroundColor: '#f44336',
                                            color: 'white',
                                            padding: '8px 16px',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        🗑️ Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Productos;