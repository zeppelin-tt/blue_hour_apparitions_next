import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/blue_hour_apparitions',
  images: { unoptimized: true },
};

export default nextConfig;
