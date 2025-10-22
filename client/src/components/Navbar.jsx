import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Navbar = ({ cantidadCarrito }) => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logo} alt="Logo Hermanos Jota" className="header__logo" style={{ cursor: "pointer" }}/>
        </Link>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/" className="navbar__link">
                Inicio
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/productos" className="navbar__link">
                Productos
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/contacto" className="navbar__link">
                Contacto
              </Link>
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
