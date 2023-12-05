import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SignUpimgdoc from "../../images/doc.png";
import './signUp_Doc.css';

const SignUpDoc = () => {

    const navigate = useNavigate();
    
    const initialForm={
        nombre:"",
        apellido:"",
        dui:"",
        credencial:"",
        email:"",
        telefono:"",
        password:"",
        confirmPassword:""
      }

      const [formData,setFormData]=useState(initialForm);
    


      const handleChange =(e)=>{
        setFormData({
          ...formData,[e.target.name]:e.target.value
        })
      }
    
      const handleSubmit =async(e)=>{
        e.preventDefault();
    
        try {
          const response= await registerUser(formData);
    
          if(response[0]===201){
            navigate("/login")
          }else{
            console.log("Usuario ya existe");
          }
    
        } catch (error) {
          console.log(error);
        }
       
      }

    

    return (
        <div className="signup-container">
      
      <div className="form-container">
       
        <form className="signup-form" onSubmit={handleSubmit} >
          <div className="form-group">
            <input
              type="text"
              placeholder="Nombres"
              name='nombre'
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Apellidos"
              name='apellido'
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="DUI (Número de Documento)"
              name='dui'
              value={formData.dui}
              onChange={handleChange}
              required
            />
            <select
              value={formData.sexo}
              name='sexo'
              onChange={handleChange}
              required
            >
              <option value="">Sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Fecha de Nacimiento"
              name='fechaNacimiento'
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Tipo de Sangre"
              name='tipoSangre'
              value={formData.tipoSangre}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Número de Teléfono"
            name='numeroTelefono'
            value={formData.numeroTelefono}
            onChange={handleChange}
            required
          />
         <div className="form-group">
  <input
    type="password"
    name='password'
    placeholder="Contraseña"
    value={formData.password}
    onChange={handleChange}
    required
  />
</div>

<div className="form-group">
  <input
    type="password"  // Corrige el tipo a 'password'
    name='confirmPassword'  // Mantiene el nombre como 'confirmPassword'
    placeholder="Confirmar Contraseña"
    value={formData.confirmPassword}
    onChange={handleChange}
    required
  />
</div>
                    
                    <button type="submit">Registrarse</button>
                   
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