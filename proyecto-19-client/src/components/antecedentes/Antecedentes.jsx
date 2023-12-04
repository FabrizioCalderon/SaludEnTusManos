
import React from 'react';
import './Antecedentes.css';
import docu from '../../images/carpeta.png';
import fami from '../../images/familia.png';
import pru from '../../images/prueba-de-alergia.png';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';



function Antecedentes() {
  return (
    <>
    <Navbar/>
    <div className='title'>Antecedentes</div>  
      <div className="container">
        <div className="button-container">
          <button className="button">
            <div className='img_div'><img alt="img" src={docu} className='doc' /></div>
            <span className="button-text">Antecedentes Personales</span>
          </button>
        </div>
        <div className="button-container">
          <button className="button">
            <div className='img_div'><img alt="img" src={pru} className='prub' /></div>
            <span className="button-text">Alergias a medicamentos, cirugias, etc</span>
          </button>
        </div>
        <div className="button-container">
          <button className="button">
            <div className='img_div'><img alt="img" src={fami} className='prub' /></div>
            <span className="button-text">Antecedentes Familiares</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Antecedentes;