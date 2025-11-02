import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ agregarAlCarrito }) => {
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
       <section className="productos-destacados">
        <div className="productos-destacados__container container">
          <h2 className="productos__title">Productos</h2>
          <div className="productos-destacados__grid">

            {productos.map(({_id, name, image, price}) => (
              <ProductCard key={_id} id={_id} name={name} image={image} price={price} agregarAlCarrito={agregarAlCarrito} />
            ))}

          </div>

        </div>
      </section>
  );
};

export default ProductList;

