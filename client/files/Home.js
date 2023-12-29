"use client";
import WebsiteLoadUp from "@/components/molecules/home/WebsiteloadUp";
import Navbar from "@/components/molecules/common/Navbar";
import HeroSection from "@/components/molecules/home/HeroSection";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [val, setVal] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    //   setVal(true);
    // }, 7000);
    const loadUp = document.getElementById("loadUp");

    if (sessionStorage.getItem("viewed")) {
      setVal(true);
    } else {
      setTimeout(() => {
        loadUp.style.opacity = 0;
        setTimeout(() => {
          setVal(true);
          sessionStorage.setItem("viewed", "true");
        }, 700);
      }, 4750);
    }
  }, []);
  return (
    <>
      {!val && <WebsiteLoadUp />}
      {val && (
        <div>
          <Navbar />
          <HeroSection />
          ;kbnerboneeneoib
        </div>
      )}
    </>
  );
};

export default Home;
