"use client";
import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const WishlistLink: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="w-[120px] sm:w-[140px] h-10 sm:h-12 font-bold hoverEffect hover:bg-darkOrange hover:text-white bg-white rounded-md flex items-center justify-center gap-2">
      <Link href={"/wishlist"} className="flex items-center justify-center gap-2">
        <CiHeart className="text-[18px] sm:text-[20px]" />
        <span className="text-[12px] sm:text-[14px]">Wishlist</span>

        <div className="bg-[#007580] rounded-full w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] text-white flex items-center justify-center">
          <p className="text-[10px] sm:text-[14px] text-center">
            {wishlist ? wishlist.length : 0}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WishlistLink;
