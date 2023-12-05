import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddCitaForm = () => {
    const [nombre_paciente, setNombre] = useState('');
    const [hora_cita, setHora] = useState('');
    const [fecha_cita, setDay] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Sending request with data:', { nombre_paciente, hora_cita, fecha_cita });

            const response = await axios.post('https://cute-pear-eel-fez.cyclic.app/api/v1/citas', {
                nombre_paciente,
                hora_cita,
                fecha_cita,
            });

            setNombre('');
            setHora('');
            setDay('');

            setSuccessMessage('Cita registrada con éxito');

            setErrorMessage('');
        } catch (error) {
            console.error('Error adding cita:', error);

            setErrorMessage('Error al registrar la cita');

            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h2>Añadir Cita</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type="text" value={nombre_paciente} onChange={(e) => setNombre(e.target.value)} />
                <label>Hora:</label>
                <input type="time" value={hora_cita} onChange={(e) => setHora(e.target.value)} />
                <label>Día:</label>
                <input type="date" value={fecha_cita} onChange={(e) => setDay(e.target.value)} />

                <button type="submit">Añadir Cita</button>
                {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default AddCitaForm;
