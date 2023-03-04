const { i18n } = require('./next-i18next.config');

function getApiUrl() {
  if (process.env.VERCEL) {
    return `${process.env.VERCEL_URL}/api/`;
  }
  return process.env.API_URL;
}

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
    API_URL: getApiUrl(),
  },
  serverRuntimeConfig: {
    API_URL: getApiUrl(),
  },
};

module.exports = nextConfig;
