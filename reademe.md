## 使用ts写一个贪吃蛇小游戏
### 安装：
`npm install -g typescript`

查看版本号：

`$ tsc -v`
`Version 3.2.2`

然后我们新建一个 app.ts 的文件，代码如下：

`var message:string = "Hello World" `

`console.log(message)`

通常我们使用 .ts 作为 TypeScript 代码文件的扩展名。

然后执行以下命令将 TypeScript 转换为 JavaScript 代码：

`tsc app.ts`

### 配置相关
tsconfig.json 是ts的配置文件，但是配置项很多记不住怎么办，可以命令行执行： `tsc --init `
,就会自动生成这个文件，并且带有注解，不过都是英文的。
### webpack
但通常不会只使用ts,而是会和webpack一起使用，使用webpack进行编译打包
#### npm init -y 
初始化，生成package.json ,用npm 管理项目用到的包

安装一些核心的包

`npm i -D webpack webpack-cli typescript ts-loader`

这个插件可自动生成html 文件并且引入 ts 编译打包后的js，还可以指定模板html文件
`npm i -D html-webpack-plugin`
这个包是webpack 的一个开发服务器，这个服务器和webpack有关联，他可以根据项目的改变自动去重新编译刷新页面。
`npm i -D webpack-dev-server`
这个服务器安装之后在package.json中配置一个命令来启动个服务器：`start: webpack serve --open chrome.exe`

webpack 中文文档
https://webpack.docschina.org/configuration/mode/

这个命令可以 每次打包时候清除 dist 目录，即上一次的打包文件
`npm i -D clean-webpack-plugin`

插件的使用：第一步 引入，第二步 new

使用less
`npm i -D less less-loader css-loader style-loader`

webpack 将css变为js代码，为了兼容老版本浏览器，需要加一些前缀，可以使用postcss 加载器

`npm i -D postcss postcss-loader postcss-preset-env`