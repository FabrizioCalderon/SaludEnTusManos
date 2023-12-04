import React, { useEffect, useState } from 'react';
import { getCitas } from '../../services/citas.service';
import './DoctorPage.css'; // Importa el archivo CSS

const CitaList = () => {
  const [citas, setCitas] = useState([]);

  async function fetchCitas() {
    const citas = await getCitas();
    setCitas(citas);
  }

  useEffect(() => {
    fetchCitas();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Hora</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {citas.map(cita => (
            <tr key={cita._id}>
              <td>{cita.nombre_paciente}</td>
              <td>{cita.hora_cita}</td>
              <td>{cita.fecha_cita.substring(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitaList;
