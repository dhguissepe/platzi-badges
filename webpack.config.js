const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src', 'index.js'),
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCSSExtractPlugin.loader},
          {loader: 'css-loader'},
          {loader: 'resolve-url-loader'},
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          },
        ]
      },
      {
        test: /\.jpg|jpeg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            outputPath: 'assets/',
            name: '[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
      }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    }),
    new MiniCSSExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: '/js/'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.**"]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PORT': JSON.stringify(process.env.PORT)
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize : true,
      compress : {
          warnings : false
      }
    })
  ]
}