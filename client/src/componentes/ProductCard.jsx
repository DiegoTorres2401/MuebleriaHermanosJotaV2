import React from "react";
import "./../styles/global.css";

const ProductCard = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <div className="producto-card">
      <img src={imagen} alt={nombre} className="producto-card__img" />
      <h3 className="producto-card__title">{nombre}</h3>
      <p className="destacado-card__desc">{descripcion}</p>
      <p className="producto-card__price">${precio}</p>
      <button className="producto-card__btn">Comprar</button>
    </div>
  );
};

export default ProductCard;
