import React from "react";
import { useNavigate } from "react-router-dom";
import EliminarButton from "./EliminarButton";

const ProductDetail = ({ producto, agregarAlCarrito }) => {
  const navigate = useNavigate();

  return (
    <div className="container-producto">
      <div className="imagen-producto">
        <img src={producto.image} alt={producto.name} />
      </div>
      <div className="detalle-producto">
        <h2>{producto.name}</h2>
        <h3>${producto.price?.toFixed(2)}</h3>
        <p>{producto.description}</p>
        <div className="botones">
          <button className="producto-card__btn" onClick={agregarAlCarrito}>
            Añadir al Carrito
          </button>
          <button className="producto-card__btn" onClick={() => navigate(-1)}>
            Volver
          </button>
          <EliminarButton productoId={producto.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
