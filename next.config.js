/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Important for Docker
    reactStrictMode: true,
    // Remove any Vercel-specific configurations
  }
  
  module.exports = nextConfig