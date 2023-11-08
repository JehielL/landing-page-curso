// Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJava, faGit, faAngular } from '@fortawesome/free-brands-svg-icons';
import './skills.css'; 

function Skills() {
  return (
    <section className="skills">
      <h2>Nuestro Stack / Accede a tu curso</h2>
      <a href="https://html.spec.whatwg.org/multipage/">
        <div  className="skill" >
        <FontAwesomeIcon icon={faHtml5} />
        <p>HTML5</p>
        </div> 
        </a>
      
      <a href="https://www.w3.org/Style/CSS/Overview.en.html">
        <div className="skill">
        <FontAwesomeIcon icon={faCss3} />
        <p>CSS3</p>
        </div> 
        </a>
      <a href="https://formacion.fundacionadecco.org/courses/fundamentos-de-programacion-java-ed1"> 
       <div className="skill">
        <FontAwesomeIcon icon={faJava} />
        <p>Java</p>
        </div></a>
      
      <a href="https://formacion.fundacionadecco.org/courses/control-de-versiones-con-git-java-ed1">
       <div className="skill">
        <FontAwesomeIcon icon={faGit} />
        <p>Git</p>
        </div></a>  
      
      <div className="skill">
        <FontAwesomeIcon icon={faAngular} />
        <p>Angular</p>
      </div>
      {/* Agrega más habilidades aquí */}
    </section>
  );
}

export default Skills;
