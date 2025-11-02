import React from "react";
import Hero from "./Hero";
import ProductosDestacados from "./ProductosDestacados";

const Main = ({ agregarAlCarrito }) => {
  return (
    <main>
      <Hero />
      <ProductosDestacados />
    </main>
  );
};

export default Main;
