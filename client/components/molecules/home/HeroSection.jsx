import React, { useEffect, useRef } from "react";
import AnimatedTitle from "../common/AnimatedTitle";
import Timer from "@/components/atoms/Timer";
import { MobileNavbar } from "../mobile-navbar/MobileNavbar";
import { Hero, HeroProps } from "@lobehub/ui";
import { ThemeProvider } from "@lobehub/ui";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";
const myFont = localFont({ src: "../../../public/MokotoGlitchMark.ttf" });

const HeroSection = () => {
  const actions = [
    {
      icon: "Discord",
      link: "https://github.com/lobehub",
      text: "Discord",
      type: "primary",
    },
    {
      link: "/components/action-icon",
      text: "Register",
      type: "primary",
    },
  ];
  return (
    <ThemeProvider themeMode="dark">
      <div className="h-screen flex flex-col justify-center sm:justify-start">
        <div className="-mt-5">
          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/HoFRmBg.png"
              alt="HOF Logo"
              width={400}
              height={350}
              className="mx-auto hidden sm:block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.3 }}
          >
            <h3 className="text-yellow-600 text-2xl text-center w-full mt-[-30px]">
              IIIT LUCKNOW&apos;s
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.6 }}
          >
            <div className="flex justify-center main_heading text-white text-9xl my-5 sm:-mt-5">
              <AnimatedTitle />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.8 }}
          >
            <h3 className="text-xl text-center w-full mt-[-10px]">
              LUCKNOW&apos;S BIGGEST HACKATHON
            </h3>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: "0px", y: "50px" }}
          animate={{ opacity: 1, x: "0", y: "0px" }}
          exit={{ opacity: 1, x: "0px", y: "0px" }}
          transition={{ duration: 1.8 }}
        >
          <Hero
            actions={actions}
            // description="Lobe UI is an open-source UI component library for <br/>building chatbot web apps"
            // title="Lobe <b>UI</b>"
          />
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

export default HeroSection;
