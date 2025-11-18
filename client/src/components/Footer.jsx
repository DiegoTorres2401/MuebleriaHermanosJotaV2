import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Descripción */}
        <div className="footer__about">
          <h3>MUEBLERIA HJ</h3>
          <p>
            Muebles atemporales, diseñados para la vida moderna. De origen ético
            y construidos para durar.
          </p>
        </div>

        {/* Tienda (antes Categorías) */}
        <div className="footer__categorias">
          <h2>Tienda</h2>
          <ul>
            <li className="footer__item">
              <Link className="footer__link" to="/productos">Sala de Estar</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/productos">Dormitorio</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/productos">Comedor</Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/productos">Oficina</Link>
            </li>
          </ul>
        </div>

        {/* Soporte (antes Ayuda) */}
        <div className="footer__ayuda">
          <h2>Soporte</h2>
          <ul>
            <li className="footer__item">
              <Link className="footer__link" to="/contacto">Contáctanos</Link>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Preguntas Frecuentes</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Envíos y Devoluciones</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">Guía de Cuidado</a>
            </li>
          </ul>
        </div>

        {/* Mantente Conectado (Newsletter) */}
        <div className="footer__newsletter">
          <h2>Mantente Conectado</h2>
          <p>
            Únete a nuestra lista de correo para recibir noticias y ofertas
            especiales.
          </p>
          <form className="footer__form">
            <input type="email" placeholder="Tu correo electrónico" required />
            <div>
              <button type="submit">Suscribirse</button>
            </div>
          </form>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="footer__derechos-reservados">
        <p>© 2025 Hermanos Jota. Todos los Derechos Reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
