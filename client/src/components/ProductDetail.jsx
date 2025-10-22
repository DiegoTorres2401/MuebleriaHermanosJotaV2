import React from "react";

const ProductDetail = ({ producto, agregarAlCarrito, volverAlCatalogo }) => {
  if (!producto) return null;

  return (
    <div className="container-producto">
      <div className="imagen-producto">
        <img src={producto.img} alt={producto.nombre} />
      </div>
      <div className="detalle-producto">
        <h2>{producto.nombre}</h2>
        <h3>${producto.precio?.toFixed(2)}</h3>
        <p>{producto.descripcion}</p>
        <div className="botones">
          <button className="producto-card__btn" onClick={() => agregarAlCarrito(producto)}>
            Añadir al Carrito
          </button>
          <button className="producto-card__btn" onClick={volverAlCatalogo}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
