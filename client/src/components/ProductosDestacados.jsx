import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductosDestacados = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://muebleriahermanosjotav2.onrender.com/api/productos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then((data) => {
        setProductos(data.slice(0, 3)); // Solo los primeros 3 productos
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos destacados...</p>;
  if (error) return <p style={{ color: "red", margin: "20px", textAlign: "center"}}>Error: {error}</p>;

  return (
    <section className="productos-destacados">
      <div className="productos-destacados__container container">
        <h2 className="productos__title">Productos Destacados</h2>
        <div className="productos-destacados__grid">
          {productos.map(({_id, name, image, price}) => (
            <ProductCard key={_id} id={_id} name={name} image={image} price={price} agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>
        <Link to="/productos" className="producto-card__btn">Ver todos los productos</Link>
      </div>
    </section>
  );
};

export default ProductosDestacados;
