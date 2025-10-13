import React from "react";
import logo from "../assets/img/logo.svg";

const Navbar = ({ cambiarVista, cantidadCarrito }) => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={logo}
          alt="Logo Hermanos Jota"
          className="header__logo"
          onClick={() => cambiarVista("home")}
          style={{ cursor: "pointer" }}
        />
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a
                className="navbar__link"
                onClick={() => cambiarVista("home")}
              >
                Inicio
              </a>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__link"
                onClick={() => cambiarVista("productos")}
              >
                Productos
              </a>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__link"
                onClick={() => cambiarVista("contacto")}
              >
                Contacto
              </a>
            </li>
          </ul>
          <div className="navbar__carrito">
            🛒 {cantidadCarrito}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
