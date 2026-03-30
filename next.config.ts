import type { NextConfig } from 'next';

// STATIC_EXPORT=true → статический билд для VM (nginx)
// По умолчанию → Vercel (SSR, без basePath)
const isStatic = process.env.STATIC_EXPORT === 'true';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  ...(isStatic && { output: 'export' }),
  ...(basePath && { basePath }),
  images: { unoptimized: true },
};

export default nextConfig;
