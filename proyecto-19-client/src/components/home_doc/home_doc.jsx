import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Asume que tienes un componente Navbar separado
import CitasImg from '../../images/citas.svg';
import AgendaImg from '../../images/agenda.svg';
import UsuarioImg from '../../images/usuario.png';
import FarmaciaImg from '../../images/farmacia.png';
import './Home_doc.css'

const DocInfoPage = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            <div className='view-doctor'>
                <div className="div">
                    <div className='griid'>
                        <div className="busqueda">
                            <div className="text1">Buscar paciente</div>
                            <img className="usuario" src={UsuarioImg} />
                            <div className="my-2">
                                <input type="text" className='buscar' placeholder='Nombre de Paciente' />
                            </div>
                        </div>
                        <Link to="/citas">
                            <div className="citas">
                                <div className="text2">Citas</div>
                                <img className="citasImg" alt="Group" src={CitasImg} />
                            </div>
                        </Link>
                        <Link to="/calendario">
                            <div className="agenda">
                                <div className="text3">Agenda</div>
                                <img className="agendaImg" alt="Group" src={AgendaImg} />
                            </div>
                        </Link>
                        <Link to="/farmacia">
                            <div className="farmacia">
                                <div className="text4">Farmacia</div>
                                <img className="farmaciaImg" alt="Farmacia" src={FarmaciaImg} />
                            </div>
                        </Link>
                    </div>
                    <p className="p">LO PRIMERO ES SU VIDA</p>
                </div>
            </div>
        </div>
    );
};

export default DocInfoPage;