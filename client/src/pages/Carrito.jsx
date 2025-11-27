import { useCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";

export default function Carrito() {
    const { items, quitarDelCarrito } = useCarrito();

    const total = items.reduce(
        (acum, item) => acum + item.price * item.cantidad,
        0
    );

    if (items.length === 0) {
        return (
            <div className="carrito-vacio">
                <h2>Tu carrito está vacío</h2>
                <Link to="/productos">Ver productos</Link>
            </div>
        );
    }

    return (
        <div className="carrito-container">
            <h1>Tu carrito</h1>

            <ul className="lista-carrito">
                {items.map((item) => (
                    <li key={item._id} className="producto-carrito">
                        <img src={item.image} alt={item.name} />

                        <div className="info">
                            <h3>{item.name}</h3>
                            <p>
                                ${item.price} x {item.cantidad}
                            </p>
                            <p>
                                <b>Subtotal:</b> ${item.price * item.cantidad}
                            </p>
                        </div>

                        <button
                            onClick={() => quitarDelCarrito(item._id)}
                            className="btn-quitar"
                        >
                            Quitar
                        </button>
                    </li>
                ))}
            </ul>

            <div className="carrito-footer">
                <h2>Total: ${total}</h2>

                <Link to="/checkout" className="btn-checkout">
                    Ir al Checkout
                </Link>
            </div>
        </div>
    );
}
