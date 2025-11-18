import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/img/logo.svg";

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
              <NavLink 
                to="/" 
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
              >
                Inicio
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/productos" 
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
              >
                Productos
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink 
                to="/contacto" 
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
              >
                Contacto
              </NavLink>
            </li>
          </ul>

          <button 
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </button>

          <Link to="/carrito" className="navbar__carrito">
            <span className="material-symbols-outlined">local_mall</span>
            <span className="header__carrito-contador">{cantidadCarrito}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
