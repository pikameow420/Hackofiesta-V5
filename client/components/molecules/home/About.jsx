import React, { useEffect, useRef, useState } from "react";
import TextReveal from "./TextReveal";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

const About = () => {
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
    <motion.div
      ref={ref}
      animate={controls}
      {...animationOptions}
      className="flex flex-col"
    >
      <div
        className="w-screen pl-12 pr-8 flex flex-col sm:flex-row items-center justify-between"
        style={{ height: "50vh" }}
      >
        <motion.div>
          <h1 className="text-3xl text-center mb-3 sm:text-6xl xl:text-7xl xl:mt-10 xl:mb-5 ">
            HackoFiesta
          </h1>
          <div className="text-center px-2  w-screen text-lg xl:text-4xl lg:text-3xl xl:w-[500px] xl:p-6 md:text-2xl md:w-[350px] sm:text-xl sm:w-[250px] sm:ml-8 sm:p-0">
            is the biggest offline hackathon in Uttar Pradesh, conducted by IIIT
            Lucknow. Tune in to 36 hours of creativity, coding and collaboration
            leading to some of the most innovative hacks you've ever seen.
          </div>
          <div className="flex justify-center">
            <button className="button-glitch mx-5 flex items-center  md:my-1 my-3">
              Know More
            </button>
          </div>
        </motion.div>
        <div className="flex justify-center xl:mr-32 xl:mt-28 lg:mt-24 md:mt-20 sm:mt-16">
          <motion.div className="flex sm:justify-center">
            <div
              className="flex w-[250px] lg:w-[375px] md:w-[300px] sm:w-[250px] xl:w-[420px] "
              id="creatorsPoint"
            >
              <img
                src="/images/WhatsDefiForge.png"
                className="w-full h-full"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
