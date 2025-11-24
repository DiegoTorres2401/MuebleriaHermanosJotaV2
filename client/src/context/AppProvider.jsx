import { useState, useEffect } from "react";
import { fetchUsers, crearUser,PerfilUsuario } from "../service/userService";
import { useAuthContext } from "./AuthContext";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [userActual, setUserActual] = useState()
  const {isAuthenticated, token} = useAuthContext()

  useEffect(() => {
    cargarUsers();
    if(isAuthenticated){
      obtenerPerfilUsuario(token)
    }else{
      setUserActual(null)
    }
  }, [isAuthenticated,token]);
  
  const cargarUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (e) {
      console.error(e);
    }
  };
  const agregarUser = async (data) => {
    const nuevo = await crearUser(data);
    setUsers((prev) => [...prev, nuevo]);
    return nuevo;
  };

  const obtenerPerfilUsuario= async (token)=>{
        try{
          const data = await PerfilUsuario(token)
          console.log(data)
          setUserActual(data)
        }catch(err){
          console.error("Error al obtener perfil:", err);
        }
  }

  return (
    <AppContext.Provider value={{ users, userActual, agregarUser, obtenerPerfilUsuario }}>{children}</AppContext.Provider>
         );
};