import React from 'react';
import './DoctorPage.css'; // Importa el archivo CSS
import CitaList from './citaList';
import AddCitaForm from './AddCitaForm';
import Navbar from '../Navbar/Navbar';

const DoctorPage = () => {
    return (
        <div className="DoctorPage"> 
            <Navbar />
            <div className="container"> 

                <h1 className='text1'>Página del Doctor</h1>
                <div className="form-container"> 
                    <AddCitaForm />
                </div>

                <h2>Lista de Citas</h2>
                <div className="list-container"> 
                    <CitaList />
                </div>
            </div>
        </div>
    );
}

export default DoctorPage;