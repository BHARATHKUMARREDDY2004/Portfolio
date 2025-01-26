// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Ignore ESLint errors during the build
  },
  typescript: {
    ignoreBuildErrors: true,   // Ignore TypeScript errors during the build
  },
  reactStrictMode: true,       // Optional: Enables strict mode for React
};

export default nextConfig;
