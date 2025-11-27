const base_url = import.meta.env.VITE_BASE_URL;

// Trae todos los usuarios
export async function fetchUsers() {
  const res = await fetch(`${base_url}/users`);
  if (!res.ok) throw new Error('Error al obtener los usuarios');
  return res.json();
}

// Trae un usuario por ID
export async function fetchUsersPorId(id) {
  const res = await fetch(`${base_url}/users/${id}`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  return res.json();
}

// Crear usuario
export async function crearUser(data) {
  const res = await fetch(`${base_url}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Error al crear un usuario');
  return res.json();
}

// Obtener perfil del usuario logueado
export async function PerfilUsuario(token) {
  try {
    if (!token) {
      console.error("No se encontró token de autenticación.");
      return null;
    }

    const response = await fetch(`${base_url}/users/profile`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const text = await response.text(); // Para debug si hay HTML
      console.error("Error del backend:", text);
      throw new Error("No se pudo acceder al perfil.");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error al obtener el perfil:", error.message);
    return null;
  }
}
