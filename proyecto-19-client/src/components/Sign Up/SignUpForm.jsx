// SignUpForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // ... (otros estados)
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de envío al servidor...
    try {
      const response = await axios.post('URL_DEL_API_PARA_REGISTRO', {
        firstName,
        lastName,
        // ... (otros datos)
      });

      // Manejar la respuesta del servidor según tus necesidades
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      // Manejar errores de la solicitud
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado fuera del rango 2xx
        setError('Error en el registro. Inténtalo de nuevo.');
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió respuesta del servidor
        setError('No se pudo conectar con el servidor. Inténtalo más tarde.');
      } else {
        // Otro tipo de error
        setError('Error al procesar la solicitud. Inténtalo de nuevo.');
      }
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Nombres"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellidos"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      {/* ... (otros campos del formulario) */}
      <button type="submit">Registrarse</button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default SignUpForm;
