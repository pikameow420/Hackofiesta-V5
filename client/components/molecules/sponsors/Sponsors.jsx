import { ThemeProvider } from '@lobehub/ui'
import React from 'react'
import {motion} from 'framer-motion'
import { Hero } from "@lobehub/ui";
import styled from 'styled-components';


const Heading = () =>{
    return (
        <div className="flex flex-col justify-center items-center">
        <div className="text-7xl text-center">
            Sponsors
        </div>
        <div className="text-base font-thin mt-16 text-center text-white max-w-[600px]">
            Hackathon sponsors provide mission-critical support for the next generation of Web3 developers. If you or your organization is interested in sponsorship opportunities, please email us at hackathon@chainlinklabs.com 
        </div>
        </div>
    )
}
const StyledDiv = styled.div`
    clip-path: polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0 100%, 0% 20%);
    background-color:rgba(19,40,80,.6);
`
const Card = ({companyName}) =>{
    return (
        <StyledDiv className="sm:w-[35%] mx-7 w-[100%] px-10 min-h-[300px]">
            <div className="text-4xl flex tracking-widest mt-16 ">
                {companyName}
            </div>
            <div className="mt-8 text-base text-gray-500">
            Avalanche is the fastest, most reliable smart contracts platform in the world. Its revolutionary consensus protocol and novel Subnets enable Web3 developers to easily launch highly-scalable solutions. Deploy on the EVM, or use your own custom VM. Build anything you want, any way you want, on the eco-friendly blockchain designed for Web3 devs.
            </div>
        </StyledDiv>
    )
}
const Sponsors = () => {
  return (
        <div className="min-h-screen py-16 bg-[#090e2e]">
            <Heading/>
            <div className="flex flex-wrap sm:px-10 justify-center mt-12">
                <Card   companyName={"Polygon"}/>
                <Card   companyName={"Avalanche"}/>
            </div>
            <div className="flex flex-wrap sm:px-10 justify-center mt-12">
                <Card   companyName={"Polygon"}/>
                <Card   companyName={"Avalanche"}/>
            </div>
        </div>
        
  )
}

export default Sponsors
