每次改完代码都需要重新打包、刷新，很麻烦

我们可以安装使⽤ ```webpackdevserver``` 来改善这块的体验

### 1. 安装包

在终端中运行如下命令，安装支持项目自动打包的工具

```Shell
npm install webpack-dev-server -D
```

### 2. 修改

修改 *<font color="#d63200">package.json</font>* 文件中 *<font color="#d63200">scripts</font>* 对象的 *<font color="#d63200">dev</font>* 命令,如下配置：

```js
// package.json 中的配置
"scripts": {
    "dev": "webpack-dev-server"
  },
```

配置 ```webpack.config.js```

```js
module.exports = {
    devServer: {
        contentBase: "./dist",
        open: true,
        port: 8080
    },
}
```

### 3. 打包

运行如下命令，重新运行打包

```shell
npm run dev
```

<strong>注意：</strong>

+ ```webpack-dev-server``` 会启动一个实时打包的 *<font color="#d63200">http</font>* 服务器  
+ ```webpack-dev-server``` 打包生成的输出文件，默认放到了项目根目录中，而且是虚拟的，看不到的  

### 4. 配置自动打开浏览器

此时项目的运行需要我们在浏览器手动输入地址才可以访问，那我要想项目启动之后自动弹开浏览器要怎么配置呢？  

我们需要修改 *<font color="#d63200">package.json</font>* 文件中 *<font color="#d63200">scripts</font>* 对象的 *<font color="#d63200">dev</font>* 的相关参数，具体修改如下：

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
