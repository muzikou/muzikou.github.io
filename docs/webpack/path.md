## 1. 默认约定
*<font color="#d63200">webpack</font>* 的 *<font color="#d63200">4.x </font>* 版本中默认约定
1. 打包的 入口文件为 *<font color="#d63200">src -> index.js</font>*
2. 打包的 输出文件为 *<font color="#d63200">dist -> main.js</font>*
## 2. 修改 
修改打包的入口与出口，可以在 *<font color="#d63200">webpack.config.js</font>* 中新增加如下配置信息
```js
const path = require('path') // 导入 node.js 中专门操作路径的模块 path
module.exports = {
entry: path.join(_dirname,'./src/index.js'),//打包入口文件的路径
output: { 
        path: path.join(__dirname,'./dist'), // 输出文件的存放路径
        filename: 'bundle.js' //输出文件的名称
    }
}
```
## 3. 项目打包
在终端中运行如下命令，测试 打包 入口与出口是否更改
```shell
npm run dev 
```
打包完成之后，会个 *<font color="#d63200">dist</font>* 文件夹里面 会自动生成 *<font color="#d63200">bundle.js</font>* ,然后 再回到 *<font color="#d63200">src -> index.html</font>* 中，重新引入 打包之后的 *<font color="#d63200">bundle.js</font>* 文件，运行 *<font color="#d63200">index.html</font>*，依然可以照常运行。

