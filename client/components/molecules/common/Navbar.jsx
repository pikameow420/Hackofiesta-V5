import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div className=''>
      <img src={"/HoFRmBg.png"} width={82} className="absolute top-4 left-12" />
      <div className='sm:flex hidden gap-20 justify-center text-xl px-10 py-6 pt-10 word-spacing tracking-tight text-white  w-full top-0 z-10'>
        <Link className='hover-underline-animation hover:text-primary-blue transition-colors' href='/'>Home</Link>
        <Link className='hover-underline-animation hover:text-primary-blue transition-colors' href='/about'>About</Link>
        <Link className='hover-underline-animation hover:text-primary-blue transition-colors' href='/sponsors'>Sponsors</Link>
        <Link className='hover-underline-animation hover:text-primary-blue transition-colors' href='/faqs'>FAQ</Link>
        <Link className='hover-underline-animation hover:text-primary-blue transition-colors' href='/contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar
