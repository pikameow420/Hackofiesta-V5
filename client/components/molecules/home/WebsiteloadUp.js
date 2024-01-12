"use client";
import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { Playfair_Display } from "next/font/google";
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../public/Mokoto.ttf' })

const caveat = Playfair_Display({ subsets: ["latin"], weight: "400" });

const WebsiteLoadUp = () => {
  const presentRef = useRef(null);
  const circleRef = useRef(null);
  const loadUpRef = useRef(null);
 

  return (
    <div
      ref={loadUpRef}
      id="loadUp"
      className="opacity-1 bg-transparent w-screen h-screen flex justify-center items-center relative transition duration-1000"
    >
           <video
            className="w-full absolute h-screen object-cover brightness-[60%] transition duration-500"
            autoPlay
            muted
            loop
            src="/Teaser.mp4"
          ></video>
      <div ref={presentRef} id="presenting" className={caveat.className}>
        <TextReveal customText="Hack-o-Fiesta" val={true} />
      </div>
    </div>
  );
};

export default WebsiteLoadUp;
