import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Ensure all required files are bundled for deployment
};
export default nextConfig;
