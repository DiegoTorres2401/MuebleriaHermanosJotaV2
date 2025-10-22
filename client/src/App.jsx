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

function App() {

  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  return (
    <>
        <Navbar />
      <main>
        <Routes> 
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos/:id" element={<ProductoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
