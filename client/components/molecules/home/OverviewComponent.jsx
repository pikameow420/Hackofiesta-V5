"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OverviewComponent = () => {
  return (
    <div className="w-screen h-screen flex flex-col px-20 justify-center items-start flex-wr">
      {/* <motion.div>
        <div className="text-7xl">
          Welcome to Hackofiesta 2024! Join us for an exhilarating hackathon.
          Collaborate with brilliant minds, innovate, and code for
          groundbreaking solutions. This annual event is your chance to shape
          the future through creativity. Become a part of Hackofiesta 2024!
        </div>
      </motion.div> */}
    </div>
  );
};

export default OverviewComponent;
