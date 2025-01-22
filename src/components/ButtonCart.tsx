"use client";
import { StoreState } from "@/types";
import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const ButtonCart = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);

  return (
    <Link
      href="/cart"
      aria-label="Go to Cart"
      className="w-[110px] sm:w-[120px] h-10 sm:h-12 font-bold hoverEffect hover:bg-darkOrange hover:text-white bg-white rounded-md flex items-center justify-center gap-2"
    >
      <CiShoppingCart className="text-[18px] sm:text-[20px]" />
      <span className="text-[12px] sm:text-[14px]">Cart</span>

      <div className="bg-[#007580] rounded-full w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] text-white flex items-center justify-center">
        <p className="text-[10px] sm:text-[14px] text-center">
          {cart ? cart.length : 0}
        </p>
      </div>
    </Link>
  );
};

export default ButtonCart;
