// ImageRow.js
import React from 'react';
import './ImageRow.css';
import Imagen1 from '../../images/Imagen1.png';
import Imagen2 from '../../images/Imagen2.png';
import Imagen3 from '../../images/Imagen3.png';

const ImageRow = () => {
  return (
    <div className="image-row">
      <img src={Imagen1} alt="Imagen 1" />
      <img src={Imagen2} alt="Imagen 2" />
      <img src={Imagen3} alt="Imagen 3" />
    </div>
  );
};

export default ImageRow;