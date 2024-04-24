import React, { useState, useEffect } from 'react';
import * as sponsors from "Sponsors/index.jsx";



const images1 = [sponsors.logo1, sponsors.logo2, sponsors.logo3, sponsors.logo4, sponsors.logo5, sponsors.logo6,sponsors.logo7, sponsors.logo8, sponsors.logo9, sponsors.logo10, sponsors.logo11, sponsors.logo12,
   sponsors.logo13, sponsors.logo14, sponsors.logo15]
  const images2 = [lsponsors.ogo16, sponsors.logo17, sponsors.logo18, sponsors.logo19, sponsors.logo20, sponsors.logo21, sponsors.logo22, sponsors.logo23, sponsors.logo24, sponsors.logo25, sponsors.logo26, sponsors.logo27, sponsors.logo28,
   sponsors.logo29, sponsors.logo30, sponsors.logo31, sponsors.logo32, sponsors.logo33, sponsors.logo34, sponsors.logo35, sponsors.logo36, sponsors.logo37]; // Array of image paths

const Partner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsPaused(true);
    };

    const handleMouseLeave = () => {
      setIsPaused(false);
    };

    const interval = setInterval(() => {
      if (!isPaused) {
        setScrollPosition(prevPosition => prevPosition + 1);
      }
    }, 500); // Adjust the duration (in milliseconds) to control the speed of the scrolling

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="relative bg-grey-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel rounded-box gap-8 bg-black">
        {images1.map((image, index) => {
          const adjustedIndex = (scrollPosition + index) % images1.length;
          return (
            <div key={index} className="carousel-item">
              <img
                src={images1[adjustedIndex]}
                alt={`Slide ${adjustedIndex + 1}`}
              />
            </div>
          );
        })}
      </div>
      <div className="carousel rounded-box gap-8 bg-black">
        {images2.map((image, index) => {
          const adjustedIndex = (scrollPosition + index) % images2.length;
          return (
            <div key={index} className="carousel-item">
              <img
                src={images2[adjustedIndex]}
                alt={`Slide ${adjustedIndex + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
