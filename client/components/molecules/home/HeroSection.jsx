import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/AnimatedTitle";
import Timer from "@/components/atoms/Timer";
import { MobileNavbar } from "../mobile-navbar/MobileNavbar";
import { Hero, HeroProps } from "@lobehub/ui";
import { ThemeProvider } from "@lobehub/ui";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../../public/MokotoGlitchMark.ttf" });

const HeroSection = () => {
  const actions = [
    {
      icon: "Github",
      link: "https://github.com/lobehub",
      text: "Github",
      type: "primary",
    },
    {
      link: "/components/action-icon",
      text: "Get Started",
      type: "primary",
    },
  ];
  return (
    <ThemeProvider themeMode="dark">

    <div className="h-screen">
    
      <Hero
        actions={actions}
        // description="Lobe UI is an open-source UI component library for <br/>building chatbot web apps"
        // title="Lobe <b>UI</b>"
      />
    </div>
    </ThemeProvider>
  );
};

export default HeroSection;
