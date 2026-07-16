/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out - perfect for cPanel / shared hosting.
  output: "export",

  // Static hosts can't run Next's image optimizer, so serve images as-is.
  images: {
    unoptimized: true,
  },

  // Emit /section/index.html style routes so Apache serves clean URLs from folders.
  trailingSlash: true,

  // Lint is run separately (npm run lint); don't let it block a production export.
  eslint: {
    ignoreDuringBuilds: true,
  },

  reactStrictMode: true,
};

export default nextConfig;
