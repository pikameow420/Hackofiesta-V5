"use client";
import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { Playfair_Display } from "next/font/google";

const caveat = Playfair_Display({ subsets: ["latin"], weight: "400" });

const WebsiteLoadUp = () => {
  const presentRef = useRef(null);
  const circleRef = useRef(null);
  const loadUpRef = useRef(null);

  return (
    <div
      ref={loadUpRef}
      id="loadUp"
      className="opacity-1 w-screen h-screen flex justify-center items-center relative transition duration-1000"
    >
      <div ref={presentRef} id="presenting" className={caveat.className}>
        <TextReveal customText="HackoFiesta" val={true} />
      </div>
    </div>
  );
};

export default WebsiteLoadUp;
