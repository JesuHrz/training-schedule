const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
  const plugins = [ new ExtractTextPlugin('css/style.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    })
  ]

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'js/bundle.js'
    },
    devServer: {
      publicPath: '/dist',
      host: '0.0.0.0',
      port: 9000,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ]
          })
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2']
            }
          }
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '../../assets/images/[name].[ext]'
            }
          }
        },
        {
          test: /\.(woff|eot|ttf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '../../assets/fonts/[name].[ext]'
            }
          }
        }
      ]
    },
    plugins
  }
}
