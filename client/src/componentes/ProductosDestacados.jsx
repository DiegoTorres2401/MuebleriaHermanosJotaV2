import React from "react";
import ProductCard from "./ProductCard";
import "./../styles/global.css";

const productos = [
  {
    id: 1,
    nombre: "Silla Moderna",
    descripcion: "Cómoda silla de diseño minimalista.",
    precio: 12000,
    imagen: "/assets/img/silla.png",
  },
  {
    id: 2,
    nombre: "Mesa de Comedor",
    descripcion: "Mesa de madera maciza para 6 personas.",
    precio: 45000,
    imagen: "/assets/img/mesa.png",
  },
  {
    id: 3,
    nombre: "Sofá Chester",
    descripcion: "Sofá de cuero elegante y confortable.",
    precio: 75000,
    imagen: "/assets/img/sofa.png",
  },
];

const ProductosDestacados = () => {
  return (
    <section className="productos-destacados">
      <div className="productos-destacados__container container">
        <h2 className="productos__title">Productos Destacados</h2>
        <div className="productos-destacados__grid">
          {productos.map((prod) => (
            <ProductCard
              key={prod.id}
              nombre={prod.nombre}
              descripcion={prod.descripcion}
              precio={prod.precio}
              imagen={prod.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductosDestacados;
