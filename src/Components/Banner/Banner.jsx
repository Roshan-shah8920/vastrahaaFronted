import React, { useRef } from 'react';
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

  return (
    <div className="banner-wrapper">
      <button onClick={() => scroll('left')}>←</button>
      <div className="banner-container" ref={scrollRef}>
        <img src="banner.png" alt="banner1" />
        <img src="banner.png" alt="banner2" />
        <img src="banner.png" alt="banner3" />
      </div>
      <button onClick={() => scroll('right')}>→</button>
    </div>
  );
};

export default Banner;
