// MostrarInfo.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';

const MostrarInfo = ({ savedData, onEdit }) => (
  <div>
    <Navbar />
    <h1>Información Médica Guardada</h1>
    <div>
      <p>Médico: {savedData.medico}</p>
      <p>Alergias: {savedData.alergias}</p>
      <p>Cirugías: {savedData.cirugias}</p>
        <p>Número de Parejas Sexuales: {savedData.nParejasSexuales}</p>
        <p>Inicio de Relaciones Sexuales: {savedData.inicioRelaciones}</p>
        <p>Medicación: {savedData.medicacion}</p>
        <p>Fuma: {savedData.fuma}</p>
        <p>Alcohol: {savedData.alcohol}</p>
        <p>Drogas: {savedData.drogas}</p>
        <p>Actividad Física: {savedData.actividadFisica}</p>
    </div>
    <button onClick={onEdit}>Editar</button>
  </div>
);

export default MostrarInfo;
