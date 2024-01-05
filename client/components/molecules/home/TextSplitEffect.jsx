import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import About from "./About";

const TextSplitEffect = () => {
  const [val, setVal] = useState(false);
  const [displayIt, setDisplayIt] = useState(true);
  const scrolleffectStart = useRef(0);
  const controls = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [ref, inView] = useInView();

  // You can customize the animation properties
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 0 },
  };

  const animationOptions = {
    variants: animationVariants,
    initial: "hidden",
    animate: inView && "visible",
    transition: { duration: 0.5 },
  };

  // Trigger animation when the element comes into view
  useEffect(() => {
    if (inView) {
      setDisplayIt(true);
      //   controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (displayIt) {
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
        scrolleffectStart.current = window.scrollY;
        console.log("scrolleffectStart.current", scrolleffectStart.current);
      }, 10);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [displayIt]);
  function handleScroll() {
    if (ref3.current && ref1.current && ref2.current) {
      if (
        window.scrollY - 576 - window.innerHeight + 720 <= 85 &&
        window.scrollY - 576 - window.innerHeight + 720 > 0
      ) {
        ref1.current.style.transform = `translateY(${-Math.max(
          0,
          2.2 * (window.scrollY - 576 - window.innerHeight + 720)
        )}px)`;
        ref2.current.style.transform = `translateY(${Math.max(
          0,
          3.5 * (window.scrollY - 576 - window.innerHeight + 720)
        )}px)`;
      } else if (window.scrollY - 576 - window.innerHeight + 720 > 85) {
        ref3.current.style.transitionDuration = "1000ms";
        ref3.current.style.opacity = 0;
      } else if (window.scrollY - 576 - window.innerHeight + 720 <= 0) {
        // document.getElementById("hello").style.height = "18vw";
        ref1.current.style.transform = `translateY(${-Math.max(0, 0)}px)`;
        ref2.current.style.transform = `translateY(${Math.max(0, 0)}px)`;
      } else if (window.scrollY - 576 - window.innerHeight + 720 > 85) {
        ref1.current.style.transform = `translateY(${-Math.max(
          0,
          2.2 * 85
        )}px)`;
        ref2.current.style.transform = `translateY(${Math.max(0, 3.5 * 85)}px)`;
      }
      if (
        window.scrollY - 625 - window.innerHeight + 720 > 0 &&
        ref1.current.style.transform !== "transform translateY(0px)"
      ) {
        setVal(true);
      }
      //   else setVal(false);
    }
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-start relative text-white">
        <motion.div ref={ref}>
          {displayIt && (
            <>
              <div className={val ? "opacity-100 duration-500 translate-y-0" : "opacity-0 duration-500 translate-y-12"}>
                <About />
              </div>
              <div
                ref={ref3}
                style={{
                  height: "14vw",
                  top: "20%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transitionDuration: "0.05s",
                }}
                className="flex flex-col justify-between items-center absolute"
              >
                <div
                  style={{
                    height: "8vw",
                  }}
                  ref={ref1}
                  className="mb-0 overflow-hidden"
                >
                  <div style={{ fontSize: "10vw" }} className="h-full">
                    WhatsHackoFiesta
                  </div>
                </div>
                <div
                  style={{ height: "6vw" }}
                  ref={ref2}
                  className=" overflow-hidden"
                >
                  <div
                    style={{
                      fontSize: "10vw",
                      transform: "translateY(-8vw)",
                    }}
                    className="h-full"
                  >
                    WhatsHackoFiesta
                  </div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default TextSplitEffect;
