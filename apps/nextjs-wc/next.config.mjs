/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  transpilePackages: ['wc-lit', 'wc-stencil', 'lit'],
  turbopack: {
    resolveAlias: {
      'lit/decorators.js': 'lit/decorators',
      'lit/directive.js': 'lit/directive',
    }
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'lit/decorators.js': 'lit/decorators',
      'lit/directive.js': 'lit/directive',
      'lit': require.resolve('lit'),
    };
    return config;
  },
};

export default nextConfig;
