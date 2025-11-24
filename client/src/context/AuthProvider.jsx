import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "../service/authService";

const decodeToken = (token) => {
  try {
    const payload = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    if (payload.exp < currentTime) {
      console.warn("Token expirado");
      return null;
    }

    return { id: payload.userId, nombre: payload.nombre, email: payload.email, role: payload.role, };
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const userData = decodeToken(storedToken);
      if (userData) {
        setToken(storedToken);
        setUser(userData);
        setIsAdmin(userData.role === "admin");
        setIsAuthenticated(true);
      } else {
          setToken(null);
          setUser(null);
          setIsAdmin(false);
          setIsAuthenticated(false);
          localStorage.removeItem("token");
      }
    } else {
          setIsAuthenticated(false);
    }
  }, [token]);

  const login = async (credentials) => {
    try {
      const { token } = await loginUser(credentials);

      if (!token) {
        throw new Error("No se recibió token del servidor");
      }

      const userData = decodeToken(token);

      if (userData) {
        setToken(token);
        localStorage.setItem("token", token);
        setUser(userData);
        setIsAdmin(userData.role === "admin");
        setIsAuthenticated(true);
      } else {
        throw new Error("Token inválido o expirado");
      }
    } catch (err) {
      console.log("Error: ", err.message);
      throw err; // ← AGREGAR ESTA LÍNEA para propagar el error
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAdmin(false);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No hay token disponible. Vuelve a Logearte.");
    return {
      Authorization: `Bearer ${token}`,
    };
  };

    const value = { token, user, isAuthenticated, isAdmin, login, logout, getAuthHeaders,}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};