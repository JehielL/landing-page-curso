import React from 'react';
import './Footer.css'; 

const FooterLanding = () => {
  return (
    <footer className="footer-container">
      <img
  src="https://i.ibb.co/ynhSkdc/logo-tech2.png"
  alt="Logo"
  className="img-fluid"
  style={{ maxWidth: '150px' }} // Ajusta el valor según sea necesario
/>

     <div className='text-container'> <p>Tech-Chef Todos los derechos reservados &copy; 2023</p>
      <p>Agradecimientos a CertiDevs.</p>
      <p>Con la colaboración de Fundación Adecco.</p>
      <p>Es un proyecto financiado por la Comunidad de Madrid a través de la Agencia para el empleo.</p></div>
    </footer>
  );
};

export default FooterLanding;
