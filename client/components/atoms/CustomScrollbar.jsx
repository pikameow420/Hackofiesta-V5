"use client"
import React, { useState, useEffect } from 'react';

const CustomScrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollPercentage = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPercentage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div className=''>
      <p>Scroll Percentage: {scrollPercentage.toFixed(2)}%</p>
      {/* Your content goes here */}
    </div>
  );
};

export default CustomScrollbar;
