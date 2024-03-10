/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/next-app-new",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
