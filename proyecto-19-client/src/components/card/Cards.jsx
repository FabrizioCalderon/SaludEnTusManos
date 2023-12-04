import React from 'react';
import './Card.css';
import usuario from '../../images/usuario.png';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Card = () => {
  const datosPersonales = {
    nombre: 'Nombre Completo',
    edad: 'edad',
    genero: 'Género',
    ocupacion: 'Ocupación',
    domicilio: 'Dirección completa',
    religion: 'Religión',
    celular: 'Número de teléfono celular',
    telefonoEmergencia: 'Número de teléfono de emergencia',
    dui: 'dui',
    altura: '1.75 m',
    peso: '70 kg',
  };

  return (
    <>
    
<div>
      <h1 className="title">Datos Personales</h1>
      <div className="container">
        
        <div className="card">
            
          <div className="data-container">
            
            {Object.entries(datosPersonales).map(([label, valor]) => (
              <div key={label} className="data">
                <div className="label">{label.charAt(0).toUpperCase() + label.slice(1)}:</div>
                <div className="inline-value">
                  {valor}
                </div>
              </div>
            ))}
          </div>
          <div className='img_div'><img src={usuario} className='usu' alt="Usuario" /></div>
        </div>
      </div>
      </div> 
    </>
  );
};

export default Card;
