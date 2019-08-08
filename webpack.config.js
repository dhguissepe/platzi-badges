const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

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
    publicPath: 'http://localhost:3001/',
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
        test: /\.jpg|jpeg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            outputPath: 'assets/',
            name: '[hash].[ext]' //al agregar el template ext me permite establecer la extensión por defecto de cada archivo procesado
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
    new AddAssetHtmlPlugin({ //este plugin añade algún asset a los html creados por HTMLWebpackPlugin
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'), //se le agrega un patron con * ya que la idea es agregar a todos los archivos dll que existan. Además de que no se conoce el hash que se generará
      outputPath: 'js', //con esta línea de código le decimos donde debe liberar dichos archivos dll
      publicPath: 'http://localhost:3001/js/' //y con esta línea le decimos que lea los elementos siempre desde la carpeta js (en este caso solo para los dll)
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/app.**"]
    })
  ]
}

//NOTA: Para probar esta build de producción usamos json-server y le agregamos el flag --static <distpath>

//VERSIONAMIENTO: Es buena práctica versionar los archivos que se estén utilizando ya que dichos
//archivos al llegar al cliente pasan por un proceso de comparación a través del nombre del mismo
//y debido a ello el navegador no actualiza de manera adecuada los elementos añadidos o modificados.
//Para lograr esto existe una técnica en la que se versionan los archivos con hash y de esa manera
//siempre tu producto se actualizará para los demás.

//Todos los cambios y opciones agregadas al webpack son procesos que tiene que ejecutar
//y cada vez puede durar aún más tiempo

//LIMPIEZA: Para la limpieza de los archivos viejos se utiliza un plugin llamado clean-webpack-plugin

//Optimización para la optimización se usan dos plugins, uno para JS (Terser JS Plugin) y otro
// para CSS (Optimize CSS Assets Plugin), los cuales tienen un mejor algoritmo de compresión.