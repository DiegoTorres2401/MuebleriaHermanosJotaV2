import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ producto, agregarAlCarrito, eliminarProducto }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);

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

  return (
    <div className="product-detail-page">
      <button className="product-detail__back" onClick={() => navigate(-1)}>
        <span class="material-symbols-outlined">
arrow_back
</span> Volver a la tienda
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

          { /* BOTONES DE ACCIÓN */ }

          <div className="detalle-producto__acciones">
            <button
              className="detalle-producto__accion"
              onClick={handleAgregarCarrito}
            >
              Añadir al Carrito
            </button>

            <button
              className="detalle-producto__eliminar"
              onClick={handleEliminar}
            > <span class="material-symbols-outlined">
delete
</span>Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
