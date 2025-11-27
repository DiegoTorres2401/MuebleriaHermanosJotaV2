import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { useCarrito } from "../context/CarritoContext";

const ProductoPage = () => {
  const { id } = useParams(); 
  const { agregarAlCarrito } = useCarrito();  // ⬅💥 obtener función del contexto

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://muebleriahermanosjotav2.onrender.com/api/productos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        return response.json();
      })
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener producto:", error);
        setError(error.message);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return (
    <p style={{ color: "red", margin: "20px", textAlign: "center" }}>
      Error: {error}
    </p>
  );

  return (
    <ProductDetail 
      producto={producto} 
      agregarAlCarrito={() => agregarAlCarrito(producto)}  // ⬅ enviar el producto
    />
  );
};

export default ProductoPage;
