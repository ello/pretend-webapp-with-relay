/* eslint-disable no-console, func-names */
const bodyParser = require('body-parser');
const webpack = require('webpack');
const express = require('express');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.client.express.config');
const path = require('path');

const GRAPHQL_PORT = 3500;

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  contentBase: '/public/',
  publicPath: '/js/',
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/graphql': `http://localhost:${GRAPHQL_PORT}`,
    '/knock/*': `http://localhost:${GRAPHQL_PORT}`
  },
  stats: {
    colors: true,
    hash: false,
    version: false,
    chunks: false,
    children: false,
  },
});

server.app.use(bodyParser.json(null));
server.app.use(bodyParser.urlencoded({ extended: true }));

server.app.use(require('webpack-hot-middleware')(compiler));
server.app.use('/', express.static(path.resolve(__dirname, 'public')));
server.listen(4000, 'localhost', function (err) {
  if (err) console.log(err);
  console.log('Listening at localhost:4000...');
});
