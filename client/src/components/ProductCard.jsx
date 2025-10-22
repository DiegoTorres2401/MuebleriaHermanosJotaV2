import React from "react";

const ProductCard = ({ producto, seleccionarProducto }) => {
  if (!producto) return null;

  return (
    <div className="producto-card" onClick={() => seleccionarProducto(producto)}>
      <img className="producto-card__img" src={producto.img} alt={producto.nombre} />
      <h3 className="producto-card__title">{producto.nombre}</h3>
      <p className="producto-card__price">${producto.precio?.toFixed(2)}</p>
      <button type="button" className="producto-card__btn">Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
