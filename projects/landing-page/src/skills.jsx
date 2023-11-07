// Skills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './skills.css'; 

function Skills() {
  return (
    <section className="skills">
      <h2>Nuestro Stack</h2>
      <div className="skill">
        <FontAwesomeIcon icon={faHtml5} />
        <p>HTML5</p>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faCss3} />
        <p>CSS3</p>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faJs} />
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faReact} />
        <p>React</p>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faNodeJs} />
        <p>Node.js</p>
      </div>
      {/* Agrega más habilidades aquí */}
    </section>
  );
}

export default Skills;
