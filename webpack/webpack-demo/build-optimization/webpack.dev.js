const path = require('path');
const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { srcPath, distPath } = require('./paths');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  entry: {
    // index: path.join(srcPath, 'index.js'),
    index: [
      'webpack-dev-server/client?http://localhost:8081/',
      'webpack/hot/dev-server',
      path.join(srcPath, 'index.js'),
    ],
    other: path.join(srcPath, 'other.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'], //开启缓存
        include: srcPath,
        //排除范围
        exclude: /node_modules/,
      },
      //直接引入图片url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        //loader执行的顺序是从后往前
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        //增加less-loader,注意顺序
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      //window.ENV = 'development'
      ENV: JSON.stringify('development'),
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 8081,
    static: distPath, //根目录
    open: true, //自动打开浏览器
    compress: true, //启动gzip压缩
    host: true,
    //设置代理
    proxy: {
      //将本地 /api/xxx 代理到localhost:3000/api/xx
      '/api': 'http://localhost:3000',

      //将本地 /api2/xxx 代理到localhost:3000/api/xx
      '/api2': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api2': '',
        },
      },
    },
  },
});
