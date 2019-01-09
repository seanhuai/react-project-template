const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const ExtractCssPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: "main.[chunkhash].js",
    path: path.resolve('dist')
  },
  module: { 
    rules: [
      // JS/JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: [{
          loader: ExtractCssPlugin.loader
        },{
          loader: 'css-loader',
          options: {
            modules: true
          }
        }]
      },
      // IMAGES
      {
        test: /\.(png|jpg|svg|gif)/,
        use:[{
          loader:'file-loader',
          options:{ 
            name: '[hash].[ext]',
            outputPath:'images'
          }
        },{
          loader:'image-webpack-loader',
          options:{
            bypassOnDebug: true
          }
        }]
      }
    ]
  },
  devServer: {
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './assets/index.html',
      filename: './index.html'
    }),
    new ExtractCssPlugin({ filename: "[name].[hash].css" }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new Uglify({
      uglifyOptions: {
        output: {
          comments: /@license/i
        }
      },
      extractComments: true
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 2,
      maxInitialRequests: 2,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        vendors: {
          test: /\/node_modules\//,
          priority: 10
        },
        default: {
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true
        }
      }
    }
  }
};