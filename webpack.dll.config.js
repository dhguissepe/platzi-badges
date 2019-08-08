const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-router-dom',
    ]
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[hash].dll.js', //al colocarle hash el elemento cambia totalmente. Al llegar al navegador dicho elemento es totalmente actualizado y reemplaza al anterior en el caché del cliente. Y .dll para denotar que es un dll
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/modules.**"]
    })
  ]
}