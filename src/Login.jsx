import React, { useState } from 'react';
import authService from '../src/services/authService'; // Importa el servicio


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);         
  const [error, setError] = useState('');
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
  
    try {
        const response = await authService.login(email, password); // Llamar al servicio
        const token = response.response.token;

        if (token) {
            alert("Usuario Autenticado Correctamente");
        }else{
            alert("Usuario No Autenticado");
        }

        localStorage.setItem('authToken', response.token); // Si la respuesta contiene un token

    } catch (err) {
      setError(err); 
    } finally {
      setLoading(false); 
    }
  };
  

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
