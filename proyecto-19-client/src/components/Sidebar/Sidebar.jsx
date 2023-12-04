// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Asume que tienes un archivo CSS separado para Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/user">
      <div className="sidebar-item">Resumen</div>
      </Link>
      <Link to="/datos">
      <div className="sidebar-item">Datos generales</div>
      </Link>
      <Link to="/receta">
      <div className="sidebar-item">Recetas</div>
      </Link>
      <Link to="/antecedentes">
      <div className="sidebar-item">Historial médico</div>
      </Link>
      <Link to="/farmacia">
      <div className="sidebar-item">Medicinas</div>
      </Link>
    
      <Link to="/calendario">
      <div className="sidebar-item">Calendario</div>
      </Link>
      <Link to="/config">
      <div className="sidebar-item">Configuración</div>
      </Link>
      <Link to="/">
      <div className="sidebar-item">Cerrar sesión</div>
      </Link>   
    </div>
  );
}

export default Sidebar;