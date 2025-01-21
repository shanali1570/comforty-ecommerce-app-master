import { getBannersData } from '@/lib/getData'
import React from 'react'
import Container from './Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Button from './Button';
import { BannerData } from '../../types';
import Link from 'next/link';
import FormattedPrice from './FormattedPrice';

const Banner = async () => {

  const banners = await getBannersData();

  const singleBanner = banners[0];


  return (
    <Container className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[750px]'>

      {/* Left half - single image */}

      <div className="h-[600px] col-span-2 bg-bgLight relative flex flex-col lg:flex-row items-center lg:items-center justify-between rounded-lg overflow-hidden group">
        <div className="flex-1 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 text-center lg:text-left p-4 sm:p-8 md:p-10">
          <button className="bg-lightGreen text-white rounded-full w-20 py-1 text-xs md:text-sm font-semibold hover:bg-green-600 hoverEffect mx-auto lg:mx-0">
            Sale {singleBanner?.price}
          </button>
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold">
            {singleBanner?.title}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            {singleBanner?.subtitle}
          </h2>
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-black/60 font-medium max-w-[200px] sm:max-w-[300px] md:max-w-[400px] mx-auto lg:mx-0">
            {singleBanner?.description}
          </p>
          <Link href={"/shop"}>
          <Button
            className="w-28 sm:w-36 py-2 text-xs sm:text-sm font-medium bg-darkOrange text-center text-white rounded-3xl hover:opacity-70 hoverEffect mx-auto lg:mx-0">
            
            Shop Now
            
          </Button></Link>
        </div>
        <div className="flex-1 flex justify-center items-center p-4 sm:p-10 lg:p-16">
          <Image
            src={urlFor(singleBanner?.image).url()}
            alt={singleBanner?.title}
            width={500}
            height={500}
            className="object-contain h-56 sm:h-72 md:h-80 lg:h-[500px] xl:h-[600px] group-hover:scale-105 hoverEffect"
          />
        </div>
      </div>


      {/* Right half - double image */}

      <div className=' flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px] '>
        {
          banners.slice(1, 3).map((item: BannerData) => (
            <div key={item?._id} className='h-full md:h-1/2 bg-bgLight rounded-lg overflow-hidden 
            flex justify-center items-center p-5 group'>
              <div className='w-1/2 flex flex-col'>
                <div>
                  <p className='text-2xl font-semibold'>{item?.title}</p>
                  <p className='text-3xl font-bold'>{item?.subtitle}</p>
                </div>
                <p className='mt-3 font-medium text-black/60'>
                  From <FormattedPrice
                    amount={item?.price}
                    className='text-lightRed font-bold'
                  />
                </p>
                <Link href={"/shop"} className='mt-5 font-bold underline underline-offset-2 decoration-[1px] hover:text-lightRed hoverEffect'>Shop now!</Link>
              </div>
              <Image src={urlFor(item?.image).url()}
                alt={item?.title}
                width={500}
                height={500}
                className='object-contain h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect'
              />
            </div>
          ))}
      </div>
    </Container>

  )
}

export default Banner