import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Cambia esto a la URL de tu API REST en Express

const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email,
      password,
    });
    return response.data; // Retorna la respuesta de la API
  } catch (error) {
    throw error.response?.data || 'Error al iniciar sesión'; // Lanza el error si algo falla
  }
};

export default {
  login,
};
