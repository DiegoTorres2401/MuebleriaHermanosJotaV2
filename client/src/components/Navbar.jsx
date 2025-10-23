import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Navbar = ({ cantidadCarrito }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo Hermanos Jota" className="header__logo-img"/>
        </Link>
        
        <nav className="navbar">
          {/* Menú de navegación */}
          <ul className={`navbar__list ${menuOpen ? 'navbar__list--open' : ''}`}>
            <li className="navbar__item">
              <Link to="/" className="navbar__link" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/productos" className="navbar__link" onClick={closeMenu}>
                Productos
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/contacto" className="navbar__link" onClick={closeMenu}>
                Contacto
              </Link>
            </li>
          </ul>

          {/* Botón hamburguesa (solo visible en móvil) */}
          <button 
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>

          {/* Carrito (siempre visible) */}
          <Link to="/carrito" className="navbar__carrito">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="header__carrito-contador">{cantidadCarrito}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
