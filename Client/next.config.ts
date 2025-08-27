import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ["fakestoreapi.com", "cdn.dummyjson.com"], 
  },
};

export default nextConfig;
