const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { srcPath, distPath } = require('./paths');

module.exports = merge(webpackCommonConf, {
  mode: 'production',
  output: {
    // filename: "bundle.[contenthash:8].js", //打包代码时，加上contenthash
    filename: '[name].[contenthash:8].js', //name 即多入口时 entry
    path: distPath,
  },
  module: {
    rules: [
      //图片 - 考虑base64 编码的情况
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //小于5kb的图片用base64格式产出
              //否则依然沿用file-loader的形式
              limit: 5 * 1024,
              //打包到img目录下
              outputPath: '/img1/',
              //设置图片的cdn地址
              // publicPath: 'http://cdn.abc.com',
            },
          },
        ],
      },
      //抽离css
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      //抽离less-->css
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 会默认清空output.path文件夹
    new webpack.DefinePlugin({
      //window.ENV = 'production'
      ENV: JSON.stringify('production'),
    }),
    //抽离css文件
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css',
    }),
  ],
  optimization: {
    //压缩css
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
});
