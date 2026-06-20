import type {NextConfig} from 'next';
import {defaultLocale, locales} from './i18n';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  eslint: {
    dirs: ['app', 'components', 'lib', 'messages']
  },
  i18n: {
    defaultLocale,
    locales,
    localeDetection: true
  },
  output: 'standalone'
};

export default nextConfig;
