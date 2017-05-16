var webpack = require('webpack');
new webpack.optimize.CommonsChunkPlugin('common.js'),
new webpack.optimize.DedupePlugin(),
new webpack.optimize.UglifyJsPlugin(),
new webpack.optimize.AggressiveMergingPlugin()

module.exports = {
  context: __dirname,
  entry: {
    jsx: "./source/index.jsx"
  },

  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ["react-hot","babel-loader?stage=0&optional=runtime"]},
      { test: /\.(jpg|jpeg|gif|png)$/, exclude: /node_modules/, loader:'url-loader?limit=1024&name=images/[name].[ext]'},
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};