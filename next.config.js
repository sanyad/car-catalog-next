/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL
  },
  async rewrites() { //TODO подменяет пути картинок
    return [
      {
        source: '/images/:path*',
        destination: 'http://localhost:4200/:path*'
      }
    ]
  },
  // basePath: '/site', // TODO добавление как базовый урл
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
