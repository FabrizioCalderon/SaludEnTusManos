// ButtonRow.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonRow.css';

const ButtonRow = () => {
  return (
    <div className="button-row">
     <Link to="/login">
        <button>Paciente</button>
      </Link>
      <Link to="/registerdoc">
        <button>Doctor</button>
      </Link>
    </div>
  );
};

export default ButtonRow;