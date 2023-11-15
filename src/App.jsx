import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Slider from './slider';
import WelcomeMessage from './WelcomeMessage';
import FooterLanding from './footer';
import Skills from './skills';
import Mision from './mision'
import './index.css';
import FeatureInfo from './FeatureInfo';
import WhatsAppButton from './WhatsappButton.jsx';
import EditorWithPreview from './editorWithPreview.jsx';
import './editorContainer.css'


function App() {

  
  const images = [
    'https://i.ibb.co/ZN8gSMq/img-Curso1.png',
    'https://i.ibb.co/FVQ7B25/img-Curso2.jpg',
    'https://i.ibb.co/P5rFGSh/img-Curso3.jpg',
    'https://i.ibb.co/rtLMfGL/img-Curso4.jpg',
    'https://i.ibb.co/41RmJbv/img-Curso5.jpg',
    'https://i.ibb.co/zbjySp6/img-Curso6.jpg',
  ];

  const links = [
    'https://formacion.fundacionadecco.org/',
    'https://formacion.fundacionadecco.org/',
    '',
    ''
  ];

  const features = [
    {
      title: 'No construiremos la casa por la ventana.',
      content: 'Nuestros primeros pasos estaran pautados por la busqueda de conocimientos para afianzar las bases de la programación, utilizando herramientas como PEeInt, podremos aprender operadores, tipos de datos, diferentes paradigmas de programación y mucho más.',
      image: 'https://tutorialesdeaplicaciones.com/wp-content/uploads/2020/03/aprendiendo-a-programar_Mesa-de-trabajo-1.png',
      buttonText: 'Ver diapositivas',
      buttonLink: '/disenos',
    },
    {
      title: 'Mente Sana = Trabajo sano.',
      content: 'Junto a la fundación Adecco, de la mano de CRISTINA SOLER, trabajaremos tambien nuestros soft-skills, como lo son, la empatía, el trabajo en equipo, la responsabilidad, el liderazgo y la resolución de problemas.',
      image: 'https://staffing.com.co/wp-content/uploads/2023/07/18-Julio-Blog-scaled.jpg',
      buttonText: 'Accede a nuestros talleres.',
      buttonLink: '/envios',
    },
    {
      title: 'Equipo de Especialistas.',
      content: 'De la mano de Certidevs, contamos con el apoyo de profesionales capacitados para transformarnos en los futuros programadores, talleres, pruebas tecnicas, mentorias personalizadas, nos ayudaran a completar nuestra meta.',
      image: 'https://certidevs.com/wp-content/uploads/2023/03/CertiDevs-Dark.svg',
      buttonText: 'Contacta con Certidevs',
      buttonLink: 'https://certidevs.com/',
    },
    {
      title: '¿Y Nuestros Proyectos?',
      content: 'No desespereis, este viaje apenas comienza... Exactamente el 17 de mayo estaremos presentando nuestros proyectos, proximamente los podras encontrar aqui.',
      image: 'https://cdn-icons-png.flaticon.com/512/3858/3858564.png',
      buttonText: 'Ver proyectos',
      buttonLink: '/catalogo',
    },
    {
      title: 'Empleabilidad y Networking.',
      content: 'Fundacion Adecco, coloca a tus manos su plataforma, para la busqueda activa de empleo, ya si deseas experimentar en un nuevo campo o deseas ampliar tu experiencia actual, colocamos a disposición las herramientas de cada uno para la busqueda activa de empleo y el Networking.',
      image: 'https://empleo.fundacionadecco.org/img/logo.png',
      buttonText: '¡Consigue Empleo!',
      buttonLink: 'https://www.adecco.es',
    },
    {
      title: 'Proximos Eventos.',
      content: 'Pondremos a disposiciones de los estudiantes, los futuros eventos de tecnología en la comunidad de madrid, eventos internacionales online y eventos de Adecco, con el fin de mejorar nuestro entendimiento del mundo tecnologico.',
      image: 'https://techsummitme.com/wp-content/uploads/2023/10/TechSummit-1.png',
      buttonText: 'Ver Ferias tecnologicas',
      buttonLink: 'https://www.nferias.com/tecnologia/espana/',
    },
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
      {features.map((feature, index) => (
       <FeatureInfo
       key={index}
       title={feature.title}
       content={feature.content}
       image={feature.image}
       buttonText={feature.buttonText}
       buttonLink={feature.buttonLink}
       className={index === 0 ? "first-feature" : ""}  
     />
        
      ))}

      <div className='editor-container'>
        <EditorWithPreview></EditorWithPreview>
      </div>
      <div className='footer'><FooterLanding /></div>
     <div> <WhatsAppButton /> </div>
     
     
     
  

     
    </div>
  );
}


export default App