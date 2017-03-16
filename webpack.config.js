const path = require('path'),
      webpack = require('webpack'),
      isProd = (process.env.NODE_ENV === 'production'),
      HtmlWebpackPlugin = require('html-webpack-plugin');
      HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
        template: './client/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
            sequences     : true,
            booleans      : true,
            loops         : true,
            unused      : true,
            warnings    : false,
            drop_console: true,
            unsafe      : true
        }
      })

const getPlugins = () => {
  const plugins = [];
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': process.env.NODE_ENV
    }
  }));
  
  plugins.push(HtmlWebpackPluginConfig);

  if (isProd) {
    plugins.push(UglifyJsPlugin);
  }

  return plugins;
}

module.exports = {
  devtool: 'eval',
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: getPlugins()
}