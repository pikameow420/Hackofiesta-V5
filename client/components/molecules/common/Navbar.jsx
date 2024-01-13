import HamBurger from "@/components/atoms/MobileHamburger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { MobileNavbar } from "../mobile-navbar/MobileNavbar";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const refNav = useRef(null);
  const router = useRouter()
  useEffect(() => {
    document.body.addEventListener("scroll", () => {
      refNav.current.classList.remove("bg-black")
      if (refNav) {
        if (document.body.scrollTop > 50) {
          refNav.current.classList.add("nav-shadow");
        } else {
          refNav.current.classList.remove("nav-shadow");
        }
      }
    });
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToSponsorsSection = () => {
    const section = document.getElementById("sponsors");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToFAQSection = () => {
    const section = document.getElementById("faq");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };
  const scrollToContactSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <div ref={refNav} className="flex sticky min-h-24 bg-black sm:justify-normal justify-between top-0 backdrop-blur-md z-10">
      <img src={"/IIITL.png"} width={76} className="absolute ms-5 mt-2 " />
      <div className="md:flex hidden gap-20 self-center justify-center text-xl px-10 py-8 word-spacing tracking-tight text-white  w-full top-0 z-10">
        <Link
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          href="/"
        >
          Home
        </Link>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/about"
          onClick={scrollToSection}
        >
          About
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          onClick={scrollToSponsorsSection}
>
          Sponsors
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/faqs"
          onClick={scrollToFAQSection}
        >
          FAQ
        </span>
        <span
          className="hover-underline-animation cursor-pointer hover:text-primary-blue transition-colors"
          // href="/contact"
          onClick={scrollToContactSection}
        >
          Contact Us
        </span>
      </div>
      <HamBurger />
    </div>
  );
};

export default Navbar;
