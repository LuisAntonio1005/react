import React from 'react';
import MiImagen from './logo.jpg';


const Inicio = () => {
  return (
    <div>
      <h1 className="tituloF">¡Bienvenido! al portal Administrativo del Tecnológico de Estudios Superiores de Jilotepec.</h1>
   
      <img src={MiImagen} alt="Descripción de la imagen" style={{ width: '200px', height: 'auto', display: 'block', margin: '0 auto' }} />
        
        <p className="paragraph">"Por la Excelencia en la Educación, la Cultura y la Ecología".</p>
        <footer class="contact-footer">
  <h2>Contacto</h2>
  <ul>
    <li><i class="fa fa-envelope"></i> tesjilotepec@edomex.gob.mx</li>
    <li><i class="fa fa-phone"></i> 761 690 6852</li>
    <li><i class="fa fa-map-marker"></i> Carretera Jilotepec a Chapa de Mota km. 6.5, Ejido de Jilotepec, C.P. 54240, Jilotepec de Molina Enríquez</li>
  </ul>
</footer>

       </div>
  );
};

export default Inicio;
