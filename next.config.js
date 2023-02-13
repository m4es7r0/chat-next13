/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["w7.pngwing.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
