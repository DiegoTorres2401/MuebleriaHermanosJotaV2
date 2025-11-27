import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
const base_url = import.meta.env.VITE_BASE_URL;


const ProductosDestacados = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${base_url}/productos`)
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
        <p className="productos__subtitle">Articulos que te pueden interesar</p>
        <div className="productos-destacados__grid">
          {productos.map(({_id, name, image, price}) => (
            <ProductCard key={_id} id={_id} name={name} image={image} price={price} agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>
        <div className="producto-card__btn-container">
        <Link to="/productos" className="producto-card__btn">Ver todos los productos</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;
