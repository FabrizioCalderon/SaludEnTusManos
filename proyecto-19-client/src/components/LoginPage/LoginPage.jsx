// LoginPage.jsx
import React from 'react';
import LoginForm from './LoginForm';
import './LoginPage.css';
import Fondo from '../../images/Rectangle 1.png';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="image-container">
      <img src={Fondo} alt="Fondo" />
      </div>
      
      <div className="form-container">
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;