"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../public/Mokoto.ttf' })

const TextReveal = ({ customText, val }) => {
  const [text, setText] = useState("");
  const [displayIt, setDisplayIt] = useState(false);
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
      setDisplayIt(true);
    }
  }, [controls, inView]);

  useEffect(() => {
    setText(customText);
    if (val && !(sessionStorage.getItem("viewed"))) {
      setTimeout(() => {
        for (let i = 1; i <= 11; i++) {
            const spanElement = document.getElementById(`span ${i}`);
            if (spanElement) {
              let letterGap;
              if (window.innerWidth >= 920) letterGap = 60;
              else if (window.innerWidth >= 660 && window.innerWidth < 920)
                letterGap = 40;
              else if (window.innerWidth >= 400 && window.innerWidth < 660)
                letterGap = 20;
              else if (window.innerWidth >= 320 && window.innerWidth < 400)
                letterGap = 10;
              spanElement.style.marginLeft = `${letterGap}px`;
            }
        }
        setTimeout(() => {
          for (let i = 1; i <= 11; i++) {
            if (i !== 6) {
              if( document.getElementById(`span ${i}`))document.getElementById(`span ${i}`).style.opacity = 0;
            }
          }
          setTimeout(() => {
            document.body.style.overflowY = "hidden"
            document.getElementById("span 6").innerText = "";
            document.getElementById("span 6").style.width = "100vw";
            document.getElementById("span 6").style.height = "100vh";
            const CircleDiv = document.createElement("div");
            CircleDiv.id = "circleGrowing";
            CircleDiv.classList.add("opacity_transition");
            document.getElementById("span 6").appendChild(CircleDiv);
            setTimeout(() => {
              CircleDiv.style.opacity = 1;
              setTimeout(() => {
                CircleDiv.classList.add("growing-circle");
              }, 1000);
            }, 300);
          }, 1000);
        }, 1000);
      }, 1100);
    }
  }, []);

  return (
    <motion.div ref={ref} animate={controls} {...animationOptions} className="m-0 overflow-hidden">
      <div className="reveal-text lg:text-6xl md:text-4xl sm:text-3xl text-3xl overflow-hidden">
        {displayIt && (
          <p className={`${myFont.className} mx-auto text-center`}>
            {text.split("").map((char, index) => (
              <span
                key={index}
                id={"span " + (index + 1)}
                style={{ "--index": index + 1 }}
                className={myFont.className +"overflow-hidden hero !text-8xl mb-5"}
              >
                {char === " " ? <>&nbsp;</> : char}
              </span>
            ))}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default TextReveal;
