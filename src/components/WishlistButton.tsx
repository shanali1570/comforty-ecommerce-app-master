"use client";

import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import toast from "react-hot-toast";

interface WishlistButtonProps {
  product: {
    id: string;
    title: string;
    image: string;
    price: number;
    slug: string;
  };
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const toggleWishlist = () => {
    if (isInWishlist) {
      
      toast.success('Remove from Wishlist!');
      removeFromWishlist(product.id);
    } else {
      
      toast.success('Add to Wishlist!');
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`p-2 rounded ${
        isInWishlist ? "text-red-500" : "text-gray-500"
      } hover:text-red-600`}
    >
      {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
