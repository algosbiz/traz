/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: `output: 'export'` was removed so the /api/* Route Handlers
  // (contact, quote, newsletter) can run as serverless functions on Vercel.
  // Static export has no server, so a POST handler cannot exist under it.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
