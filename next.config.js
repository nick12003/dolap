const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  i18n,
  images: {
    domains: ['drive.google.com'],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
