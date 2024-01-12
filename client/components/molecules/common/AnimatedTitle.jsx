import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import '../../../css/textanimation.css'
import localFont from 'next/font/local'
export const myFont = localFont({ src: '../../../public/Mokoto.ttf' })
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedTitle() {
  const text = 'Hackofiesta' // This would normally be passed into this component as a prop!
  
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <h2 className="md:text-9xl sm:text-7xl  text-center text-5xl text_style_heading" aria-label={text} role="heading">
      {text.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            
          >
          
          <div className={`${myFont.className} text-center`}>
            <h2 className="hero glitch layers text-center ml-4 sm:ml-0" data-text="Hackofiesta"><span>Hackofiesta</span></h2>
          </div>
           
          </Word>
        );
      })}
    </h2>
  );
}