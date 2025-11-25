import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/img/logo.svg";
import { useAuthContext } from "../context/AuthContext";

const Navbar = ({ cantidadCarrito }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const {user,logout} = useAuthContext()
  const handleLogout = () => {
    alert("Acabas de cerrar tu sesión.")
    logout()
  };

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
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {user ? (
            <div className="navbar__user-info">
              <span className="navbar__user-name">Hola, {user.name}</span>
              <Link to="/perfil" className="navbar__profile-link">
                <span className="material-symbols-outlined">account_circle</span>
              </Link>
              <button className="navbar__logout-button" onClick={handleLogout}>Cerrar sesión</button>
            </div>
          ) : (
            <Link to="/login" className="navbar__login-link">Iniciar sesión</Link>
          )}

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
