// Config.js
import React, { useState } from 'react';
import './Config.css';
import edit from '../../images/notas.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Config() {
  const [savedMessage, setSavedMessage] = useState('');

  const handleSave = () => {
    const anyChanges = checkForChanges();
    setSavedMessage(anyChanges ? '¡Cambios guardados con éxito!' : 'No se han realizado cambios.');
  };

  const checkForChanges = () => {
    const textboxes = document.querySelectorAll('.large-textbox');
    for (const textbox of textboxes) {
      if (textbox.value.trim() !== '') {
        return true; 
      }
    }
    return false; 
  };

  return (
    <div>
      <Navbar /> {/* Agrega el componente Navbar */}
      <div className="config-container center-container">
        <h1 className="title">Configuración</h1>

        <div className="app-container center-container">
          <TextBox label="Editar Nombre:" />
          <NumericTextBox label="Numero telefonico:" />
          <NumericTextBox label="Numero telefonico emergencia:" />
          <TextBox label="Editar Email:" />
          <ToggleableTextBox label="Contraseña:" />
        </div>

        <div className="button-container">
          <button className="show-button" onClick={handleSave}>
            Guardar
          </button>
          {savedMessage && <div className="saved-message">{savedMessage}</div>}
        </div>
      </div>
    </div>
  );
}


const TextBox = ({ label }) => (
  <div className="input-container">
    <img src={edit} alt="Icono" className="icon" />
    <div style={{ margin: '10px', textAlign: 'center' }}>
      <label>{label}</label>
      <input type="text" className="large-textbox" />
    </div>
  </div>
);

const NumericTextBox = ({ label }) => {
  const handleNumericChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = value;
  };

  return (
    <div className="input-container">
      <img src={edit} alt="Icono" className="icon" />
      <div style={{ margin: '10px', textAlign: 'center' }}>
        <label>{label}</label>
        <input type="text" className="large-textbox" onChange={handleNumericChange} />
      </div>
    </div>
  );
};

const ToggleableTextBox = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <img src={edit} alt="Icono" className="icon" />
      <div style={{ margin: '10px', textAlign: 'center', position: 'relative' }}>
        <label>{label}</label>
        <input
          type={showPassword ? 'text' : 'password'}
          className="large-textbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="show-password-button"
          onClick={togglePasswordVisibility}
        >
          Mostrar Contraseña
        </button>
      </div>
    </div>
  );
};

export default Config;