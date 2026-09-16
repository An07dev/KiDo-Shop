import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['mongodb-memory-server', 'mongoose'],
  outputFileTracingExcludes: {
    '*': ['./data/**/*', 'data/**/*'],
  },
  allowedDevOrigins: [
    'nicotine-mumbling-detract.ngrok-free.dev',
    '*.ngrok-free.dev',
    '*.ngrok-free.app',
    '*.ngrok.app',
    '*.ngrok.io',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [
      {
        source: '/demo',
        destination: '/',
        permanent: false,
      },
      {
        source: '/landing',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

