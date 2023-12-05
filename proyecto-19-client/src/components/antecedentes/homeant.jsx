import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import AddAntecedentesForm from './Formulario';
import MostrarInfo from './mostrarInfo';


const Homeant = () => {
  const [formData, setFormData] = useState({
    medico: '',
    alergias: '',
    cirugias: '',
    nParejasSexuales: 0,
    inicioRelaciones: '',
    medicacion: '',
    haFumado: false,
    inicioFumado: '',
    alcohol: false,
    inicioAlcohol: '',
    consumeDrogas: false,
    inicioConsumoDrogas: '',
    tipoDrogas: '',
    realizaEjercicio: false,
    tiposEjercicio: '',
  });

  const handleFormSubmit = async () => {
    // Lógica para manejar el envío del formulario (puede llamar a la API, etc.)
    try {
      console.log('Enviando formulario con datos:', formData);

      console.log('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario:', error.message);
    }
  };

  return (
    <div className="DoctorPage">
      <Navbar />
      <div className="container">
        <h1 className="text1">Página del Doctor</h1>
        <div className="form-container">
          <AddAntecedentesForm formData={formData} setFormData={setFormData} onSubmit={handleFormSubmit} />
        </div>

        <h2>Información Médica</h2>
        <div className="info-container">
          {/* Pasa el estado al componente MostrarInfo */}
          <MostrarInfo savedData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Homeant;