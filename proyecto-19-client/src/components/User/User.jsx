import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './User.css';
import { getUserData } from '../../services/auth.services'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const UserInfoPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [status, data] = await getUserData();

        if (status === 200) {
          setUserData(data);
        } else {
          console.error("Error al obtener los datos del usuario:", status, data);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Información personal */}
      <div className="user-info-container">
        <div className="personal-info">
          <div className="info-row">
            <div>Nombres: {userData?.nombres}</div>
            <div>Apellidos: {userData?.apellidos}</div>
            <div>DUI: {userData?.dui}</div>
          </div>
          <div className="info-row">
            <div>Tipo de Sangre: {userData?.tipoSangre}</div>
            <div>ID Paciente: {userData?.idPaciente}</div>
            <div>Fecha de Nacimiento: {userData?.fechaNacimiento}</div>
            <div>Ultimo Pesaje: {userData?.ultimoPesaje} kg</div>
          </div>
        </div>

        {/* Barra de navegación y cuadrícula */}
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
