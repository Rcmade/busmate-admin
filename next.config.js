/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
};

module.exports = nextConfig;
