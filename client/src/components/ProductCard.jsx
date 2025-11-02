import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price, agregarAlCarrito }) => {

  return (


    <div className="producto-card" id={id}>

      
    <Link to={`/productos/${id}`}>
      <img className="producto-card__img" src={image} alt={name} />
      <h3 className="producto-card__title">{name}</h3>
      <p className="producto-card__price">${price}</p>
    </Link>
      <button type="button" className="producto-card__btn" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
