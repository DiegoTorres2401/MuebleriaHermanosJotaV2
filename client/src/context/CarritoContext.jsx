import { createContext, useContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const saved = localStorage.getItem("carrito");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // Guardar carrito cuando cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(items));
  }, [items]);

  const agregarAlCarrito = (producto) => {
    setItems((prev) => {
      const existe = prev.find((item) => item._id === producto._id);
      if (existe) {
        return prev.map((item) =>
          item._id === producto._id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (id) => {
    setItems((prev) => {
      const item = prev.find((i) => i._id === id);

      if (item?.cantidad > 1) {
        return prev.map((i) =>
          i._id === id ? { ...i, cantidad: i.cantidad - 1 } : i
        );
      }

      return prev.filter((i) => i._id !== id);
    });
  };

  const limpiarCarrito = () => setItems([]);

  return (
    <CarritoContext.Provider
      value={{ items, agregarAlCarrito, quitarDelCarrito, limpiarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
