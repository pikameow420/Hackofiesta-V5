import React from 'react'
import Dot from '@/assets/dot-pattern.png'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className='h-screen'>
        <div className="overlay flex flex-col items-center gap-y-8 justify-center">
              <div className="main_heading text-white text-9xl">HACKOFIESTA</div>  
              <div className="second_heading text-2xl text-white text-center  max-w-[700px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia adipisci perspiciatis provident at nemo consequatur necessitatibus laudantium iure. 
              </div>   
              <div className="h-7"></div>     
        </div>
        
    </div>
  )
}

export default HeroSection
