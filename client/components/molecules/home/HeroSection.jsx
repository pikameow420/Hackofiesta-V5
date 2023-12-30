import React, { useEffect, useRef } from "react";
import Dot from "@/assets/dot-pattern.png";
import Image from "next/image";
const HeroSection = () => {
  const Hack = useRef(null);
  const Fiesta = useRef(null);

  useEffect(() => {
    // Using setTimeout to allow the initial render to complete
    setTimeout(() => {
      // Add the transition effect using style.transform
      Hack.current.style.transition =
        "transform 1500ms cubic-bezier(0.42, 0, 0.2, 1)";
      Hack.current.style.transform = "translateY(-640px)";
      Fiesta.current.style.transition =
        "transform 1500ms cubic-bezier(0.42, 0, 0.2, 1)";
      Fiesta.current.style.transform = "translateY(0px)";
    }, 10);
  }, []);
  return (
    <div className="h-screen">
      <div className="overlay flex flex-col items-center gap-y-8 justify-center">
        <div className="flex main_heading text-white text-9xl">
          <div className="text-9xl h-[128px] overflow-hidden">
            <div ref={Hack} style={{ transform: "translateY(0)" }}>
              <div>Hack</div>
              <div>Hack</div>
              <div>Hack</div>
              <div>Hack</div>
              <div>Hack</div>
              <div>Hack</div>
            </div>
          </div>
          <span className="text-9xl">o</span>
          <div className="text-9xl h-[128px] overflow-hidden">
            <div ref={Fiesta} style={{ transform: "translateY(-640px)" }}>
              <div>Fiesta</div>
              <div>Fiesta</div>
              <div>Fiesta</div>
              <div>Fiesta</div>
              <div>Fiesta</div>
              <div>Fiesta</div>
            </div>
          </div>
        </div>
        <div className="second_heading text-2xl text-white text-center  max-w-[700px]">
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
