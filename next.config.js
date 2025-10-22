/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  future: { webpack5: true },
  experimental: {
    forceSwcTransforms: true,
  },
  eslint: {
    // Don’t run ESLint during `next build` (Vercel uses this)
    ignoreDuringBuilds: true,
  },
};
