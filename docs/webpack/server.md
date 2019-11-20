因为首页 *<font color="#d63200">src -> index.html</font>* 中引入的是打包好的 *<font color="#d63200">bundle.js</font>* ，所以每次 *<font color="#d63200">js</font>* 更改之后还需要手动打包，页面才会更新，比较繁琐，因此需要配置自动打包的功能 
## 1. 安装包
在终端中运行如下命令，安装支持项目自动打包的工具
```shell
npm install webpack-dev-server -D 
```
## 2. 修改 
修改 *<font color="#d63200">package.json -> scripts</font>* 中的 *<font color="#d63200">dev</font>* 命令,如下配置：
```js
"scripts": {
    "dev": "webpack-dev-server" // script 节点下的脚本，可以通过 npm run 执行
  },
```
## 3. 修改引用路径
将 *<font color="#d63200">src -> index.html</font>* 中，*<font color="#d63200">scripts</font>* 脚本的引用路径 ，修改为根目录下的 *<font color="#d63200">buldle.js</font>*
```html
<script src="/bundle.js"></script>
```
## 4. 打包
运行 如下命令，重新运行打包
```shell
npm run dev 
```
## 5. 访问
在浏览器中 访问 *<font color="#d63200">http:localhost:8080</font>* 地址，查看自动打包的效果  

**<font color="#d63200">注意：</font>**
+ *<font color="#d63200">webpack-dev-server</font>* 会启动一个实时打包的 *<font color="#d63200">http</font>* 服务器    
+ *<font color="#d63200">webpack-dev-server</font>* 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的，看不到的