import { useState } from "react";
import { useCarrito } from "../context/CarritoContext";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
    const { items, limpiarCarrito } = useCarrito();
    const { token } = useAuthContext();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const total = items.reduce(
        (acc, item) => acc + item.price * item.cantidad,
        0
    );

    const enviarPedido = async () => {
        try {
            setLoading(true);
            setError("");

            const res = await fetch("http://localhost:4000/ordenes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    items,
                    total,
                }),
            });

            if (!res.ok) throw new Error("No se pudo guardar el pedido");

            limpiarCarrito();
            navigate("/mis-pedidos");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (items.length === 0) {
        return (
            <div className="checkout-container">
                <h1 className="checkout-title">Checkout</h1>
                <p>No tienes productos en el carrito.</p>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Confirmar Pedido</h1>

            <ul className="checkout-lista">
                {items.map((item) => (
                    <li key={item._id} className="checkout-item">
                        {item.name} x {item.cantidad} — ${item.price * item.cantidad}
                    </li>
                ))}
            </ul>

            <p className="checkout-total">Total: ${total}</p>

            {error && <p className="checkout-error">{error}</p>}

            <div className="checkout-buttons">
                {/* 🔙 Botón Volver */}
                <button
                    className="btn-checkout"
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>

                <button
                    className="btn-checkout"
                    onClick={enviarPedido}
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Confirmar Pedido"}
                </button>
            </div>
        </div>
    );
}
