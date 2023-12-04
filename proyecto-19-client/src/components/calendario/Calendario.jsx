import React, { useState } from 'react';
import './Calendario.css'; 
import Navbar from '../Navbar/Navbar';

const Calendario = () => {
    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    const [currentMonth, setCurrentMonth] = useState(0);

    const goToPreviousMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth - 1 + 12) % 12);
    };

    const goToNextMonth = () => {
        setCurrentMonth(prevMonth => (prevMonth + 1) % 12);
    };

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const renderCalendario = () => {
        const totalDays = getDaysInMonth(currentMonth, 2023);
        const firstDayOfMonth = new Date(2023, currentMonth, 1).getDay();

        const calendario = [];
        let dayCounter = 1;

        for (let week = 0; week < 6; week++) {
            const days = [];

            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                const day = dayCounter - firstDayOfMonth;

                days.push(
                    <div key={dayCounter} className={`day ${day <= 0 || day > totalDays ? 'empty' : ''}`}>
                        {day > 0 && day <= totalDays ? day : ''}
                    </div>
                );
                dayCounter++;
            }

            calendario.push(<div key={week} className="week">{days}</div>);
        }

        return calendario;
    };

    return (
        <>
        <Navbar/>
            <h1 className='title'>Agenda</h1>
            <div className="container">
                <div className="buttons">
                    <button className="customButton" onClick={goToPreviousMonth}>Mes Anterior</button>
                    <button className="customButton" onClick={goToNextMonth}>Mes Siguiente</button>
                </div>
                <h2>{months[currentMonth]} 2023</h2>
                <div className="daysOfWeek">
                    {daysOfWeek.map(day => (
                        <div key={day} className="dayOfWeek">{day}</div>
                    ))}
                </div>
                <div className="weeksContainer">
                    {renderCalendario()}
                </div>

            </div>
            <div className="phrases">
            <p className="ocupado">Ocupado</p>
            <p className="disponible">Disponible</p>
            <p className="no-disponible">No Disponible</p>
        </div>
        </>
    );
};

export default Calendario;