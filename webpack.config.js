const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const srcDir = path.resolve(__dirname, './app')
const distDir = path.resolve(__dirname, './dist')
const semanticDir = path.resolve(srcDir, './styles/semantic/dist/')
const semanticTheme = path.resolve(semanticDir, './themes')
const semanticCSS = path.resolve(semanticDir, './semantic.min.css')
const imageDir = path.resolve(srcDir, './images/')
const distImgDir = path.resolve(distDir, './images/')
const vendorDir = path.resolve(distDir, './vendor/')

const config = {
  entry: [
    './app/index.jsx',
  ],
  output: {
    filename: 'huoshui.js',
    path: distDir,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 8080,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcDir,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          options: { emitWarning: true },
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: srcDir,
        use: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        include: srcDir,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: { modules: true },
          },
          {
            loader: 'sass-loader',
          }],
          fallback: {
            loader: 'style-loader',
          },
        }),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        { from: semanticTheme, to: vendorDir, force: true },
        { from: semanticCSS, to: vendorDir, force: true },
        { from: imageDir, to: distImgDir, force: true },
    ]),
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
}

module.exports = config
