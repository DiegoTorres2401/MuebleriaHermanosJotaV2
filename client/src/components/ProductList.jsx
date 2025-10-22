import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productos, seleccionarProducto }) => {
  if (!productos) return <p>Cargando...</p>;
  return (
    <section className="productos-destacados">
      <h2 className="productos__title">Productos Destacados</h2>
      <div className="productos-destacados__grid">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} seleccionarProducto={seleccionarProducto} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
