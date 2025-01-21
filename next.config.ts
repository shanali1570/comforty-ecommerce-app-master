import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com','cdn.sanity.io'],  // Add the allowed domain for images
  },
};

export default nextConfig;
