const path = require('path');
const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { srcPath, distPath } = require('./paths');

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  module: {
    rules: [
      //直接引入图片url
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      //window.ENV = 'development'
      ENV: JSON.stringify('development'),
    }),
  ],
  devServer: {
    port: 8081,
    static: distPath, //根目录
    open: true, //自动打开浏览器
    compress: true, //启动gzip压缩
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
