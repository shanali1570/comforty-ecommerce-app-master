import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Page = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-32 py-8">

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center font-bold text-[30px] sm:text-[35px] md:text-[40px]'>
          Get In Touch With Us
        </h1>
        <p className='w-full sm:w-[600px] text-[14px] sm:text-[16px] text-center mt-4'>
          For more information about our products & services, please feel free to drop us an email.
          Our staff is always ready to help you out. Do not hesitate!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">

        {/* FAQ 1 */}
        <div className='w-full space-y-4 h-[170px] bg-[#f7f7f7] px-8 py-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>What types of chairs do you offer?</h1>
            <FaPlus className="text-xl hover:text-2xl cursor-pointer" />
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>

        {/* FAQ 2 */}
        <div className='w-full space-y-4 h-[170px] bg-[#f7f7f7] px-8 py-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>What is the return policy?</h1>
            <FaPlus className="text-xl hover:text-2xl cursor-pointer" />
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>

        {/* FAQ 3 */}
        <div className='w-full space-y-4 h-[170px] bg-[#f7f7f7] px-8 py-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>Do you offer free shipping?</h1>
            <FaPlus className="text-xl cursor-pointer hover:text-2xl" />
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>

        {/* FAQ 4 */}
        <div className='w-full space-y-4 h-[170px] bg-[#f7f7f7] px-8 py-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>How do I track my order?</h1>
            <FaPlus className="text-xl  cursor-pointer hover:text-2xl" />
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>

        {/* FAQ 5 */}
        <div className='w-full space-y-4 h-[170px] bg-[#f7f7f7] px-8 py-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>Do you offer discounts?</h1>
            <FaPlus className="text-xl cursor-pointer hover:text-2xl" />
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>

        {/* FAQ 6 */}
        <div className='w-full space-y-4 h-[170px] bg-[#f7f7f7] px-8 py-6 rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg'>What materials are used in the chairs?</h1>
            <FaPlus className="text-xl cursor-pointer hover:text-2xl" />
          </div>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, 
            odit expedita eos molestiae ipsa totam quidem?
          </p>
        </div>

      </div>
    </div>
  );
};

export default Page;
