const path = require('path');

module.exports = {
  // mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: "./src/js/1.js", // string | object | array  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）

    filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
  },

  //专门给devServer看的(需要安装webpack-dev-server -D)
  devServer: {
    //以谁作为根目录
    contentBase: './dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
}