const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');

const src_dir = path.resolve(__dirname, './app');
const dist_dir = path.resolve(__dirname, './dist');
const semantic_dir = path.resolve(src_dir, './styles/semantic/dist/');
const image_dir = path.resolve(src_dir, './images/');
const dist_image_dir = path.resolve(dist_dir, './images/');
const vendor_dir = path.resolve(dist_dir, './vendor/');

const config = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "huoshui.js",
    path: dist_dir
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 8080
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: src_dir,
        use: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        include: src_dir,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use: {
            loader: 'css-loader',
            options: { modules: false }
          }
        })
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        {from: semantic_dir, to: vendor_dir, force: true},
        {from: image_dir, to: dist_image_dir, force: true}
    ]),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

module.exports = config;
