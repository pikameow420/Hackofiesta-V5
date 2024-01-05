import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/AnimatedTitle";
const HeroSection = () => {
  const Hack = useRef(null);
  const Fiesta = useRef(null);
  return (
    <div className="h-screen">
      <div className="overlay flex flex-col items-center gap-y-8 justify-center">
        <div className="flex main_heading text-white text-9xl">
          <AnimatedTitle/>
        </div>
        <div className="second_heading md:text-2xl text-base text-white text-center px-14 max-w-[700px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          adipisci perspiciatis provident at nemo consequatur necessitatibus
          laudantium iure.
        </div>
        <div className="h-7"></div>
      </div>
    </div>
  );
};

export default HeroSection;
