// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/Imagen1.png';
import './Navbar.css'; // Asume que tienes un archivo CSS separado para Navbar

const Navbar = () => {
  // Función para manejar el clic en el botón de cerrar sesión
  const handleLogout = () => {
    // Aquí puedes añadir la lógica para cerrar la sesión del usuario
    console.log('El usuario ha cerrado sesión');
  };

  return (
    <div className="navbar">
      
      <Link to="/">
      <img src={logoImage} alt="Logo" />
      </Link>

      <div className="navbar-buttons">
        <div className="button-group">
          {/* Botón de cuenta que redirige al perfil del usuario */}
          <Link to="/user" className='account-button'>
            Cuenta
          </Link>

          {/* Botón "Farmacia" que redirige a la página de farmacia */}
          <Link to="/farmacia" className='farmacia-button'>
            Farmacia
          </Link>
          
          
          {/* Botón de cerrar sesión que llama a la función handleLogout */}
          <Link to="/">
          <button onClick={handleLogout} className="logout-button">
            Cerrar sesión
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
