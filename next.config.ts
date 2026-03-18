import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: '/main',  
  assetPrefix: '/main/',
  typescript: {    
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

};

export default nextConfig;
