// UserInfoPage.js
import React from 'react';
import Navbar from '../Navbar/Navbar'; // Asume que tienes un componente Navbar separado
import Sidebar from '../Sidebar/Sidebar'; // Asume que tienes un componente Sidebar separado
import './User.css'; // Asume que tienes un archivo CSS separado para UserInfoPage

import jwt_decode from 'jwt-decode';

const TOKEN = sessionStorage.getItem('token');

if (TOKEN) {
  try {
    const decodedToken = jwt_decode(TOKEN);

    // `decodedToken` ahora contiene la información del usuario
    console.log(decodedToken);

    // Accede a datos específicos del usuario, por ejemplo:
    const nombres = decodedToken.nombres;
    const apellidos = decodedToken.apellidos;
    const dui = decodedToken.dui;
    const tipoSangre = decodedToken.tipoSangre;
    const fechaNacimiento = decodedToken.fechaNacimiento;

    // Ahora puedes usar estos datos como desees en tu componente UserInfoPage
  } catch (error) {
    console.error('Error al decodificar el token:', error);
  }
} else {
  console.error('No se encontró un token de usuario.');
}



const UserInfoPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Información personal */}
      <div className="user-info-container">
        <div className="personal-info">
          <div className="info-row">
            <div>Nombres:{nombres} </div>
            <div>Apellidos: {apellidos}</div>
            <div>DUI: {dui}</div>
          </div>
          <div className="info-row">
            <div>Tipo de Sangre: {tipoSangre}</div>
            <div>ID Paciente: 98765</div>
            <div>Fecha de Nacimiento: {fechaNacimiento}</div>
            <div>Ultimo Pesaje: 70 kg</div>
          </div>
        </div>

        {/* Barra de navegación y cuadricula */}
        <div className="dashboard">
          <Sidebar />
          <div className="grid-container">
            {/* Contenido de los cuadros en la cuadrícula */}
            <div className="grid-item">Datos Generales</div>
            <div className="grid-item">Recetas</div>
            <div className="grid-item">Historial Médico</div>
            <div className="grid-item">Medicinas</div>
            <div className="grid-item">Antecedentes</div>
            <div className="grid-item">Contactos Doctor</div>
            <div className="grid-item">Calendario</div>
            <div className="grid-item">Recordatorios</div>
            <div className="grid-item">Configuraciones</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;