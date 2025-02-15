import React, { useEffect, useRef } from "react";
import AnimatedTitle, { myFont } from "../common/AnimatedTitle";
import Timer from "@/components/atoms/Timer";
import { Hero, HeroProps } from "@lobehub/ui";
import { ThemeProvider } from "@lobehub/ui";
import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  const actions = [
    {
      icon: "Discord",
      link: "https://discord.com/invite/8VK8jMt63j",
      text: "Discord",
      type: "primary",
 
    },
    {
      text: "Register",
      type: "primary",

    },
  ];
  // useEffect(()=>{
  //   let btn=document.querySelectorAll(".ant-btn")[1];
  //   btn.classList.add("tooltip")
  // },[])
  return (
    <ThemeProvider themeMode="dark">
      <div id="hero" className="h-screen relative bg-black flex flex-col sm:pt-0 pt-[30px] sm:justify-start">
        <div className="hidden lg:block w-2.5 translate-x-1 h-2.5 bg-white rounded-full absolute right-96"></div>
        <div className="hidden lg:block w-2.5 translate-x-1 h-2.5 bg-white rounded-full absolute right-36"></div>
        <div className="hidden lg:block absolute w-[1px] h-10 right-96 bg-white"></div>
        <div className="hidden lg:block absolute w-[1px] h-10 right-36 bg-white"></div>
        <div className="hidden lg:flex absolute right-20 top-5 justify-center items-center my-5">
          <Timer />
        </div>
        <div className="-mt-5">
          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.3 }}
          >
            <h3
              className={`sm:hidden ${myFont.className} sm:mb-0  text-xl text-center tracking-[0.3em] leading-7 w-full mb-[4px] font-bold`}
              style={{ wordSpacing: "10px" }}
            >
              <span className="text-base tracking-[0.2]">LUCKNOW&apos;S </span>
              <br />
              BIGGEST HACKATHON
            </h3>
          </motion.div>

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
            <Image
              src="/HoFRmBg.png"
              alt="HOF Logo"
              width={230}
              height={180}
              className="mx-auto block mb-[27px] sm:hidden"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.3 }}
          >
            <h3
              className={`text-yellow-600 ${myFont.className} tracking-wider text-xl text-center w-full mt-[-30px] font-bold`}
            >
              IIIT LUCKNOW&apos;s
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.6 }}
          >
            <div className="flex justify-center main_heading text-white text-9xl sm:my-5 -mb-1 md:-mt-5">
              <AnimatedTitle />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "0px", y: "50px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "0px", y: "0px" }}
            transition={{ duration: 1.8 }}
          >
            <h3 className="sm:block hidden text-xl text-center w-full mt-[-10px] font-bold">
              LUCKNOW&apos;S BIGGEST HACKATHON
            </h3>
          </motion.div>
        </div>
        <div className="flex lg:hidden  justify-center w-full items-center mt-12">
          <Timer />
        </div>

        <motion.div
          initial={{ opacity: 0, x: "0px", y: "50px" }}
          animate={{ opacity: 1, x: "0", y: "0px" }}
          exit={{ opacity: 1, x: "0px", y: "0px" }}
          transition={{ duration: 1.8 }}
          className="sm:mt-0 sm:mb-0 mt-6"
        >
          <Hero
            actions={actions}
            // description="Lobe UI is an open-source UI component library for <br/>building chatbot web apps"
            // title="Lobe <b>UI</b>"
          />
        </motion.div>
        <div id="about"></div>
      </div>
    </ThemeProvider>
  );
};

export default HeroSection;
