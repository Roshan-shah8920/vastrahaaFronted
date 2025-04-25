import React, { useEffect, useRef, useState } from 'react';
import './Banner.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const images = [
  '/image8.png',
  '/image7.png',
  '/image6.png',
  '/image3.png',
  '/image5.png',
];

const Banner = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const handleBuyNow = () => {
    navigate('/womens-Shirt');  // Navigate to ShowOrderProduct page
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-left">
        <h1 className="animated-heading" style={{
          color:"gray"
        }}>
          <span>Leading</span> <span>Experts</span> <span>in</span> <span>Fashion</span> <span>&</span><br />
          <span>Contractual</span> <span>Solutions</span>
        </h1>
        <h4 className="offer-line">
          Elevate your wardrobe — Premium styles now at
          <span className="highlight offer-animate">
            <span className="word">Flat</span>
            <span className="word">50%</span>
            <span className="word">OFF!</span>
          </span>

        </h4>


        <p>
          Crafting custom clothing solutions and seamless contract services tailored to <br /> meet your unique needs.
          From design to delivery, we ensure quality and precision at every step.
        </p>

        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
      <div className="hero-right">
        <div className="slider-container">
          <FaArrowAltCircleLeft className="arrow left" onClick={prevSlide} />
          <div className="slider-track">
            {images.map((img, index) => (
              <div
                className={`slide ${index === current ? 'active' : ''} ${index === (current - 1 + length) % length ? 'prev' : ''} ${index === (current + 1) % length ? 'next' : ''}`}
                key={index}
              >
                <img src={img} alt={`Slide ${index}`} style={{
                  height: "1560px",
                  objectFit: "cover",
                }} />
              </div>
            ))}
          </div>
          <FaArrowAltCircleRight className="arrow right" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
