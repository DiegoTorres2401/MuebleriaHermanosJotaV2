import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProductDetail = ({ agregarAlCarrito, eliminarProducto }) => {
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID desde la URL
  const { isAdmin } = useAuthContext(); // ← Agregar esto
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  // Fetch del producto usando el ID de la URL
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://muebleriahermanosjotav2.onrender.com/api/productos/${id}`);
        const data = await response.json();
        setProducto(data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        setCargando(false);
      }
    };

    fetchProducto();
  }, [id]);

  const incrementarCantidad = () => setCantidad(prev => prev + 1);
  const decrementarCantidad = () => {
    if (cantidad > 1) setCantidad(prev => prev - 1);
  };

  const handleAgregarCarrito = () => {
    [...Array(cantidad)].map(() => agregarAlCarrito(producto));
    alert(`${cantidad} ${cantidad === 1 ? 'producto agregado' : 'productos agregados'} al carrito`);
  };

  const handleEliminar = async () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${producto.name}"?`)) {
      try {
        const response = await fetch(`https://muebleriahermanosjotav2.onrender.com/api/productos/${producto._id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Producto eliminado exitosamente');
          navigate('/productos');
        } else {
          alert('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al eliminar el producto');
      }
    }
  };

  if (cargando) {
    return <div className="product-detail-page">Cargando...</div>;
  }

  if (!producto) {
    return <div className="product-detail-page">Producto no encontrado</div>;
  }

  return (
    <div className="product-detail-page">
      <button className="product-detail__back" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">arrow_back</span> Volver a la tienda
      </button>

      <div className="container-producto">
        {/* SECCIÓN IZQUIERDA: IMAGEN */}
        <div className="imagen-producto">
          <div className="imagen-producto__principal">
            <img src={producto.image} alt={producto.name} />
          </div>
        </div>

        {/* SECCIÓN DERECHA: DETALLES */}
        <div className="detalle-producto">
          <h2>{producto.name}</h2>
          <p className="detalle-producto__precio">${producto.price?.toFixed(2)}</p>
          <p className="detalle-producto__descripcion">{producto.description}</p>

          <div className="detalle-producto__opciones">
            {/* CANTIDAD */}
            <div className="detalle-producto__cantidad">
              <label className="detalle-producto__opcion-label">Cantidad</label>
              <div className="detalle-producto__cantidad-control">
                <button
                  className="detalle-producto__cantidad-btn"
                  onClick={decrementarCantidad}
                >
                  -
                </button>
                <input
                  type="number"
                  className="detalle-producto__cantidad-input"
                  value={cantidad}
                  readOnly
                />
                <button
                  className="detalle-producto__cantidad-btn"
                  onClick={incrementarCantidad}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="detalle-producto__acciones">
            <button
              className="detalle-producto__accion"
              onClick={handleAgregarCarrito}
            >
              Añadir al Carrito
            </button>

            {isAdmin && (
              <button
                className="detalle-producto__eliminar"
                onClick={handleEliminar}
              >
                <span className="material-symbols-outlined">delete</span>
                Eliminar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
