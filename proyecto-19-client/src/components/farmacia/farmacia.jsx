import React, { useState } from "react";
import "./farmacia.css"; // Asegúrate de tener la ruta correcta al archivo CSS
import medicinaImg from "../../images/medicina.png";
import hospitalImg from "../../images/hospital.png";
import Navbar from "../Navbar/Navbar";

const Farmacia = () => {
  const [cantidadesDisponibles, setCantidadesDisponibles] = useState([0, 0, 0, 0, 0, 0]);

  const handleIncrementar = (index) => {
    setCantidadesDisponibles((prevCantidades) => {
      const nuevasCantidades = [...prevCantidades];
      nuevasCantidades[index] += 1;
      return nuevasCantidades;
    });
  };

  const handleDecrementar = (index) => {
    setCantidadesDisponibles((prevCantidades) => {
      const nuevasCantidades = [...prevCantidades];
      nuevasCantidades[index] = Math.max(nuevasCantidades[index] - 1, 0);
      return nuevasCantidades;
    });
  };

  const handleAgregarAlCarrito = (index) => {
    // Lógica para agregar al carrito
    console.log(`Medicina ${index + 1} agregada al carrito`);
  };

  return (

    <div>
      <div className="nav">
        <Navbar />
      </div>

      <div className="desktop">
        <div className="overlap-group">
          <div className="text-wrapper-2">Medicinas</div>
        </div>

        <div className="medicinas-container">
          {cantidadesDisponibles.map((cantidad, index) => (
            <div key={index} className="medicina">
              <img className="medicina-img" alt={`Medicina ${index + 1}`} src={medicinaImg} />
              <div className="contenido-derecha">
                <div className="nombre-medicina">Medicina {index + 1}</div>
                <div className="rectangle-2" />
                <div className="cantidad-disponible">Cantidad Disponible:</div>
                <div className="cantidad">{cantidad}</div>
                <div className="contador">
                  <div className="contador-wrapper">
                    <div className="mas" onClick={() => handleIncrementar(index)}>
                      +
                    </div>
                    <div className="contador-linea"></div>
                    <div className="menos" onClick={() => handleDecrementar(index)}>
                      -
                    </div>
                  </div>
                </div>
                <div className="boton-agregar">
                  <button onClick={() => handleAgregarAlCarrito(index)}>Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Farmacia;
