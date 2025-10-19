import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // สำหรับ static export
  images: {
    unoptimized: true, // รองรับ static export กับ <Image />
  },
};

export default nextConfig;