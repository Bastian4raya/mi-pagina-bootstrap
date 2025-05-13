import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel: React.FC = () => {
  return (
    <BootstrapCarousel>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/Imagenes/imagen6.jpeg`}
          alt="First slide"
        />
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/Imagenes/imagen5.jpeg`}
          alt="Second slide"
        />
      </BootstrapCarousel.Item>
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/Imagenes/Imagen1.jpg`}
          alt="Third slide"
        />
      </BootstrapCarousel.Item>
    </BootstrapCarousel>
  );
};

export default Carousel;
