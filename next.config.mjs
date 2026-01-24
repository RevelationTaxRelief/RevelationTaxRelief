/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript Configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Image Optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  
  // Performance & Security
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
