import React from 'react';
import './mision.css'; 
function Mision() {
  return (
    <section className="mision-container">
      <div className="mision-content">
        <h2>Nuestra Misión</h2>
        <p>
          En Tech Chef, estamos comprometidos a ser líderes en la industria tecnológica.
          Nuestra misión es proporcionar soluciones innovadoras y confiables que ayuden a
          nuestros clientes a alcanzar sus metas. Nos esforzamos por mantenernos a la
          vanguardia de la tecnología y brindar un servicio excepcional en cada paso del
          camino.
        </p>
        <button className="btn-primary">Más información</button>

        </div>

        <div className="background" style={{marginTop:'-180px'}}>
         <div className='gallery'>
            <div className='card'>
                <div className='card__side'>
                    <img 
                    src="/src/assets/img/card1.jpg" 
                    alt="card1front" />
                </div>
                <div className='card__side card__side--back'>
                    <img src="/src/assets/img/card2.jpg" 
                    alt="card1back" />
                </div>
            </div>
            <div className='card'>
                <div className='card__side'>
                    <img src="/src/assets/img/card3.jpg" 
                    alt="" />
                </div>
                <div className='card__side card__side--back'>
                    <img src="/src/assets/img/card4.jpg" 
                    alt="" />
                </div>
            </div>
            <div className='card'>
                <div className='card__side'>
                    <img src="/src/assets/img/card5.jpg" 
                    alt="" />
                </div>
                <div className='card__side card__side--back'>
                    <img src="/src/assets/img/card6.jpg" 
                    alt="" />
                </div>
                
            </div>
        </div>
      </div>
    </section>
             
      
      
   
  );
}

export default Mision;
