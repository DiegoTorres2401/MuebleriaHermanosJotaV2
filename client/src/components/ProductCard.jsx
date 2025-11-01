import React from "react";

const ProductCard = ({ id, name, image, price }) => {

  return (
    <div className="producto-card" id={id}>
      <img className="producto-card__img" src={image} alt={name} />
      <h3 className="producto-card__title">{name}</h3>
      <p className="producto-card__price">${price}</p>
      <button type="button" className="producto-card__btn">Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
