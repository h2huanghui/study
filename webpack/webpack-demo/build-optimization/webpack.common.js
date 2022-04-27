const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { srcPath, distPath } = require('./paths');

module.exports = {
  entry: {
    index: path.join(srcPath, 'index.js'),
    other: path.join(srcPath, 'other.js'),
  },
  module: {
    rules: [
      //babel-loader
      //css处理 dev和prod区分
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(srcPath, 'index.html'),
    //   filename: 'index.html',
    // }),
    //多入口 - 生成index.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index2.html'),
      filename: 'index.html',
      //chunks 表示该页面要引用哪些 chunk
      chunks: ['index', 'vendor', 'common'], //只引用index.js (不写chunks,默认两个entry都引入)
    }),

    //多入口 - 生成other.html
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'other.html'),
      filename: 'other.html',
      //chunks 表示该页面要引用哪些 chunk
      chunks: ['other', 'common'], //只引用other.js
    }),
  ],
};
