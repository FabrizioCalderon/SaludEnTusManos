import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import Home from './components/Home/Home';
import ResetPassword from './components/ResetPassword/ResetPassword';
import SignUpPa from './components/Sign Up/SignUp';
import UserInfoPage from './components/User/User';
import Farmacia from './components/farmacia/farmacia';
import SignUpDoc from './components/signup_doc/signup_doc';
import Antecedentes from './components/antecedentes/Formulario';
import Calendario from './components/calendario/Calendario';
import Config from './components/configuracion/Config';
import Card from './components/card/Cards';
import Receta from './components/recetas/Receta';
import Datos from './components/card/Datos';
import Home_Doc from './components/home_doc/home_doc';
import DoctorPage from './components/citas/DoctorPage';
import LoginPageDoc from './components/logindoc/LoginForm';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
         <div>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/logindoc" element={<LoginPageDoc onRegister={handleLogin} />} />
          <Route path="/reset" element={<ResetPassword onRegister={handleLogin} />} />
          <Route path ="/user" element={<UserInfoPage />} />  
          <Route path="/registerpa" element={<SignUpPa onRegister={handleLogin} />} />
          <Route path='/registerdoc' element={<SignUpDoc onRegister={handleLogin}/>}/>
          <Route path='/' element={<Home />} />
          <Route path="/farmacia" element={<Farmacia />}></Route>
          <Route path="/antecedentes" element={<Antecedentes/>} />
          <Route path="/calendario" element={<Calendario/>} />      
          <Route path="/config" element={<Config/>} />        
          <Route path="/card" element={<Card/>} />
          <Route path="/receta" element={<Receta/>} />
          <Route path="/datos" element={<Datos/>} />
          <Route path='/doc' element={<Home_Doc/>}/>
          <Route path='/citas' element={<DoctorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;