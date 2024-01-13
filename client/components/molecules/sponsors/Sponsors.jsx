import React from 'react'
import styled from 'styled-components';
import Tilt from "react-parallax-tilt"
import { myFont } from '../common/AnimatedTitle';
import BgGradient from '@/components/atoms/gradientBackground';
const Heading = () =>{
    return (
        <div className="flex flex-col justify-center z-50 items-center">
        <div className={`md:text-8xl z-50 ${myFont.className} sm:text-6xl text-5xl text-center`}>
            SPONSORS
        </div>
        <div className="text-base z-50 font-thin sm:mt-16 mt-11 mx-7 text-center text-white max-w-[600px]">
            Hackathon sponsors provide mission-critical support for the next generation of Web3 developers. If you or your organization is interested in sponsorship opportunities, please email us at hackathon@chainlinklabs.com 
        </div>
        </div>
    )
}
const StyledDiv = styled.div`
    clip-path: polygon(0 0, 86% 0, 100% 23%, 100% 70%, 100% 98%, 0 99%, 0% 70%, 0% 30%);
    background-color:rgba(19,40,80,.6);
    
`
const Card = ({companyName}) =>{
    return (
        <Tilt>
            <StyledDiv className="pb-5 z-50 new_accordcomp mx-2 pt-16 px-10 min-h-[300px] shadow-md ">
                <div className="text-4xl flex tracking-widest">
                    {companyName}
                </div>
                <div className="mt-8 text-base text-gray-500">
                Avalanche is the fastest, most reliable smart contracts platform in the world. Its revolutionary consensus protocol and novel Subnets enable Web3 developers to easily launch highly-scalable solutions. Deploy on the EVM, or use your own custom VM. Build anything you want, any way you want, on the eco-friendly blockchain designed for Web3 devs.
                </div>
            </StyledDiv>
        </Tilt>
    )
}
const Sponsors = () => {
  return (
        <div className="min-h-screen z-0 relative pt-16 pb-48 mt-24">
            <BgGradient/>
            <Heading/>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 px-10 justify-center mt-12 lg:mx-40 xl:mx-64">
                <Card   companyName={"Polygon"}/>
                <Card   companyName={"Avalanche"}/>
                <Card   companyName={"Polygon"}/>
                <Card   companyName={"Avalanche"}/>
            </div>
        </div>
        
  )
}

export default Sponsors
