/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add custom webpack config here if needed
    return config;
  },
  // Increase build cache size
  experimental: {
    webpackBuildWorker: true,
  },
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 120 * 1000,
    // Number of pages to keep in the buffer
    pagesBufferLength: 2,
  },
  poweredByHeader: false,
};

export default nextConfig;
