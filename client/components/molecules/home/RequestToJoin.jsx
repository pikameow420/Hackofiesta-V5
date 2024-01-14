import React from "react";
import { myFont } from "../common/AnimatedTitle";
const data = [
  {
    title: "WORLDWIDE INTERACTION",
    text: "Attend world-class workshops led by top engineers across Web3. Attend world-class workshops led by top engineers across Web3",
  },
  {
    title: "WORLDWIDE INTERACTION",
    text: "Attend world-class workshops led by top engineers across Web3. Attend world-class workshops led by top engineers across Web3",
  },
  {
    title: "WORLDWIDE INTERACTION",
    text: "Attend world-class workshops led by top engineers across Web3. Attend world-class workshops led by top engineers across Web3",
  },
  {
    title: "WORLDWIDE INTERACTION",
    text: "Attend world-class workshops led by top engineers across Web3. Attend world-class workshops led by top engineers across Web3",
  },
];
const RequestToJoin = () => {
  return (
    <div className="w-screen ">
      <h1
        className={`md:text-8xl ${myFont.className} sm:text-6xl text-5xl text-center`}
      >
        PREVIOUS YEAR STATS
      </h1>
      <section>
        {data.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <div key={index} className="w-full flex items-center justify-start px-auto px-8 my-16">
                <div className="lg:w-2/3 md:w-4/5 md:h-36 h-max w-full flex">
                  <span className=" md:w-6 w-3 bg-white"></span>
                  <div className="w-36 h-full"> </div>
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
                <div className="lg:w-2/3 md:h-36 h-max w-full flex">
                  <span className=" md:w-6 w-3 bg-white"></span>
                  <div className="w-36 h-full"> </div>
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
