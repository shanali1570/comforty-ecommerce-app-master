import React from 'react';
import { getCategorysData } from '@/lib/getData';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { CategoryData } from '../../types';
import { urlFor } from '@/sanity/lib/image';

const BannerCategories = async () => {
  const categories = await getCategorysData();

  return (
    <div>
      <h1 className="text-[#272343] text-center lg:text-left text-[28px] sm:text-[32px] font-inter mb-8">
        Top Categories
      </h1>

      <div className="mt-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.slice(0, 3).map((item: CategoryData) => (
          <Link
            href={`/shop?category=${item?.title}`} // Navigate to shop page with category parameter
            key={item?.title}
          >
            <div className="w-full bg-gray-50 rounded-xl p-4 relative cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-200">
              <Image
                width={500}
                height={500}
                alt={item?.title}
                src={urlFor(item?.image).url()}
                className="w-full h-[200px] sm:h-[250px] lg:h-[400px]  rounded-t-xl object-cover hover:scale-95 transition-transform duration-200"
              />
              <div className="w-full h-auto bg-black bg-opacity-60 rounded-b-xl flex flex-col justify-center items-start p-4">
                <h1 className="text-white text-[18px] sm:text-[20px] font-semibold">{item?.title}</h1>
                <p className="text-white text-[14px] sm:text-[16px]">110 Products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BannerCategories;
