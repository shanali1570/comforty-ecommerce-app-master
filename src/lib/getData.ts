import { client } from "@/sanity/lib/client";
import {
  bannerQuerry,
  bestSellersQuery,
  categoryQuery,
  productsQuery,
} from "./query";

export const revalidate = 0;

const getBannersData = async () => {
  try {
    const bannersData = await client.fetch(bannerQuerry);
    return bannersData;
  } catch (error) {
    console.error("Error fetching banners data:", error);
    return [];
  }
};

const getProductsData = async () => {
  try {
    const productsData = await client.fetch(productsQuery);
    return productsData;
  } catch (error) {
    console.error("Error fetching products data:", error);
    return [];
  }
};

const getCategorysData = async () => {
  try {
    const categoryData = await client.fetch(categoryQuery);
    return categoryData;
  } catch (error) {
    console.error("Error fetching category data:", error);
    return [];
  }
};

const getBestSellersData = async () => {
  try {
    const bestSellersData = await client.fetch(bestSellersQuery);
    return bestSellersData;
  } catch (error) {
    console.error("Error fetching best sellers data:", error);
    return [];
  }
};

export {
  getBannersData,
  getProductsData,
  getCategorysData,
  getBestSellersData,
};
