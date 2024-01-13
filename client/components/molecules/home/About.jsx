import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { motion, useAnimation } from "framer-motion";
import { Hero, HeroProps } from "@lobehub/ui";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import { myFont } from "../common/AnimatedTitle";
import {
  GradientButton,
  GradientButtonProps,
  StoryBook,
  useControls,
  useCreateStore,
} from '@lobehub/ui';

import { ThemeProvider } from "@lobehub/ui";

const About = () => {
  const store = useCreateStore();
  const control = useControls(
    {
      children: 'Get a Demo',
      glow: true,
      size: {
        options: ['large', 'normal', 'small'],
        value: 'large',
      },
    },
    { store },
  );
  const scrollDiv = useRef(null);
  const [onlyOnce, setOnlyOnce] = useState(true);
  const router = useRouter();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 25 },
  };
  const animationVariants2 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };
  const animationOptions2 = {
    variants: animationVariants2,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // if(onlyOnce)scrollDiv.current.scrollTop = 0;
      // setOnlyOnce(false);
    }
  }, [controls, inView]);

  // useEffect(() => {
  //   if (scrollDiv.current) {
  //     scrollDiv.current.scrollTop = 0;
  //     console.log("scrollDiv", scrollDiv);
  //   }
  // }, [scrollDiv]);
  return (
    <ThemeProvider themeMode="dark">
      <motion.div
        ref={ref}
        animate={controls}
        {...animationOptions}
        className="flex flex-col"
      >
        <div
          className="w-screen sm:pl-12 pr-8 ms-16 flex flex-col-reverse sm:flex-row items-center justify-around"
          style={{ height: "50vh" }}
        >
          <motion.div>
            <h1 className={`text-3xl mb-2 lg:mb-3 xl:-mb-1 text-center ${myFont.className} sm:text-5xl xl:text-6xl xl:mt-8 font-[mokoto]`}  >
              HackoFiesta
            </h1>
            <div className="mr-4 sm:mr-0 text-gray-500 text-center sm:px-2 w-screen text-base xl:text-2xl lg:text-2xl xl:w-[500px] xl:p-6 md:text-2xl md:w-[350px] sm:text-xl sm:w-[250px] sm:ml-8 sm:p-0">
              It is the biggest offline hackathon in Uttar Pradesh, conducted by IIIT
              Lucknow. Tune in to 36 hours of creativity, coding and collaboration
              leading to some of the most innovative hacks you have ever seen.
            </div>
            <div className="flex justify-center btnDiv">
              {/* <button className="button-glitch mx-5 flex items-center my-2">
              Know More
            </button> */}

              <Hero
                actions={[{
                  icon: "Discord",
                  link: "https://github.com/lobehub",
                  text: "Know More",
                  type: "primary",
                }]}
              // description="Lobe UI is an open-source UI component library for <br/>building chatbot web apps"
              // title="Lobe <b>UI</b>"
              />

            </div>
          </motion.div>
          <div className="flex justify-center xl:mr-32 xl:mt-28 lg:mt-24 md:mt-20 sm:mt-16">
            <motion.div className="flex sm:justify-center">
              <div
                className="flex w-[250px] lg:w-[375px] md:w-[300px] sm:w-[250px] xl:w-[420px] "
                id="creatorsPoint"
              >
                <img
                  src="/about_gif.gif"
                  className="w-full h-full"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </ThemeProvider>
  );
};

export default About;
