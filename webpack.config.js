const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// webpack 中的所有配置都应该写在module.exports中
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/, //规则对谁生效
        use: "ts-loader", // 使用什么
        exclude:/node_modules/ ,//也是个正则，路径里有这个就被排除，即不使用这条规则
      },
    ],
  },
  //配置webpack插件
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html' //以哪个html文件为模板引入js,不配置会用默认的html
    }),
  ]
};
