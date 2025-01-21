import React from 'react';
import { PiCheckBold } from 'react-icons/pi';
import { CiCircleAlert } from 'react-icons/ci';
import Link from 'next/link';
import Container from './Container';
import { languages } from '@/constants';

const TopHeader = () => {
  
  const selectClass = "onMouseEnter={handleHover} onMouseLeave={handleBlur} text-white text-left hoverEffect hover:text-darkOrange hover:cursor-pointer bg-[#272343] border-none focus:outline-none  transition-all";

  return (
  
    <div className="bg-[#272343] text-white lg:h-10">
    <Container className='h-full md:flex  md:justify-between items-center  '>
        
        {/* Left side */}
        <div className="flex  items-center gap-2 hoverEffect hover:text-darkOrange">
        <PiCheckBold />
        <p>Free shipping on all orders over $50</p>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end md:justify-center gap-8">

        {/* Language Selector */}

       
        <select defaultValue={""} className={selectClass} aria-label="Select Language">
            { languages.map((lang) => (
                 
                <option key={lang.code} value={lang.code} className={selectClass}>
                     {lang.name}
                 </option>
                
            ))}
        </select>
        

        {/* Frequent Asked Questions */}
        <Link href={'/faqs'}>
        <span className='hoverEffect hover:text-darkOrange'>Faqs</span>
        </Link>

        {/* Need Help */}
        <div className="hoverEffect hover:text-darkOrange">
        <Link href={"/"} className='flex items-center justify-center gap-2'>
            <CiCircleAlert className='text-[24px]' />
            <span className=''>Need Help</span>
        </Link>
        </div>
        </div>
    </Container>
    </div>
  );
};

export default TopHeader;
