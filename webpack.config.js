const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './src/index.js',
    secondPage: './src/secondPage.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: 'url-loader?mimetype=application/font-woff' },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        'vendor-react': {
          name: 'vendor-react',
          test: /[\\/]node_modules[\\/]react.*?[\\/]/,
          chunks: 'initial',
          priority: 2
        },
        'vendor-bootstrap': {
          name: 'vendor-bootstrap',
          test: /[\\/]node_modules[\\/](jquery|bootstrap)[\\/]/,
          chunks: 'initial',
          priority: 2
        },
        'vendor-all': {
          name: 'vendor-all',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 1
        },
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new WriteFilePlugin()
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['vendor-bootstrap', 'vendor-all', 'vendor-react', 'index']
    }),
    new HtmlWebpackPlugin({
      filename: 'secondPage.html',
      template: 'src/secondPage.html',
      chunks: ['vendor-all', 'vendor-react', 'secondPage']
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
