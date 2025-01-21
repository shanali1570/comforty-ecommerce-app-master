import React from 'react'
import Image from 'next/image';

const ExploreNew = () => {
  return (
    
        <div className='w-full ml-0 lg:ml-8 sm:px-8 relative'>
     
     <div className="mt-14 flex flex-col justify-center items-center lg:flex-row gap-4 lg:gap-0">
  {/* Vertical Text and Main Image Section */}
  <div className=" space-y-4   lg:space-y-0  lg:-space-x-16 ">

    {/* Heading positioned to the left of Image 01 */}
    <div className=' absolute  inset-y-4 lg:-rotate-90 rotate-0  font-semibold text-[22px] lg:text-[25px]'>
    <span>
    Explore new and popular styles
  </span>
    </div>
    

    {/* Image 01 */}
    <Image
      width={500}
      height={500}
      alt="Wooden Chair"
      src="/Image1.png"
      className="w-[320px] lg:w-[600px] h-[320px] lg:h-[490px] cursor-pointer hover:border-2"
    />
  </div>

  <div className=" flex flex-col  items-center justify-center gap-6  ">
    <div className="flex flex-col sm:flex-row items-center gap-6">
      {/* Image 02 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image1.png"
        className="w-[320px] h-[320px]  lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />

      {/* Image 03 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image1.png"
        className="w-[320px] h-[320px] lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />
    </div>

    <div className="flex flex-col sm:flex-row items-center gap-6">
      {/* Image 04 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image1.png"
        className="w-[320px] h-[320px]  lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />

      {/* Image 05 */}
      <Image
        width={500}
        height={500}
        alt="Wooden Chair"
        src="/Image1.png"
        className="w-[320px] h-[320px]  lg:h-[230px] cursor-pointer hover:border-2 transition-all"
      />
    </div>
  </div>
</div>



  </div>
 
  
       
    
  );
}

export default ExploreNew;
