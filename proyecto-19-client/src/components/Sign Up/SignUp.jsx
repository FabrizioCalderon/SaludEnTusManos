// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Signupimg from '../../images/Signup.png';
import '../../images/Signup.png'; // Importa tu archivo CSS
import './SignUp.css'; // Importa tu archivo CSS

const SignUp = () => {
  const [nombres, setFirstName] = useState('');
  const [apellidos, setLastName] = useState('');
  const [dui, setDui] = useState('');
  const [sexo, setGender] = useState('');
  const [fechaNacimiento, setDob] = useState('');
  const [tipoSangre, setBloodType] = useState('');
  const [email, setEmail] = useState('');
  const [numeroTelefono, setPhoneNumber] = useState('');
  const [contrasena, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de envío al servidor...
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user', {
        "nombre": nombres,
        "apellido": apellidos,
        "dui": dui,
        "sexo": sexo,
        "fechaNacimiento": fechaNacimiento,
        "tipoSangre": tipoSangre,
        "email": email,
        "numeroTelefono": numeroTelefono,
        "password": contrasena,
      });

      // Manejar la respuesta del servidor según tus necesidades
      console.log('Respuesta del servidor:', response.data);
      history.push('/auth');
    } catch (error) {
      // Manejar errores de la solicitud
      console.error('Error al registrar usuario:', error);
    }
  };

  return (
    <div className="signup-container">
      
      <div className="form-container">
       
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombres"
              value={nombres}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              value={apellidos}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="DUI (Número de Documento)"
              value={dui}
              onChange={(e) => setDui(e.target.value)}
              required
            />
            <select
              value={sexo}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Fecha de Nacimiento"
              value={fechaNacimiento}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Tipo de Sangre"
              value={tipoSangre}
              onChange={(e) => setBloodType(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Número de Teléfono"
            value={numeroTelefono}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <div className="form-group">
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        
          </div>
          <Link to="/user">
          <button type="submit">Registrarse</button>
          </Link>
              {/* Agregar enlace para ir a la página de inicio de sesión */}
        <p className="login-link">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>      
        </form>

          
      
        
      </div>
      <div className="image-container">
        {/* Puedes cambiar la imagen o el estilo según tus necesidades */}
        <img src={Signupimg} alt="Descripción de la imagen"/>
      </div>
    </div>
  );
};

export default SignUp;