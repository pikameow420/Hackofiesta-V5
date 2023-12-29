"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollDownArrow from '@/assets/scroll-down-arrow.svg';

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
    <>
    <div className='fixed top-0 left-16 bg-primary-pink w-[1px] h-[90vh]'>
        <div className={`bg-primary-blue`} style={{height: `${scrollPercentage.toFixed(2)}vh`, maxHeight: "90vh"}}></div>
    </div>
    </>
  );
};

export default CustomScrollbar;
