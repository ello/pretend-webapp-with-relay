const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {
  context: __dirname + '/js',
  entry: {
    vendor: [
      'babel-polyfill',
      'jquery',
    ],
    app: [
      path.resolve(__dirname, 'js', 'app.jsx'),
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      libs: path.join(process.cwd(), 'js', 'libs'),
      bundles: path.join(process.cwd(), 'js', 'bundles'),
      components: path.join(process.cwd(), 'js', 'components'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-bundle.js',
      minChunks: Infinity,
    }),
  ],
  module: {
    loaders: [
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
      { test: /\.(jpe?g|png|gif|svg|ico)$/, loader: 'url?limit=10000' },

      { test: require.resolve('jquery'), loader: 'expose?jQuery' },
      { test: require.resolve('jquery'), loader: 'expose?$' },

      // Use one of these to serve jQuery for Bootstrap scripts:

      // Bootstrap 3
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },

      // Bootstrap 4
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
    ],
  },
  sassLoader: {
    includePaths: [path.join(process.cwd(), 'js', 'styles')],
  },
  postcss: [autoprefixer],
  sassResources: ['./styles/app-variables.scss'],
};
