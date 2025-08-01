import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://fakestoreapi.com/img/**')],
  },
  output: 'standalone',
};

export default nextConfig;
