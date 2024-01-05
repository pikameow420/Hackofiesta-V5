"use client";
import WebsiteLoadUp from "@/components/molecules/home/WebsiteloadUp";
import Navbar from "@/components/molecules/common/Navbar";
import HeroSection from "@/components/molecules/home/HeroSection";
import React, { useEffect, useState } from "react";
import CustomScrollbar from "@/components/atoms/CustomScrollbar";
import TextSplitEffect from "@/components/molecules/home/TextSplitEffect";
import Stats from "@/components/molecules/home/Stats";
import { MobileNavbar } from "@/components/molecules/mobile-navbar/MobileNavbar";

const Home = () => {
  const [val, setVal] = useState(false);
  useEffect(() => {
    // setTimeout(() => {
    //   setVal(true);
    // }, 7000);git 
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
        <>
          <MobileNavbar/>
          <Navbar />
          <HeroSection />
          <CustomScrollbar />
          <TextSplitEffect />
          <Stats />
        </>
      )}
    </>
  );
};

export default Home;
