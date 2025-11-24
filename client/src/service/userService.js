const base_url = import.meta.env.VITE_BASE_URL;

export async function fetchUsers() { // Devuelve todos los usuarios con fetch
  const res = await fetch(`${base_url}/users`);

  if (!res.ok) throw new Error('Error al obtener los usuarios');
  return res.json();
}

export async function fetchUsersPorId(id) { // Devuelvo usuario por ID
  const res = await fetch(`${base_url}/users/${id}`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  return res.json();
}

export async function crearUser(data) { // Crea usuario 
  const res = await fetch(`${base_url}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al crear un usuario');
  return res.json();
}

export async function PerfilUsuario(token) { // Me devuelve el perfil del Usuario.
      try {
        if (!token) {
          console.error("No se encontró token de autenticación.");
          return;
        }

        const response = await fetch("http://localhost:3000/api/users/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
        })

        if (!response.ok) {
          const error = await response.json();
          throw new Error("No se pudo acceder al perfil. Error:",error);
        }

        const data = await response.json();
        console.log(data)
        return data 
      } catch (error) {
        console.error("Error al obtener el perfil:", error.message);
      }
    
}