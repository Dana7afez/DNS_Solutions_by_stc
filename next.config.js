/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/DNS_Solutions_by_stc" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/DNS_Solutions_by_stc/" : "",
  // Ensure static assets are properly handled
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? "/DNS_Solutions_by_stc" : "",
  },
}

module.exports = nextConfig
