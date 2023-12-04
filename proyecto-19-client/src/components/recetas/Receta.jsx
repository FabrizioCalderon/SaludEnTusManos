import React, { useState } from 'react';
import './Receta.css';
import Boton from './Boton';
import Sidebar from '../Sidebar/Sidebar'; // Importa el componente Sidebar
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Receta = () => {
  const [botonExpandido, setBotonExpandido] = useState(null);

  const handleClick = (index) => {
    setBotonExpandido(index);
  };

  return (
    <>
      <Navbar />
      <div className="contenedor">
        {/* Agrega el componente Sidebar al lado izquierdo de las recetas */}
       
        
        <div className="recetas">
          <h1 className="title">Receta medicas</h1>
          <div className="fila">
            <Boton index={0} onClick={handleClick} expandido={botonExpandido === 0} />
            <Boton index={1} onClick={handleClick} expandido={botonExpandido === 1} />
          </div>
          <div className="fila">
            <Boton index={2} onClick={handleClick} expandido={botonExpandido === 2} />
            <Boton index={3} onClick={handleClick} expandido={botonExpandido === 3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Receta;
