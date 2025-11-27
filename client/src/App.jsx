import React from "react";
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
import CarritoPage from "./pages/Carrito";
import CheckoutPage from "./pages/CheckoutPage";
import MisPedidosPage from "./pages/MisPedidosPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { isAdmin } = useAuthContext();

  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <main>
        
        <Routes>
          
          {/* PÚBLICAS */}
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos/:id" element={<ProductoPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* RUTAS QUE SOLO FUNCIONAN SI ESTÁS LOGUEADO */}
          <Route
            path="/carrito"
            element={
              
                <CarritoPage />
              
            }
          />

          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <PerfilPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/checkout"
            element={
              
                <CheckoutPage />
            
            }
          />

          <Route
            path="/mis-pedidos"
            element={
              
                <MisPedidosPage />
             
            }
          />

          {/* SOLO ADMIN */}
          <Route
            path="/admin/crear-productos"
            element={
              isAdmin ? (
                <CrearProductoPage />
              ) : (
                <p>No puedes acceder a esta página, necesitas ser admin.</p>
              )
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
