import React from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import { myFont } from "../common/AnimatedTitle";
import BgGradient from "@/components/atoms/gradientBackground";
import { Info1, Info2 } from "./data";

const Heading = () => {
  return (
    <div id="sponsors" className="flex flex-col justify-center z-50 items-center">
      <div
        className={`md:text-8xl z-50 ${myFont.className} sm:text-6xl text-5xl text-center`}
      >
      Past  SPONSORS
      </div>
      <div className="text-2xl z-50 mb-10 font-thin sm:mt-3 mt-2 mx-7 text-center text-white max-w-[600px]">
        Our generous sponsors making Hackofiesta 5.0 possible.
      </div>

    </div>
  );
};
const StyledDiv = styled.div`
  clip-path: polygon(
    0 0,
    86% 0,
    100% 23%,
    100% 70%,
    100% 98%,
    0 99%,
    0% 70%,
    0% 30%
  );
  background-color: rgba(19, 40, 80, 0.6);
`;
const Card = ({ companyName,description,url }) => {
  return (
    <Tilt tiltMaxAngleX={13} tiltMaxAngleY={13}>
      <StyledDiv className="pb-5 z-50 new_accordcomp mx-2 pt-16 px-10 min-h-[300px] shadow-md ">
        <div className="text-4xl flex min-h-12 tracking-widest">
         <img src={url} className={"w-48"} />
        </div>
        <div className="mt-8 text-base text-gray-500">
         {description}
        </div>
      </StyledDiv>
    </Tilt>
  );
};

const StyledDiv2 = styled.div`
border-radius: 0px 25px 0px 25px;  
background-color: rgba(19, 40, 80, 0.6);
`
const PlatinumCard = ({companyName,url,name}) =>{
    return (
      <StyledDiv2 className="min-h-[150px] flex px-10 gap-6 justify-center items-center w-full max-w-[250px] bg-orange-500">
         <img src={url} className={`${name?("w-1/3"):"w-full"}`} />
         {name && (
         <div className="text-4xl text-black font-bold w-1/3">
            {companyName}
         </div>
         )}
      </StyledDiv2>
    )
}
const GoldCard = () =>{
    return (
      <StyledDiv2 className="min-h-[130px] flex  justify-center gap-6 items-center w-full px-5 max-w-[210px]">
          <div className="w-1/4">
             <img src={"/github_logo.png"} className=" w-full" />
          </div>
          <div className={`font-serif text-white text-center text-3xl`}>
              Github
          </div>
          
      </StyledDiv2>
    )
}

const Sponsors = () => {
  return (
    <div className="min-h-screen z-0 relative pt-16 pb-28 mt-24">
      <BgGradient />
      <Heading />
      <div className="sm:text-5xl text-3xl  text-center text-white sm:mt-10">💎 Diamond Sponsers</div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-10 justify-center mt-12 lg:mx-40 xl:mx-64">
        {Info1.map((obj)=>{
          return <Card companyName={obj.companyName} url={obj.url} description={obj.description}/>
        })}
      </div>
      <div className="sm:text-5xl text-3xl text-center text-white sm:mt-28 mt-12">💍 Platinum Sponsers</div>
      <div className="flex flex-wrap gap-16  px-10 py-10 justify-center mt-4 sm:mx-10">
          {Info2.map((ele)=><PlatinumCard companyName={ele.companyName} url={ele.url} name={ele.name}/>)}
      </div>
      <div className="sm:text-5xl text-3xl text-center text-white sm:mt-16 mt-7">🪙 Gold Sponser</div>
      <div className="flex flex-wrap gap-16  px-10 py-10 justify-center mt-4 sm:mx-10">
             <GoldCard />
      </div>
    </div>
  );
};

export default Sponsors;
