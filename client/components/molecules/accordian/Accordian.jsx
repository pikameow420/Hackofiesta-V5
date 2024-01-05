import { useRef, useState } from "react";
import "./accordian.css";
import { gsap } from "gsap";
import data from "./data.json"
function Accordian() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 1,
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
            duration: 1,
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
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  };
  // TODO - MID

  return (
    <div className="w-screen h-screen">
      <div className="text-7xl pt-6 pb-6 acc_style text-center text_style_gradient font-bold">
        FAQs
      </div>
      <div className="w-screen flex sm:flex-row flex-col sm:justify-between ">
        <div className="App">
          <div className="accordion__container mb-8 px-5 sm:px-20">
            {data.map((content, ind)=>{
                return (
                <div
                className={`accordion__item md:w-4/5  w-[95%] mx-auto  ${
                    openAccordion === ind ? "open" : ""
                }`}
                ref={(el) => (accordionRefs.current[ind] = el)}
                >
                <div
                    className={`${openAccordion === ind ? "open" : ""} accordion__header`}
                    onClick={() => handleAccordionClick(ind)}
                >
                    <p className="accordion__number">{ind+1}</p>
                    <p className="accordion__name flex">
                      {content.header}
                    </p>
                </div>

                <div className="accordion__details sm:px-10 px-0">
                    <ul>
                    {content.details.map((con)=>{
                      return (
                        <li>
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
