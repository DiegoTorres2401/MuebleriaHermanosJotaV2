import React from "react";
import { useNavigate } from "react-router-dom";

const base_url = import.meta.env.VITE_BASE_URL;

const EliminarButton = ({ productoId }) => {
  const navigate = useNavigate();

  const eliminarProducto = async () => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${base_url}/productos/${productoId}`, {
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
  };

  return (
    <button className="producto-card__btn" onClick={eliminarProducto}>
      Eliminar
    </button>
  );
};

export default EliminarButton;
