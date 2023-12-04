import React, { useState } from 'react';
import './Boton.css';
import rec from '../../images/receta.jpg'

const Boton = ({ onClick }) => {
  const [expandido, setExpandido] = useState(false);

  const handleToggle = () => {
    setExpandido((prevExpandido) => !prevExpandido);
  };

  return (
    <div
      className={`boton ${expandido ? 'expandido' : ''}`}
      onClick={() => {
        handleToggle();
        onClick();
      }}
    >
      <img src={rec} alt="rec" />
    </div>
  );
};

export default Boton;