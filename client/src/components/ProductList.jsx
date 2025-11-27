import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
const base_url = import.meta.env.VITE_BASE_URL;

const ProductList = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6; // Muestra 6 productos por página (2x3)

  useEffect(() => {
    fetch(`${base_url}/productos`)
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

  // Calcular índices para la paginación
  const indiceUltimo = paginaActual * productosPorPagina;
  const indicePrimero = indiceUltimo - productosPorPagina;
  const productosActuales = productos.slice(indicePrimero, indiceUltimo);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  // Cambiar de página
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al inicio
  };

  // Generar números de página
  const generarNumerosPagina = () => {
    const numeros = [];
    for (let i = 1; i <= totalPaginas; i++) {
      numeros.push(i);
    }
    return numeros;
  };

  if (cargando) return <p style={{ textAlign: "center", padding: "2rem" }}>Cargando productos...</p>;
  if (error) return <p style={{ color: "red", margin: "20px", textAlign: "center"}}>Error: {error}</p>;

  return (
    <section className="productos-destacados">
      <div className="productos-destacados__container container">
        <h2 className="productos__title">Nuestra Colección</h2>
        <p className="productos__subtitle">Diseños que transforman tu hogar en un santuario de paz y estilo.</p>
        
        <div className="productos-destacados__grid">
          {productosActuales.map(({_id, name, image, price}) => (
            <ProductCard key={_id} id={_id} name={name} image={image} price={price} agregarAlCarrito={agregarAlCarrito} />
          ))}
        </div>

        {/* Paginación */}
        {totalPaginas > 1 && (
          <div className="pagination">
            <button
              className="pagination__button pagination__button--prev"
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
            >
              Anterior
            </button>

            {generarNumerosPagina().map((numero) => (
              <button
                key={numero}
                className={`pagination__button ${paginaActual === numero ? 'pagination__button--active' : ''}`}
                onClick={() => cambiarPagina(numero)}
              >
                {numero}
              </button>
            ))}

            <button
              className="pagination__button pagination__button--next"
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;

