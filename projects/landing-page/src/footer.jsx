import React from 'react';
import './Footer.css'; 

const FooterLanding = () => {
  return (
    <footer className="footer-container">
      <img
  src="src/assets/img/logo-tech2.png"
  alt="Logo"
  className="img-fluid"
  style={{ maxWidth: '150px' }} // Ajusta el valor según sea necesario
/>

      <p>Todos los derechos reservados &copy; 2023</p>
    </footer>
  );
};

export default FooterLanding;
