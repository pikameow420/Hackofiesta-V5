"use client";
import WebsiteLoadUp from "@/components/molecules/home/WebsiteloadUp";
import Navbar from "@/components/molecules/common/Navbar";
import HeroSection from "@/components/molecules/home/HeroSection";
import React, { useEffect, useState } from "react";
import TextSplitEffect from "@/components/molecules/home/TextSplitEffect";
import Stats from "@/components/molecules/home/Stats";
import Accordian from "@/components/molecules/accordian/Accordian";
import Footerr from "@/components/molecules/common/Footer";
import Sponsors from "@/components/molecules/sponsors/Sponsors";
import RequestToJoin from "@/components/molecules/home/RequestToJoin";
import Team from "@/components/molecules/home/Team";

const Home = () => {
  const [val, setVal] = useState(false);
  useEffect(() => {
    const loadUp = document.getElementById("loadUp");
    if (sessionStorage.getItem("viewed")) {
      setVal(true);
    } else {
      setTimeout(() => {
        loadUp.style.opacity = 0;
        setTimeout(() => {
          document.body.style.overflowY = "scroll";
        }, 1000);
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
        
          <Navbar />
          <HeroSection />

          {/* <CustomScrollbar /> */}
          <TextSplitEffect />
          <RequestToJoin/>
          <Stats />
          <Sponsors />
          <Team />
          <Accordian />
          <Footerr />
        </>
      )}
    </>
  );
};

export default Home;
