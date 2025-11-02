import React from "react";
import { useNavigate } from "react-router-dom";

const EliminarButton = ({ productoId }) => {
  const navigate = useNavigate();

  const eliminarProducto = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmDelete) {
      try {
        const response = await fetch(`https://muebleriahermanosjotav2.onrender.com/api/productos/${productoId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          console.log("Producto eliminado");
          navigate("/productos"); 
        } else {
          console.error("Error al eliminar el producto");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    } else {
      console.log("Eliminación cancelada");
    }
  };

  return (
    <button className="producto-card__btn" onClick={eliminarProducto}>
      Eliminar
    </button>
  );
};

export default EliminarButton;
