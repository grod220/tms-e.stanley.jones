const fileLoader = {
  test: /\.(jpg|jpeg|svg|pdf|png)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name]-[sha512:hash:hex:5].[ext]',
        publicPath: '/_next/static/files',
        outputPath: 'static/files',
      },
    },
  ],
};

module.exports = {
  fileLoader,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push(fileLoader);

    // Important: return the modified config
    return config;
  },
};
