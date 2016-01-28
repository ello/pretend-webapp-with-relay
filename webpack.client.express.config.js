const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.client.base.config');

const hotPort = process.env.HOT_PORT || 4000;

config.entry.vendor.push('bootstrap-loader');

config.entry.app.push(
  `webpack-dev-server/client?http://localhost:${hotPort}`,
  'webpack/hot/dev-server'
);

config.output = {filename: '[name]-bundle.js', path: '/'}
// config.output = {
//   filename: '[name]-bundle.js',
//   path: __dirname,
// };

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

config.devtool = 'eval-source-map';

config.module.loaders.push(
  {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['react', 'es2015', 'stage-0'],
      plugins: [
        './build/babelRelayPlugin',
        [
          'react-transform',
          {
            transforms: [
              {
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module'],
              },
            ],
          },
        ]
      ],
    },
  },
  {
    test: /\.css$/,
    loaders: [
      'style',
      'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
      'postcss',
    ],
  },
  {
    test: /\.scss$/,
    loaders: [
      'style',
      'css?modules&importLoaders=3&localIdentName=[name]__[local]__[hash:base64:5]',
      'postcss',
      'sass',
      'sass-resources',
    ],
  }
);

module.exports = config;
