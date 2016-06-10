const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join('../public'),
    filename: 'bundle.js',
    publicPath: '../public/'
  },
  resolve: {
          // where webpack is going to look for the files to bundle it all together
          modulesDirectories: ['node_modules', 'src'],
          extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loaders: ['babel?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/ },
    ]
  }
}