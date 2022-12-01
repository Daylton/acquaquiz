/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/cards",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
