当你在浏览器中 访问 *<font color="#d63200">http:localhost:8080</font>* 地址时，会发现并没有出现我们想要的 *<font color="#d63200">html</font>* 页面 ，而是把项目的路径展示出来，我们点击 *<font color="#d63200">src</font>* 文件才能找到想要的页面，所以此时我们需要配置 *<font color="#d63200">html-webpack-plugin</font>* 来生成预览页面 ，具体操作如下所示
## 1. 安装包
在终端中运行如下命令，安装生成预览页面的插件
```Shell
npm install html-webpack-plugin -D
```
## 2. 修改 
修改 *<font color="#d63200">webpack.config.js</font>* 文件头部区域,添加如下配置信息：
```js
// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({//创建插件的实例对象
  template: './src/index.html',// 指定要用到的模版文件
  filename: 'index.html'//指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
```
## 3. 修改外露对象
修改 *<font color="#d63200">webpack.config.js</font>* 文件中向外暴露的配置对象 ，新增如下配置节点：
```js
module.exports = {
  plugins: [ htmlPlugin ] //plugin 数组是 webpack 打 包期间会用到的一些插件列表
}
```
## 4. 打包
此时再 运行 如下命令，重新运行打包
```shell
npm run dev 
```
## 5. 访问
在浏览器中 继续访问 *<font color="#d63200">http:localhost:8080</font>* 地址，既可以看到我们想要的页面。  

> **<font color="#d63200">注意：</font>**
>> *<font color="#d63200">webpack-dev-server</font>* 会启动一个实时打包的 *<font color="#d63200">http</font>* 服务器    
>> *<font color="#d63200">webpack-dev-server</font>* 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的，看不到的

