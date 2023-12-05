import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SignUpimgdoc from "../../images/doc.png";
import './signUp_Doc.css';

const SignUpDoc = () => {
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [dui, setDui] = useState('');
    const [CreMed, setCreMed] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //envío servidor
    }

    return (
        <div className="signup-doc">
            <div className="form-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombres"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Apellidos"
                            value={LastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="DUI (Número de Documento)"
                            value={dui}
                            onChange={(e) => setDui(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Credencial Médica"
                            value={CreMed}
                            onChange={(e) => setCreMed(e.target.value)} />
                    </div>
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Número de Teléfono"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Link to="/doc">
                    <button type="submit">Registrarse</button>
                    </Link>
                    {/* Agrega un enlace para ir a la página de inicio de sesión */}
                    <p className="login-link">
                        ¿Ya tienes una cuenta? <Link to="/logindoc">Inicia sesión aquí</Link>
                    </p>
                </form>
            </div>
            <div className="image-container">
                {/* Puedes cambiar la imagen o el estilo según tus necesidades */}
                <img src={SignUpimgdoc} alt="Descripción de la imagen" />
            </div>
        </div>
    );
};

export default SignUpDoc;