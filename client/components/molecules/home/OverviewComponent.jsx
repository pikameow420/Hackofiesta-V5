"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OverviewComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  useEffect(() => {
    if (inView) {
        controls.start("visible")
    }
  }, [controls, inView]);
  return (
    <div className="w-screen h-screen opacity-30 flex px-20 justify-center items-center flex-wrap">
      <motion.div ref={ref} animate={controls} {...animationOptions}>
        <div className="text-7xl text-white text-center">
          Welcome to Hackofiesta 2024!
        </div>
        <div className="text-xl text-whilte">
           Join us for an exhilarating hackathon.
          Collaborate with brilliant minds, innovate, and code for
          groundbreaking solutions. This annual event is your chance to shape
          the future through creativity. Become a part of Hackofiesta 2024!
        </div>
      </motion.div>
      
    </div>
  );
};

export default OverviewComponent;
