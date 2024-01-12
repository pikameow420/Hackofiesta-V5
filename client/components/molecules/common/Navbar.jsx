import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
const Navbar = () => {
  const refNav = useRef(null);
  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      if (refNav) {
        if (document.body.scrollTop > 50) {
          refNav.current.classList.add("nav-shadow");
        } else {
          refNav.current.classList.remove("nav-shadow");
        }
      }
    });
  }, []);

  return (
    <div ref={refNav} className="flex sticky top-0 backdrop-blur-md z-10">
      <img src={"/HoFRmBg.png"} width={82} className="absolute ms-5 mt-1" />
      <div className="sm:flex hidden gap-20 self-center justify-center text-xl px-10 py-8 word-spacing tracking-tight text-white  w-full top-0 z-10">
        <Link
          className="hover-underline-animation hover:text-primary-blue transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover-underline-animation hover:text-primary-blue transition-colors"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover-underline-animation hover:text-primary-blue transition-colors"
          href="/sponsors"
        >
          Sponsors
        </Link>
        <Link
          className="hover-underline-animation hover:text-primary-blue transition-colors"
          href="/faqs"
        >
          FAQ
        </Link>
        <Link
          className="hover-underline-animation hover:text-primary-blue transition-colors"
          href="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
