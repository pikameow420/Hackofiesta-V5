import { useRef, useState } from "react";
import "./accordian.css";
import { gsap } from "gsap";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import data from "./data.json"
import { myFont } from "../common/AnimatedTitle";
function Accordian() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 0.3,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
      console.log(openAccordion);
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 0.3,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 0.3,
          ease: "power1.inOut",
        }
      );
    }
  };
  // TODO - MID

  return (
    <div id="faq" className="w-screen my-32">
      <div className={`md:text-8xl ${myFont.className} sm:text-6xl text-5xl pt-6 pb-6 acc_style text-center `}>
        FAQs
      </div>
      <div className="w-screen flex sm:flex-row flex-col sm:justify-between ">
        <div className="App">
          <div className="accordion__container mb-8 px-5 sm:px-20">
            {data.map((content, ind)=>{
                return (
                <div
                key={ind}
                id="accordcomp"
                className={`accordion__item md:w-4/5 -mt-5 py-2 w-[95%] mx-auto  ${
                    openAccordion === ind ? "open" : ""
                }`}
                ref={(el) => (accordionRefs.current[ind] = el)}
                >
                <div
                    className={`${openAccordion === ind ? "open" : ""} accordion__header`}
                    onClick={() => handleAccordionClick(ind)}
                >
                    {/* <p className="w-2 h-2 bg-white rounded-full"></p> */}
                    <p className="accordion__name flex">
                      {content.header}
                    </p>
                    {/* <img src="/download.jpg" className="self-end"/> */}
                    {openAccordion === ind ? <ArrowDropUpIcon className="self-end"/>  : <ArrowDropDownIcon  className="self-end"/>}
                    
                </div>

                <div className="accordion__details sm:px-10 px-0">
                    <ul>
                    {content.details.map((con,ind)=>{
                      return (
                        <li key={ind} style={{listStyle:"none"}}>
                          {con}
                        </li>
                      )
                    })}
                    </ul>
                </div>
                </div>
                )
            })}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;