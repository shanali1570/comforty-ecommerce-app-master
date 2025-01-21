"use client";

import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 text-lg">Your wishlist is empty.</p>
          <Link href="/" className="mt-4 inline-block bg-lightOrange text-white px-4 py-2 rounded-md hover:bg-darkOrange">
            Start Shopping
          </Link>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <li key={item.id} className="border p-4 rounded-md">
              <Image
                src={urlFor(item?.image).url()}
                alt={item.title}
                width={300}
                height={200}
                className="w-full object-cover mb-2"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              
              <div className="flex justify-between">
              <Link
                href={`/product/${item.slug}`}
                className="text-blue-500 hover:underline"
              >
                View Product
              </Link>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
