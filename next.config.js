/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MY_HEROKU_URL: process.env.MY_HEROKU_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
