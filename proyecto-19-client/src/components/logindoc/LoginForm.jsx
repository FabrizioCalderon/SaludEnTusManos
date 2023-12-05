import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { loginDoctor } from '../../services/auth.services';

const LoginFormDoc = () => {
  const navigate = useNavigate();

  const initialForm = {
    credencial: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialForm);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginDoctor(formData);
      if (response[0] === 200) {
        sessionStorage.setItem("token", response[1]);
        setSuccess(true);
      } else {
        console.log("Usuario no encontrado");
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/doc");
    }
  }, [success]);

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="credencial" className="label-text">Credencial:</label>
        <input
          type="text"
          id="credencial"
          name="credencial"
          onChange={handleChange}
        />

        <label htmlFor="password" className="label-text">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        
        <button type="submit">Iniciar sesión</button>
      </form>

      {/* Agrega un enlace para ir a la página de registro */}
      <p className="signup-link">
        ¿No tienes una cuenta? <Link to="/registerPa">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginFormDoc;
