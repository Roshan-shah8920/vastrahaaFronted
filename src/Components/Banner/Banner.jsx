import React, { useRef, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const imageWidth = container?.children[0]?.offsetWidth || 600;
    if (direction === 'left') {
      container.scrollBy({ left: -imageWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: imageWidth, behavior: 'smooth' });
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="banner-wrapper">
      <button onClick={() => scroll('left')}>←</button>
      <div className="banner-container" ref={scrollRef}>
        <img src="banner.png" alt="banner1" />
        <img src="image1.png" alt="banner2" />
        <img src="image2.png" alt="banner3" />
      </div>
      <button onClick={() => scroll('right')}>→</button>
    </div>
  );
};

export default Banner;
