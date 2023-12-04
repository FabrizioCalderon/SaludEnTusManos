import React from 'react';
import './Datos.css';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Card from './Cards';  // Asegúrate de ajustar la ruta si es necesario

const Datos = () => {
  return (
    <>
    <div className="navb">
      <Navbar />
      <div className="container-main">
      <Sidebar />
        <Card />
        
      </div>
      </div>
    </>
  );
};

export default Datos;
