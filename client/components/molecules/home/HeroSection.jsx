import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/AnimatedTitle";
const HeroSection = () => {
  const Hack = useRef(null);
  const Fiesta = useRef(null);
  return (
    <>
      <div className="h-screen relative mb-32">
        <div className="-z-50 opacity-80 h-screen w-screen absolute">
          <video
            className="w-full absolute h-full object-cover brightness-[60%] transition duration-500"
            autoPlay
            muted
            loop
            src="/landing_page_bg_video.mp4"
          ></video>
        </div>
        <div className="w-full h-full absolute overlay"></div>
        <div className="h-full  flex flex-col items-center gap-y-8 justify-center">
          <div className="flex main_heading text-white text-9xl">
            <AnimatedTitle />
          </div>
          <div className="second_heading md:text-2xl text-base text-white text-center px-14 max-w-[700px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            adipisci perspiciatis provident at nemo consequatur necessitatibus
            laudantium iure.
          </div>
          <div className="h-7"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
