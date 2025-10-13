import React from "react";
import "./../styles/global.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">Hermanos Jota</h1>
          <p className="hero__subtitle">Muebles de calidad para tu hogar</p>
          <a href="/productos" className="hero__btn">Ver Productos</a>
        </div>
        <div className="hero__image">
          <img
            src="/assets/img/Aparador Uspallata.png"
            alt="Imagen de muebles"
            className="hero__img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
