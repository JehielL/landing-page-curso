import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './slider.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({ images, links }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [images]);

  return (
    <div className="slider-container" >
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentImage}
        onChange={(index) => setCurrentImage(index)}
      >
       {images.map((image, index) => (
  <a
    key={index}
    href={links[index]} // Establece el enlace externo
    target="_blank" // Abre el enlace en una nueva pestaña
    rel="noopener noreferrer"
    className={`slider-link ${index === currentImage ? 'active' : ''}`}
  >
    <img
      src={image}
      alt={`Imagen ${index + 1}`}
      className={`slider-img ${index === currentImage ? 'active' : ''}`}
      
      
    />
  </a>
))}

      </Carousel>
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired, // Arreglo de enlaces asociados a las imágenes
};

export default Slider;
