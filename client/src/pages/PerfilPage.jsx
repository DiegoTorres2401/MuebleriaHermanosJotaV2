import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const PerfilPage = () => {
  const { userActual } = useAppContext();

  useEffect(() => {
    console.log("userActual:", userActual);
  }, [userActual]);

  if (!userActual) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <>
      <h1>Perfil de Usuario</h1>

      <div>
        {userActual.message && <p>{userActual.message}!!!</p>}

        <p><strong>Nombre:</strong> {userActual.user?.nombre}</p>
        <p><strong>Email:</strong> {userActual.user?.email}</p>
        <p><strong>Rol:</strong> {userActual.user?.role}</p>
      </div>
    </>
  );
};

export default PerfilPage;
