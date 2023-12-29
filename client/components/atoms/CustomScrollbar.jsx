"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    window.addEventListener("scroll", updateScrollPercentage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-16 bg-primary-pink w-[1px] h-[90vh]">
        <div
          className={`bg-primary-blue`}
          style={{
            height: `${scrollPercentage.toFixed(2)}vh`,
            maxHeight: "90vh",
          }}
        ></div>
        <DownArrow />
      </div>
    </>
  );
};

export default CustomScrollbar;

const DownArrow = () => {
  return (
    <div className=" fixed bottom-2 left-6 z-50 hover:bg-slate-300/35 transition-all hover:cursor-pointer duration-500 h-20 w-20 rounded-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chevrons-down"
      >
        <path d="m7 6 5 5 5-5" />
        <path d="m7 13 5 5 5-5" />
      </svg>
    </div>
  );
};
