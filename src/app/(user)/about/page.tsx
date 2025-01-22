import Image from 'next/image';
import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import Link from 'next/link';
import Container from '@/components/Container';

const Page = () => {
  return (
    <Container className="py-10">
    <div className="w-full px-4 sm:px-8 lg:px-32 py-8 mb-10 lg:mb-48">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Left Section: About Us */}
        <div className="w-full lg:w-[650px] bg-[#007580]  text-white p-6 rounded-lg">
          <div className="w-full flex flex-col items-start  mt-14 justify-center gap-4">
            <h1 className="text-[20px] font-bold">About Us - Comforty</h1>
            <p className="text-[14px]">
              At Comforty, we believe that the right chair can transform your space and elevate your comfort.
              Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
          </div>
          <button className="bg-[#61a5ac] mt-48 hover:border-2 text-[14px] py-4 w-[179px] h-[56px]  hover:bg-[#4f8a8a]">
            <Link href="/shop">
            View Collection
            </Link>
            
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[600px] bg-gray-400 rounded-lg overflow-hidden">
          <Image
            width={600}
            height={478}
            alt="Library Stool Chair"
            src="/Image1.png"
            className="w-full h-auto object-cover hover:border-2"
          />
        </div>
      </div>


      <div className="mt-28">
  <h1 className="text-center font-bold text-[22px] sm:text-[25px]">
    What Makes Our Brand Different
  </h1>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Feature 1 */}
    <div className="flex flex-col items-center text-center hover:border-2 p-4 rounded-lg">
      <div className="text-[#007580] text-3xl mb-4">
        <FaTruckFast />
      </div>
      <h2 className="text-[18px] font-bold mb-2">Next day as standard</h2>
      <p className="text-[14px]">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center text-center hover:border-2 p-4 rounded-lg">
      <div className="text-[#007580] text-3xl mb-4">
        <CiCircleCheck />
      </div>
      <h2 className="text-[18px] font-bold mb-2">Made by true artisans</h2>
      <p className="text-[14px]">
        Handmade crafted goods made with real passion and craftsmanship
      </p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center text-center hover:border-2 p-4 rounded-lg">
      <div className="text-[#007580] text-3xl mb-4">
        <CiCreditCard1 />
      </div>
      <h2 className="text-[18px] font-bold mb-2">Unbeatable prices</h2>
      <p className="text-[14px]">
        For our materials and quality you won’t find better prices anywhere
      </p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center text-center hover:border-2 p-4 rounded-lg">
      <div className="text-[#007580] text-3xl mb-4">
        <LuSprout />
      </div>
      <h2 className="text-[18px] font-bold mb-2">Recycled packaging</h2>
      <p className="text-[14px]">
        We use 100% recycled to ensure our footprint is more manageable
      </p>
    </div>
  </div>
</div>


      <div className='mt-28'>
        <h1 className='text-[25px] font-bold mb-10'>Our Popular Products </h1>


        <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
        <div className='space-y-2'>
            
            <Link href='/shop'>
            <Image
                    width={500}
                    height={500}
                    alt='Library Stool Chair'
                    src={"/Large.png"}
                    className='w-[630px] h-[375px] hover:border-2'
                />      
                </Link>      
            <div className='text-[#2a254b] text-[18px]'>
              <p className=''>The Poplar suede sofa</p>
              <span>$99.00</span>
            </div>
    
            </div>

            <div className='space-y-2'>
            
            <Link href='/shop'>
           
        <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Photo.png"}
                className='w-[305px] h-[375px] hover:border-2'
            />         
            </Link>   
        <div className='text-[#2a254b] text-[18px]'>
          <p className=''>The Dandy chair</p>
          <span>$99.00</span>
        </div>

        </div>

        <div className='space-y-2'>
            
        <Link href='/shop'>
           
        <Image
                width={500}
                height={500}
                alt='Library Stool Chair'
                src={"/Parent.png"}
                className='w-[305px] h-[375px] hover:border-2'
            />     
            </Link>       
        <div className='text-[#2a254b] text-[18px]'>
          <p className=''>The Dandy chair</p>
          <span>$99.00</span>
        </div>

        </div>

        </div>
        



        </div>
      </div>
      </Container>
    
  );
};

export default Page;
