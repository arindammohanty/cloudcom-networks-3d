import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/company',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/solutions',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
