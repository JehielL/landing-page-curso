import React from 'react';
import './mision.css'; 
function Mision() {
  return (
    <section className="mision-container">
      <div className="mision-content">
        <h2>Nuestra Misión</h2>
        <p>
         En nuestro curso, tenemos un objetivo claro: buscar oportunidades de empleo. Durante este proceso, hemos tenido  la fortuna de colaborar con la Fundación Adecco. Nuestra determinación está respaldada por la valiosa guía del  profesor <a href="https://www.linkedin.com/in/alansastre/" target="_blank" rel="noreferrer">Alan Sastre</a> y el apoyo de Cristina en la     orientación laboral.
         Nos enfocamos en adquirir los conocimientos necesarios para ingresar en la industria de Tecnologías de la Información (IT), lo que implica comprender los aspectos técnicos y desarrollar habilidades de trabajo en equipo. Nuestra intención es mantenernos unidos y colaborar de manera efectiva para alcanzar nuestros objetivos laborales.
          </p>
        <button className="btn-primary">Más información</button>

        </div>

        <div className="background" style={{marginTop:'-180px'}}>
         <div className='gallery'>
            <div className='card'>
                <div className='card__side'>
                    <img 
                    src="/src/assets/img/card1.png" 
                    alt="card1front" />
                </div>
                <div className='card__side card__side--back'>
                    <img src="/src/assets/img/card2.png" 
                    alt="card1back" />
                  
                </div>
            </div>
            <div className='card'>
                <div className='card__side'>
                    <img src="/src/assets/img/card3.png" 
                    alt="" />
                </div>
                <div className='card__side card__side--back'>
                    <img src="/src/assets/img/card4.png" 
                    alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card__side'>
                    <img src="/src/assets/img/card5.png" 
                    alt="" />
                </div>
                <div className='card__side card__side--back'>
                    <img src="/src/assets/img/card6.png" 
                    alt="" />
                </div>
                
            </div>
        </div>
      </div>
    </section>
             
      
      
   
  );
}

export default Mision;
