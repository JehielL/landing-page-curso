import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header-style ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Inicio</a></li>
          <li><a href="https://github.com/certidevs/adecco_java" target="_blank" rel="noopener noreferrer">Repositorio</a></li>
          <li><a href="/contacto">Contacto</a></li>
          
        </ul>
      </nav>

      <nav className={`social-icons ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="https://www.linkedin.com/in/jehiel-linarez-vargas-9b57b3225/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://www.instagram.com/jehiell/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://github.com/jehiell"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
