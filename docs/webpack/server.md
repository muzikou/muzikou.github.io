因为首页 *<font color="#d63200">src -> index.html</font>* 中引入的是打包好的 *<font color="#d63200">bundle.js</font>* ，所以每次 *<font color="#d63200">js</font>* 更改之后还需要手动打包，页面才会更新，比较繁琐，因此需要配置自动打包的功能 
## 1. 安装包
在终端中运行如下命令，安装支持项目自动打包的工具
```Shell
npm install webpack-dev-server -D 
```
## 2. 修改 
修改 *<font color="#d63200">package.json</font>* 文件中 *<font color="#d63200">scripts</font>* 对象的 *<font color="#d63200">dev</font>* 命令,如下配置：
```js
// package.json 中的配置
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
复制终端中的*<font color="#d63200">http:localhost:8080</font>* 地址，然后在在浏览器中访问就可看到打包之后的项目。

> **<font color="#d63200">注意：</font>**
>> *<font color="#d63200">webpack-dev-server</font>* 会启动一个实时打包的 *<font color="#d63200">http</font>* 服务器    
>> *<font color="#d63200">webpack-dev-server</font>* 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的，看不到的    

## 6. 配置自动打开浏览器 
此时项目的运行需要我们在浏览器手动输入地址才可以访问，那我要想项目启动之后自动弹开浏览器要怎么配置呢？   
需要我们修改 *<font color="#d63200">package.json</font>* 文件中 *<font color="#d63200">scripts</font>* 对象的 *<font color="#d63200">dev</font>* 的相关参数，具体修改如下：
```js
// package.json 中的配置
// --open 打包完成后自动打开浏览器页面  --host 配置 IP地址  --port 配置端口
"scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.0 --port 8888"
}
```        
修改之后重新运行 *<font color="#d63200">npm run dev</font>* 命令进行打包会发现项目自动弹出浏览器，说明我们已经配置成功了～

但是此时我们会发现项目虽然正常运行，没有报错，但却不是我们想要的页面。   
那要怎样才可以直接预览到我们想要的页面呢？ 请看下一篇文章 [配置预览页面](/webpack/preview.md)