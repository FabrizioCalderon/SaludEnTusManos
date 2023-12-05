import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar el componente Link si estás utilizando React Router
import './LoginForm.css';

const LoginFormDoc = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form>
        <label htmlFor="username" className="label-text">Credencial:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password" className="label-text">Contraseña:</label>
        <input type="password" id="password" name="password" />
        <Link to="/doc">
        <button type="submit">Iniciar sesión</button>
        </Link>
      </form>

      {/* Agrega un enlace para ir a la página de registro */}
      <p className="signup-link">
        ¿No tienes una cuenta? <Link to="/registerdoc">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginFormDoc;
