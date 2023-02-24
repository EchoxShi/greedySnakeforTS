const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// webpack 中的所有配置都应该写在module.exports中
module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",

    //不使用箭头函数
    environment:{
      arrowFunction: false,
      const: false
    }
  },
  resolve: {
    // alias:{
    //   modules: path.resolve(__dirname,'src/modules')
    // },
    extensions: ['.js','.jsx','.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, //规则对谁生效
        use: "ts-loader", // 使用什么
        exclude:/node_modules/ ,//也是个正则，路径里有这个就被排除，即不使用这条规则
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          //在less 转为css 之后进行老版本的兼容，引入postcss
          {
            loader: "postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:"last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
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
