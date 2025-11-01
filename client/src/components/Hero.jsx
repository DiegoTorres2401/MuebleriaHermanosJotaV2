import React from "react";
import "./../styles/global.css";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
          <div className="hero__container container">
            <div className="hero__content">
              <h1 className="hero__title">Hermanos Jota</h1>
              <p className="hero__subtitle">Muebles de calidad para tu hogar</p>
              <Link to="/productos" className="hero__btn">Ver Productos</Link>
            </div>
            <div className="hero__image">
              <img
                src="/img/EscritorioCosta.png"
                alt="Banner"
                className="hero__img"
              />
            </div>
          </div>
        </section>

  );
};

export default Hero;
