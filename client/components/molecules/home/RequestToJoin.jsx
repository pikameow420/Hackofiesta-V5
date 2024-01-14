import React from "react";
import { myFont } from "../common/AnimatedTitle";
const data = [
  {
    title: "10 Lakh Prize Pool",
    text: "A huge prize pool of 10 Lakh",
  },
  {
    title: "1000+ Registrations",
    text: "Over a thousand enthusiastic participants registered last year, showcasing the widespread interest and engagement in the hackathon",
  },
  {
    title: "60+ Projects",
    text: "The hackathon witnessed the creation of more than 60 innovative projects last year, highlighting the diverse talents and ideas of the participants.",
  },
  {
    title: "2,00,000+ Reach Across All Channels",
    text: "The event reached an extensive audience, with a cumulative reach exceeding 2 lakh across various channels, creating a significant impact",
  },
  {
    title: "10+ Sessions",
    text: "There were 10+ insightful sessions",
  },
  {
    title: "4 Successful Editions Already Hosted",
    text: "With a track record of hosting four successful editions,this year we bring you HackoFiesta v5",
  },
];

const RequestToJoin = () => {
  return (
    <div className="w-screen sm:px-28">
      <h1
        className={`md:text-8xl ${myFont.className} -mt-16 md:mt-0 sm:text-6xl text-5xl text-center`}
      >
        PREVIOUS YEAR STATS
      </h1>
      <section>
        {data.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div key={index} className="w-full flex items-center justify-start px-auto px-8 my-16">
                <div className="lg:w-2/3 md:w-4/5 md:h-36 h-max w-full flex gap-5">
                  <span className=" md:w-6 w-3 bg-white"></span>
                  <div className="hidden sm:w-36 h-full"> </div>
                  <div className=" h-full w-full flex flex-col py-3">
                    <div className="md:text-4xl text-xl font-bold flex w-full md:px-3 mb-4">
                     {item.title}
                    </div>
                    <div className="lg:px-3 px-1 md:text-lg text-sm ">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          else{
            return(
                <div key={index} className="w-full flex items-center justify-end px-auto px-8 my-20">
                <div className="lg:w-1/2 md:h-36 h-max w-full flex gap-5">
                  <span className=" md:w-6 w-3 bg-white"></span>
                  <div className="hidden sm:w-36 h-full"> </div>
                  <div className=" h-full w-full flex flex-col py-3">
                    <div className="md:text-4xl text-xl font-bold flex w-full md:px-3 mb-4">
                     {item.title}
                    </div>
                    <div className="lg:px-3 px1 md:text-lg text-sm ">
                      {item.text}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </section>
    </div>
  );
};

export default RequestToJoin;
