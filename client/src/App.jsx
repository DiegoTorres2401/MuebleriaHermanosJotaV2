import React, { useState } from "react";
import Navbar from "./componentes/Navbar";
import ProductosDestacados from "./componentes/ProductosDestacados";
import ProductDetail from "./componentes/ProductDetail";
import ContactForm from "./componentes/ContactForm";
import Footer from "./componentes/Footer";
import "./styles/global.css";

function App() {
  const [vista, setVista] = useState("home");
  const [carrito, setCarrito] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
    setVista("detalle");
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const volverAlCatalogo = () => {
    setProductoSeleccionado(null);
    setVista("productos");
  };

  return (
    <div>
      <Navbar cambiarVista={setVista} cantidadCarrito={carrito.length} />

      {vista === "home" && (
        <section className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <h1 className="hero__title">Bienvenido a Hermanos Jota</h1>
              <p className="hero__subtitle">Los mejores muebles para tu hogar</p>
            </div>
            <div className="hero__image">
              <img
                src="/src/assets/img/EscritorioCosta.png"
                alt="Banner"
                className="hero__img"
              />
            </div>
          </div>
        </section>
      )}

      {vista === "productos" && !productoSeleccionado && (
        <ProductosDestacados seleccionarProducto={seleccionarProducto} />
      )}

      {vista === "detalle" && productoSeleccionado && (
        <ProductDetail
          producto={productoSeleccionado}
          agregarAlCarrito={agregarAlCarrito}
          volverAlCatalogo={volverAlCatalogo}
        />
      )}

      {vista === "contacto" && <ContactForm />}
      <Footer />
    </div>
  );
}

export default App;
