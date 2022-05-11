module.exports = {
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
