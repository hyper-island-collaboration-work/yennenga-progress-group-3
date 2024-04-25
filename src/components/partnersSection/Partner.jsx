import React, { useState, useEffect } from "react";

import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
} from "../../../public/images/Sponsors";

const images1 = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
]; // Array of image paths

const images2 = [
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
];
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
        setScrollPosition((prevPosition) => prevPosition + 1);
      }
    }, 600); // Adjust the duration (in milliseconds) to control the speed of the scrolling

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="bg-grey-100 relative  top-[900px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel rounded-box bg-grey gap-8">
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
      <div className="carousel rounded-box bg-grey gap-8">
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
