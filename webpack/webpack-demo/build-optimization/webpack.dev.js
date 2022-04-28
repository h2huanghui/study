const path = require('path');
const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { srcPath, distPath } = require('./paths');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
//第一，引入 DllReferencePlugin
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');

module.exports = merge(webpackCommonConf, {
  mode: 'development',
  resolve: {
    //针对npm中的第三方模块 优先采用jsnext:main 中指向的 ES6 模块化语法的文件
    mainFields: ['jsnext:main', 'browser', 'main'],
  },
  entry: {
    index: path.join(srcPath, 'index2.js'),
    // index: [
    //   'webpack-dev-server/client?http://localhost:8081/',
    //   'webpack/hot/dev-server',
    //   path.join(srcPath, 'index.js'),
    // ],
    other: path.join(srcPath, 'other.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory'], //开启缓存
        include: srcPath,
        //排除范围
        exclude: /node_modules/, //第二，不要再转换node_modules
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
    //第三，告诉webpack使用了哪些动态链接库
    new DllReferencePlugin({
      //描述 React动态链接库的文件内容
      manifest: require(path.join(distPath, 'react.manifest.json')),
    }),
    //开启Scope Hosting
    new ModuleConcatenationPlugin(),
  ],
  devServer: {
    port: 8081,
    static: distPath, //根目录
    open: true, //自动打开浏览器
    compress: true, //启动gzip压缩
    hot: true,
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
