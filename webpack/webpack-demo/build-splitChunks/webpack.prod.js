const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
      // 图片 - 考虑base64 编码的情况
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于5kb的图片用base64格式产出
              // 否则依然沿用file-loader的形式
              limit: 5 * 1024,
              //打包到img目录下
              outputPath: '/img1/',
              // 设置图片的cdn地址
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
    // 抽离css文件
    new MiniCssExtractPlugin({
      filename: 'css/main.[contenthash:8].css',
    }),
  ],
  optimization: {
    // 压缩css
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],

    //分割代码块
    splitChunks: {
      chunks: 'all',
      /**
       * initial 入口chunk 对于异步导入文件不处理
       * async 异步chunk 只对异步导入文件处理
       * all 全部chunk
       */
      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: 'vendor', // chunk名称
          priority: 1, //权限更高，优先抽离，重要！！！
          test: /node_modules/,
          minSize: 0, //大小限制 太小的文件可以不用打包，这边只是为了看打包结果写成0。实际接口可以定义3KB
          minChunks: 1, //最少复用过几次
        },
        common: {
          name: 'common', // chunk名称
          priority: 0, //优先级
          minSize: 0, //公共模块的大小限制
          minChunks: 2, //公共模块最少复用过几次
        },
      },
    },
  },
});
