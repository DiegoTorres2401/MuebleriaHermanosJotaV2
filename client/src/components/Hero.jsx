import React from "react";
import "./../styles/global.css";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
          <div className="hero__container container">
            <div className="hero__content">
              <h1 className="hero__title"> Muebleria Hermanos Jota</h1>
              <p className="hero__subtitle">Descubre nuestra colección de muebles artesanales, diseñados para traer calidez, confort y estilo a tu hogar.</p>
              <Link to="/productos" className="hero__btn">Explorar Colección</Link>
            </div>

            <div className="hero__image">
              <img
                src="/img/escritorio-costa.png"
                alt="Banner"
                className="hero__img"
              />
            </div>
          </div>
    </section>

  );
};

export default Hero;
