const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')

// console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

const config = {
  entry: './src/index.ts', // 打包入口地址
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.join(__dirname, 'dist'), // 输出文件目录
    clean: true,
  },
  target: 'web',
  module: { 
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, //匹配所有的 css 文件
        use: ['style-loader', 'css-loader'] // use: 对应的 Loader 名称
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true,
    compress: true  
  },
  plugins:[ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = (env, argv) => {
  console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置
  return config;
}
