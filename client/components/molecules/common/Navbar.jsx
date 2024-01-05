import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <>
      <img src={"/HoFRmBg.png"} width={82} className="absolute right-7 top-2" />
    <div className='sm:flex hidden gap-10 justify-center text-2xl px-10 py-6 font-semibold word-spacing tracking-tight text-white absolute w-full top-0 z-10'>
        <Link className='hover:text-primary-pink transition-colors' href='/'>Home</Link>
        <Link className='hover:text-primary-pink transition-colors' href='/about'>About</Link>
        <Link className='hover:text-primary-pink transition-colors' href='/sponsors'>Sponsors</Link>
        <Link className='hover:text-primary-pink transition-colors' href='/faqs'>FAQs</Link>
    </div>
    </>
  )
}

export default Navbar
