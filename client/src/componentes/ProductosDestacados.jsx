import React from "react";
import ProductCard from "./ProductCard";
import productos from "../data/productos";


const ProductosDestacados = ({ seleccionarProducto }) => {
  return (
    <section className="productos-destacados">
      <h2 className="productos__title">Productos Destacados</h2>
      <div className="productos-destacados__grid">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            seleccionarProducto={seleccionarProducto}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductosDestacados;
