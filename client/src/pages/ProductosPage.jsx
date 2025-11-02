import React from "react";
import ProductList from "../components/ProductList";

const ProductosPage = ({ agregarAlCarrito }) => {
  return (
    <ProductList agregarAlCarrito={agregarAlCarrito} />
  );
};

export default ProductosPage;
