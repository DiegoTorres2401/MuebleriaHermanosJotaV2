import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container container">
        {/* Logo */}
        <div className="header__logo">
          <img
            src="/assets/img/logo.svg" // React toma las rutas desde "public/"
            alt="logo hermanos jota"
            className="header__logo-img"
          />
        </div>

        {/* Navegación */}
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a href="/" className="navbar__link navbar__link--active">
                Inicio
              </a>
            </li>
            <li className="navbar__item">
              <a href="/productos" className="navbar__link">
                Productos
              </a>
            </li>
            <li className="navbar__item">
              <a href="/contacto" className="navbar__link">
                Contacto
              </a>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
              <span className="header__carrito-contador">0</span>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;