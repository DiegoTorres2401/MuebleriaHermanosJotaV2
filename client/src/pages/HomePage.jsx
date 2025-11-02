import React from "react";
import Hero from "../components/Hero";
import ProductosDestacados from "../components/ProductosDestacados";
const HomePage = ({ agregarAlCarrito }) => {
  return (
    <>
      <Hero />
      <ProductosDestacados agregarAlCarrito={agregarAlCarrito} />
    </>
  );
};

export default HomePage;
