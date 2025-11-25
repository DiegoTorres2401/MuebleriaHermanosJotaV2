import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const PerfilPage = () => {
const {userActual} = useAppContext()
    useEffect(()=>{
    console.log(userActual)
    },[userActual])
  return (
    <>
        <h1>Perfil de Usuario</h1>
        <div>
          <p>{userActual.message}!!!</p>
          <p><strong>Nombre:</strong> {userActual.user.nombre}</p>
          <p><strong>Email:</strong> {userActual.user.email}</p>
          <p><strong>Rol:</strong> {userActual.user.role}</p>
        </div>
      
    </>
  );
};

export default PerfilPage;