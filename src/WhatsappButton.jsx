import React from 'react';
import './WhatsAppButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJava, faGit, faAngular, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  return (
    <a href="https://chat.whatsapp.com/BIlVHQs0w5QFyvctpf0RWn" className="whatsapp-button" target="_blank">
        <FontAwesomeIcon icon={faWhatsapp} />
      
    </a>
  );
}

export default WhatsAppButton;
