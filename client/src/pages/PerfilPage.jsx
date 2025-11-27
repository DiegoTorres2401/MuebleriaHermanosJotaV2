import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

const PerfilPage = () => {
  const { userActual } = useAppContext();

  useEffect(() => {
    console.log("userActual:", userActual);
  }, [userActual]);

  if (!userActual) {
    return <p className="perfil-cargando">Cargando perfil...</p>;
  }

  return (
    <div className="perfil-container">
      <div className="perfil-card">

        <h1 className="perfil-titulo">Mi Perfil</h1>

        {userActual.message && (
          <p className="perfil-bienvenida">{userActual.message} 👋</p>
        )}

        <div className="perfil-datos">
          <p><span>Nombre:</span> {userActual.user?.nombre}</p>
          <p><span>Email:</span> {userActual.user?.email}</p>
          <p><span>Rol:</span> {userActual.user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
