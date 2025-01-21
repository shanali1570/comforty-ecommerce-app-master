"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  slug: { current: string };
  [key: string]: unknown;
}

const SearchInput = ({ products }: { products: Product[] }) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  let debounceTimer: NodeJS.Timeout;

  useEffect(() => {
    setActiveIndex(-1); // Reset active index when search input changes
  }, [search]);

  const handleSearch = (query: string) => {
    clearTimeout(debounceTimer); // Clear previous debounce timer
    setSearch(query);

    if (query.trim() === "") {
      setFilteredProducts([]); // Reset results if input is cleared
      setNoResults(false);
      setLoading(false);
    } else {
      setLoading(true); // Show loading indicator
      debounceTimer = setTimeout(() => {
        const results = products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredProducts(results);
        setNoResults(results.length === 0); // Check if no results
        setLoading(false); // Hide loading indicator
      }, 300); // Debounce delay of 300ms
    }
  };

  const handleNavigate = (slug: string) => {
    if (typeof window !== "undefined") {
      window.location.href = `/product/${slug}`;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (filteredProducts.length === 0) return;

    if (event.key === "ArrowDown") {
      setActiveIndex((prevIndex) =>
        prevIndex < filteredProducts.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "ArrowUp") {
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredProducts.length - 1
      );
    } else if (event.key === "Enter" && activeIndex >= 0) {
      handleNavigate(filteredProducts[activeIndex]?.slug.current);
    }
  };

  return (
    <div className="relative w-full hidden sm:inline-flex flex-1 h-12 text-base items-center gap-2 justify-between">
      {/* Search Icon */}
      <CiSearch className="text-lg absolute left-2.5 mt-.5 text-lightOrange" />
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="flex-1 h-full outline-none bg-opacity-95 placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28"
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        value={search}
      />
      {/* Clear Search */}
      {search && (
        <IoMdClose
          className="text-accent/50 hover:text-lightRed hoverEffect cursor-pointer absolute right-20"
          onClick={() => {
            setSearch("");
            setFilteredProducts([]);
            setNoResults(false);
          }}
        />
      )}
      {/* Search Button */}
      <button
        className="bg-lightOrange text-white px-3.5 py-1.5 mr-1.5 text-sm hover:bg-darkOrange hoverEffect font-medium absolute right-0"
        onClick={() =>
          filteredProducts.length && handleNavigate(filteredProducts[0]?.slug.current)
        }
      >
        Search
      </button>
      {/* Search Results */}
      {loading ? (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 px-4 py-2">
          Loading...
        </div>
      ) : filteredProducts.length > 0 ? (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
  {filteredProducts.map((product, index) => (
    <li
      key={product.id || index} // Use product.id if available; fallback to index
      className={`px-4 py-2 cursor-pointer ${
        activeIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
      }`}
      onMouseEnter={() => setActiveIndex(index)}
      onClick={() => handleNavigate(product.slug.current)}
    >
      <span
        dangerouslySetInnerHTML={{
          __html: product.title.replace(
            new RegExp(search, "gi"),
            (match) => `<mark>${match}</mark>`
          ),
        }}
      />
    </li>
  ))}
</ul>

      ) : noResults ? (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 px-4 py-2">
          No matching results found
        </div>
      ) : null}
    </div>
  );
};

export default SearchInput;
