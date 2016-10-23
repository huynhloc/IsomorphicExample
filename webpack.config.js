var webpack = require("webpack");
require('dotenv').config();

const path = require('path');
const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const CLIENT_DIST_DIR = path.resolve(__dirname, 'public/assets/js');

const loaders = [
  {
    test: /\.js$/,
    include: CLIENT_DIR,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react', 'stage-0']
    }
  }
];
 
module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: CLIENT_DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  }
}, {
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    posts: 'components/posts.js',
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    alias: {
      components: path.resolve(CLIENT_DIR, 'components')
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      "NODE_ENV","ISOMORPHIC_EXAMPLE_SERVER_PORT"
    ])
  ]
}];