import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './slider';
import WelcomeMessage from './WelcomeMessage';
import FooterLanding from './footer';
import Skills from './skills';
import Mision from './mision'
import './index.css';
import WhatsAppButton from './WhatsappButton.jsx';





function App() {
  const images = [
    'src/assets/img/imgCurso1.png',
    'src/assets/img/imgCurso2.jpeg',
    'src/assets/img/imgCurso3.jpg',
    'src/assets/img/imgCurso4.jpeg',
    'src/assets/img/imgCurso5.jpeg',
    'src/assets/img/imgCurso6.jpeg',
  ];

  const links = [
    'https://formacion.fundacionadecco.org/',
    'https://formacion.fundacionadecco.org/',
    '',
    ''
  ];

  return (
    <div className="App">
      <div className='header-container'><Header /></div>
      <div className='welcome-message'><WelcomeMessage style={{ position: 'sticky', top: '10px', zIndex: 100 }} /></div>
      <div className="slider-container">
      <Slider images={images} links={links} />
      </div>
      <div className="container-fluid">
      </div>
      <div><Skills/></div>
      <div className='background'><Mision/></div> {/* Mision antes del Footer */}
      
      <div className='footer'><FooterLanding /></div>
     <div> <WhatsAppButton /> </div>
    </div>
  );
}

export default App