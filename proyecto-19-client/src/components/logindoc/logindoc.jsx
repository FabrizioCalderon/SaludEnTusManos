// LoginPage.jsx
import React from 'react';
import LoginFormDoc from './LoginForm';
import './LoginPage.css';
import Fondo from '../../images/Rectangle 1.png';

const LoginPageDoc = () => {
  return (
    <div className="login-page">
      <div className="image-container">
      <img src={Fondo} alt="Fondo" />
      </div>
      
      <div className="form-container">
        <LoginFormDoc/>
      </div>
    </div>
  );
};

export default LoginPageDoc;