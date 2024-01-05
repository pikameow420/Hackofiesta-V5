import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];
const links = ["Home", "About us", "Sponsors", "FAQs"];
const urls = ["/", "/aboutus", "/sponsors", "/faqs"];
export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="li"
    >
      {/* <div className="nav_icon-placeholder" style={style} /> */}
      <Link href={urls[i]} className="nav_text-placeholder ">{links[i]}</Link>
    </motion.li>
  );
};
