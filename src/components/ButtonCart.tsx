"use client"
import { StoreState } from '@/types';
import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { useSelector } from 'react-redux';


const ButtonCart = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  return (
    <div className='w-[120px] h-12 font-bold hoverEffect hover:bg-darkOrange hover:text-white bg-white rounded-md flex items-center justify-center gap-2'>
        <Link href={"/cart"} className=' flex items-center justify-center gap-2'>
          <CiShoppingCart className='text-[20px] '/>
          <span className='text-14 '>Cart</span>
        
        <div className='bg-[#007580] rounded-full w-[20px] h-[20px] text-white flex items-center justify-center'>
            <p className='text-[14px] text-center'>{cart ? cart?.length : 0}</p>
        </div>
        </Link>
        
      </div>
  )
}

export default ButtonCart