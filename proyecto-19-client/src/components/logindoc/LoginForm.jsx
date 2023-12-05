import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpimgdoc from '../../images/doc.png';
import { registerUser } from '../../services/auth.services';
import './LoginForm.css';

const LoginFormDoc = () => {
  const navigate = useNavigate();

  const initialForm = {
    credencial: '',
    password: '',
  };
  const [formData,setFormData]=useState(initialForm);
  const [succes,setSucces]=useState(false);
  
  
  const handleChange =(e)=>{
    setFormData({
      ...formData,[e.target.name]:e.target.value
    })
  }
  
  
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      if (response[0]===200) {
  
        sessionStorage.setItem("token",response[1]);
        setSucces(true);
      }else {
        console.log("user not found");
        setSucces(false);
      }
    } catch (error) {
      
    }
  }
  
  useEffect(()=>{
    if(succes){
      navigate("/doc")
    }
  },[succes])

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="credencial" className="label-text">
          Credencial:
        </label>
        <input type="text" id="credencial" name="credencial" onChange={handleChange} />

        <label htmlFor="password" className="label-text">
          Contraseña:
        </label>
        <input type="password" id="password" name="password" onChange={handleChange} />

        <button type="submit">Iniciar sesión</button>
      </form>

      {/* Agregar un enlace para ir a la página de registro */}
      <p className="signup-link">
        ¿No tienes una cuenta? <Link to="/registerdoc">Regístrate aquí</Link>
      </p>
    </div>
  );
};

export default LoginFormDoc;
