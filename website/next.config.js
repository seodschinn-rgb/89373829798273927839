/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  // Tree-shaking für große Pakete (nur verwendete Exports laden)
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig
