const withBuilderDevTools = require("@builder.io/dev-tools/next")();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  images: {
    domains: ["cdn.builder.io", "cdn.pixabay.com"],
  },

  webpack: (config) => {
    config.externals = (config.externals || []).concat("vm2");
    config.experiments = { ...config.experiments, topLevelAwait: true };

    return config;
  },
});

module.exports = nextConfig;
