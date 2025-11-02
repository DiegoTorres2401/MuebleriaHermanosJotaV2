import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductosPage from "./pages/ProductosPage";
import ProductoPage from "./pages/ProductoPage";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import Footer from "./components/Footer";
import "./styles/global.css";
import NotFound from "./pages/NotFoundPage";
import CrearProductoPage from "./pages/CrearProductopage";

function App() {

  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const agregarAlCarrito = () => {
    setCantidadCarrito((prevCantidad) => prevCantidad + 1);
  };

  const navigate = useNavigate();

  return (
    <>
        <Navbar cantidadCarrito={cantidadCarrito} />
      <main>
        <Routes> 
          <Route path="/" element={<HomePage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/productos" element={<ProductosPage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/productos/:id" element={<ProductoPage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/admin/crear-productos" element={<CrearProductoPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
