import { Burger } from '@lobehub/ui';
import { useState } from 'react';

const items = [
  {
    key: 'home',
    label: 'Home',
    link: '/'
  },
  {
    key: 'about',
    label: 'About',
  },
  {
    key: 'faqs',
    label: 'FAQs',
    link: '/'
  },
  {
    key: 'sponsors',
    label: 'Sponsors',
  },
  {
    key: 'contact',
    label: 'Contact Us',
  }
  
];

const HamBurger = () => {
  const [opened, setOpened] = useState(false);
  return (opened ? <Burger items={items} opened={opened} className='z-20 right-6 absolute my-8 bg-white text-white' setOpened={setOpened} /> : 
    <div className='flex md:hidden absolute right-3 flex-col gap-1 cursor-pointer py-8 me-4' onClick={()=>setOpened(true)}>
        <div className='w-8 h-1 bg-gray-300 rounded-3xl'></div>
        <div className='w-8 h-1 bg-gray-300 rounded-3xl'></div>
        <div className='w-8 h-1 bg-gray-300 rounded-3xl'></div>
    </div>
  );
};

export default HamBurger
