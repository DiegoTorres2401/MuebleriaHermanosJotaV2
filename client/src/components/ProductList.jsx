import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/productos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p style={{ color: "red", margin: "20px", textAlign: "center"}}>Error: {error}</p>;

  return (
       <section class="productos-destacados">
        <div class="productos-destacados__container container">
          <h2 class="productos__title">Productos</h2>
          <div class="productos-destacados__grid">

            {productos.map(({id, name, image, price}) => (
              <ProductCard key={id} id={id} name={name} image={image} price={price}/>
            ))}

          </div>

        </div>
      </section>
  );
};

export default ProductList;

