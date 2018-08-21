const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ENTRY_PATH = path.resolve(__dirname, 'src')
const OUTPUT_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'production',
  entry: [ 'babel-polyfill', path.resolve(ENTRY_PATH, 'index.js') ],
  output: {
    path: OUTPUT_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    port: 3030,
    contentBase: OUTPUT_PATH,
    compress: true,
    open: true
  },
 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'stage-2', 'react' ]
          }
        }
      },
       {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },

      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
        ]
      }
    ]
  }
  
}



