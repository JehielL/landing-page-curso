import React, { useEffect, useRef, useState } from 'react';
import './FeatureInfo.css';

const FeatureInfo = ({ title, content, image, buttonText, buttonLink, className, index }) => {
  const featureRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const feature = featureRef.current;
 
    const revealFeature = () => {
      if (feature) {
        const featureTop = feature.getBoundingClientRect().top;
        const featureBottom = feature.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (featureTop < windowHeight && featureBottom > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', revealFeature);
    revealFeature();

    return () => {
      window.removeEventListener('scroll', revealFeature);
    };
  }, []);

  const fromLeft = index % 2 === 0;
  const animationClass = fromLeft ? 'from-left' : 'from-right';
    
  return (

    
    <div
    
      ref={featureRef}
      className={`feature-container ${className} ${isVisible ? 'revealed' : ''} ${animationClass}`}
      
    >
       
      <div className="feature-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <a href={buttonLink} className="feature-button">
          {buttonText}
        </a>
      </div>
      <div className="feature-image">
        <img src={image} alt="Feature" />
      </div>
    </div>
  );
};

export default FeatureInfo;
