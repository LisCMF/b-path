// don't forget to require path
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',// file to be render
  devServer: {
    static: {
      directory: path.join(__dirname), // root directory main path
    },
    compress: true,
    port: 8080,
    proxy: { '/api/leaders': 'http://localhost:3000/' },
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV, // for any run mode built dev
  // plugins: [new htmlWebpackPlugin(
  //   { template: './index.html'})],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
