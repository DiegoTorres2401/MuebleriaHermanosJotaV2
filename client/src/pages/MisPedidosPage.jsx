import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
const base_url = import.meta.env.VITE_BASE_URL;

export default function MisPedidosPage() {
  const { token } = useAuthContext();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerPedidos = async () => {
      try {
        const res = await fetch(`${base_url}/ordenes/usuario`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("No se pudieron obtener los pedidos");
        }

        const data = await res.json();
        setPedidos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) obtenerPedidos();
  }, [token]);

  if (loading) return <p>Cargando pedidos...</p>;

  return (
    <div>
      <h1>Mis Pedidos</h1>

      {pedidos.length === 0 ? (
        <p>Aún no has realizado pedidos.</p>
      ) : (
        <ul>
          {pedidos.map((pedido) => (
            <li key={pedido._id}>
              <strong>Pedido #{pedido._id}</strong> — Total: ${pedido.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
