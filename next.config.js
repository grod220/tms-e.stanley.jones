module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.module.rules.push({
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
    });

    return config;
  },
};
