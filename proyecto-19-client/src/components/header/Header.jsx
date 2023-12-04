import React from 'react';
import './Header.css';
import hos from '../../images/hospital.png';

const Header = () => {
  return (
    <div className="navbar">
      <img src={hos} alt="hos" />
      <div>Healthcare</div>
    </div>
  );
}

export default Header;