import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductosPage from "./pages/ProductosPage";
import ProductoPage from "./pages/ProductoPage";
import HomePage from "./pages/HomePage";
import ContactoPage from "./pages/ContactoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PerfilPage from "./pages/PerfilPage";
import Footer from "./components/Footer";
import "./styles/global.css";
import NotFound from "./pages/NotFoundPage";
import CrearProductoPage from "./pages/CrearProductopage";
import { useAuthContext } from "./context/AuthContext";

function App() {

  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const agregarAlCarrito = () => {
    setCantidadCarrito((prevCantidad) => prevCantidad + 1);
  };

  const {isAdmin, isAuthenticated } = useAuthContext()

  return (
    <>
        <Navbar cantidadCarrito={cantidadCarrito} />
      <main>
        <Routes> 
          <Route path="/" element={<HomePage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/productos" element={<ProductosPage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/productos/:id" element={<ProductoPage agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/admin/crear-productos" element={ isAdmin ? <CrearProductoPage /> : <p>No puedes acceder a esta página, necesitas ser "admin"</p>} />
          <Route path="/login" element={<LoginPage/>} /> 
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/perfil" element={ isAuthenticated ? <PerfilPage/> : <p>Debes iniciar sesión para acceder a esta página.</p>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
