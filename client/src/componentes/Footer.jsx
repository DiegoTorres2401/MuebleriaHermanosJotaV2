// src/componentes/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      {/* ===============================
        NEWSLETTER CORREO
      =============================== */}
      <div className="footer__info">
        <h2 className="footer__title">Newsletter</h2>
        <p>
          Suscribite a nuestro Newsletter y recibí novedades de descuentos y
          nuevos productos.
        </p>

        <form className="footer__form">
          <input type="email" placeholder="Ingresa tu email" required />
          <div>
            <button type="submit">Suscribirse</button>
          </div>
        </form>
      </div>

      {/* ===============================
        CATEGORÍAS, AYUDA Y CONTACTO
      =============================== */}
      <div className="footer__container container">
        <div className="footer__categorias">
          <h2>Categorías</h2>
          <ul className="footer__categories-list">
            <li className="footer__item">
              <a className="footer__link" href="#">Muebles</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Cocina</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Baño</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Deco Hogar</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Escritorio</a>
            </li>
          </ul>
        </div>

        <div className="footer__ayuda">
          <h2>Ayuda</h2>
          <ul>
            <li className="footer__item">
              <a className="footer__link" href="#">Sucursales</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Preguntas frecuentes</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Términos y condiciones</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Trabaja con nosotros</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Botón de arrepentimiento</a>
            </li>
          </ul>
        </div>

        <div className="footer__contacto">
          <h2>Contacto</h2>
          <ul>
            <li className="footer__item">
              <a className="footer__link" href="#">+54 11 4567-8900</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">info@hermanosjota.com.ar</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">ventas@hermanosjota.com.ar</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                Av. San Juan 2847 C1232AAB — Barrio de San Cristóbal Ciudad
                Autónoma de Buenos Aires Argentina
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ===============================
        REDES SOCIALES FOOTER
      =============================== */}
      <div className="footer__redes-sociales">
        <a
          href="https://www.facebook.com/HermanosJotaMuebleria"
          target="_blank"
          className="footer__icon-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href="https://www.instagram.com/hermanosjota/"
          target="_blank"
          className="footer__icon-link"
        >
          <i className="fab fa-instagram"></i>
          @hermanosjota_ba
        </a>
      </div>

      <div className="footer__derechos-reservados">
        <p>© 2025 Hermanos Jota. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
