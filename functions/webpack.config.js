const nodeExternals = require('webpack-node-externals');
const { imageOptimizerLoader } = require('../app/next.config');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    libraryTarget: 'this',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      imageOptimizerLoader,
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: [nodeExternals()],
  mode: 'production',
};
