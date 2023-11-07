import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './slider';
import WelcomeMessage from './WelcomeMessage';
import FooterLanding from './footer';
import Skills from './skills';
import Mision from './mision'
import './index.css';

function App() {
  const images = [
    'src/assets/img/1.png',
    'src/assets/img/2.jpg',
    'src/assets/img/3.jpg',
    'src/assets/img/4.jpg',
  ];

  const links = [
    'https://jehiell.github.io/',
    'https://www.facebook.com/maguropty',
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
    </div>
  );
}

export default App