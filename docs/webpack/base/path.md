
### 1. 默认约定

*<font color="#d63200">webpack</font>* 的 *<font color="#d63200">4.x </font>* 版本中默认约定:

1. 打包的 入口文件为 *<font color="#d63200">src -> index.js</font>*
2. 打包的 输出文件为 *<font color="#d63200">dist -> main.js</font>*

### 2. 默认配置文件

默认的配置⽂件是 webpack.config.js，执行下面的命令后，webpack 能找到该文件，并使用执行：

```shell
npx webpack
```

如果不想使用默认的配置文件，可以使用下面的命令实现自定义 webpackconfig.js ⽂件来作为配置⽂件并执⾏：

```shell
npx webpack --config webpackconfig.js
```

### 3. 修改打包文件

修改打包的入口与出口，可以在配置文件 *webpack.config.js* 中新增加如下配置信息

```js
const path = require('path') // 导入 node.js 中专门操作路径的模块 path
module.exports = {
    // 指定打包的 入口文件
    entry: path.join(__dirname,'./src/index.js'),
    // 指定打包后的资源位置
    output: {
        path: path.join(__dirname,'./dist'), // 输出文件的存放路径
        filename: 'index.js' //输出文件的名称
    }
}
```

### 4. 项目打包

在终端中运行如下命令，测试打包入口与出口是否更改

```shell
npm run dev
```

打包完成之后，会在 *<font color="#d63200">dist</font>* 文件夹里面 会自动生成 *<font color="#d63200">index.js</font>* ,

然后再重新引入打包之后的文件，运行 *<font color="#d63200">index.html</font>*，依然可以照常运行。

但是此时我们会发现，每次 *<font color="#d63200">js</font>* 更改之后我们都需要重新手动打包，那要怎么样才能是实现自动打包的功能呢？请看下一篇文章 [配置自动打包](/webpack/server.md)
