import React, { useState, useEffect } from 'react';
import antigone from '../assets/antigone-montpellier.jpg';
import arche from '../assets/arche-montpellier.jpg';
import comedie from '../assets/Comedie-Montpellier.jpeg';
import fontaine from '../assets/fontaine-montpellier.jpg';

const images = [antigone, arche, comedie, fontaine];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
      />
    </div>
  );
};

export default Carousel;