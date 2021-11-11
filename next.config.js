module.exports = {
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }
    onfig.node = {
      fs: 'empty',
    };
    config.module.rules.push({
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    });
    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias['react-dom'];
    }
    return config;
  },
};