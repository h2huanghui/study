const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const { srcPath, distPath } = require('./paths');

module.exports = {
  mode: 'development',
  //JS 执行入口文件
  entry: {
    // 把React相关的模块放到一个单独的动态链接库
    react: ['react', 'react-dom'],
  },
  output: {
    //输出的动态链接库的文件名称, [name]代表当前动态链接库的名称
    //也就是 entry中配置的react
    filename: '[name].dll.js',
    //输出的文件放在dist目录下
    path: distPath,
    //存放动态链接库的全局变量名称，例如对应react是 _dll_react
    library: '_dll_[name]',
  },
  plugins: [
    //插入DllPlugin
    new DllPlugin({
      //动态链接库的全局变量名称，需要和output.library中保持一致
      name: '_dll_[name]',
      //描述动态链接库的manifest.json文件输出时的文件名称
      path: path.join(distPath, '[name].manifest.json'),
    }),
  ],
};
