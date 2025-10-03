import React from "react";
import Navbar from "./componentes/Navbar";
import ProductosDestacados from "./componentes/ProductosDestacados";
import Footer from "./componentes/Footer";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero__container container">
            <div className="hero__content">
              <h1 className="hero__title">Hermanos Jota</h1>
              <p className="hero__subtitle">Muebles de calidad para tu hogar</p>
              <a href="./productos.html" className="hero__btn">Ver Productos</a>
            </div>
            <div className="hero__image">
              <img
                src="./assets/img/Aparador Uspallata.png"
                alt="Imagen de muebles"
                className="hero__img"
              />
            </div>
          </div>
        </section>
        <ProductosDestacados />
      </main>
      <Footer />
    </>
  );
}

export default App;
