import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
const base_url = import.meta.env.VITE_BASE_URL;

export default function MisPedidosPage() {
  const { token } = useAuthContext();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const obtenerPedidos = async () => {
      const res = await fetch(`${base_url}/ordenes/mis-pedidos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setPedidos(data);
    };

    obtenerPedidos();
  }, [token]);

  return (
    <div>
      <h1>Mis Pedidos</h1>

      {pedidos.length === 0 ? (
        <p>Aún no has realizado pedidos.</p>
      ) : (
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido._id}>
              Pedido #{pedido._id} — Total: ${pedido.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
