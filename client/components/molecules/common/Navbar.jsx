import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-10 justify-center p-10 font-bold word-spacing tracking-tight text-white absolute w-full top-0 z-10'>
        <a className='hover:text-primary-pink transition-colors' href='#'>HOME</a>
        <a className='hover:text-primary-pink transition-colors' href='#'>WATCH ON DEMAND</a>
        <a className='hover:text-primary-pink transition-colors' href='#'>STAY IN THE LOOP</a>
        <a className='hover:text-primary-pink transition-colors' href='#'>PRESS ROOM</a>
    </div>
  )
}

export default Navbar
