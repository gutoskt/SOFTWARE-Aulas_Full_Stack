import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000, // Checa alterações a cada 1 segundo
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;