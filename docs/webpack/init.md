## 1. 安装包
在终端中运行如下命令，安装 *<font color="#d63200">webpack</font>* 相关的包
```shell
npm install webpack webpack-cli -D
```
## 2. 创建配置文件 
在项目的根目录中，创建 *<font color="#d63200">webpack.config.js</font>* 的 *<font color="#d63200">webpack</font>* 配置文件,并且初始化如下配置：
```js
module.exports = { 
    mode: 'development' //mode用来指定构建模块
}
```
## 3. 新增脚本
在 *<font color="#d63200">package.json</font>* 配置文件中的 *<font color="#d63200">package.json</font>scripts 节点下，新增 *<font color="#d63200">package.json</font>dev 脚本(原有脚本保留):
```js
'scripts': {
    'dev': 'webpack' // script 节点下的脚本，可以通过 npm run 执行
}
```
## 4. 项目打包
在终端中运行如下命令，启动 *<font color="#d63200">webpack</font>* 进行项目打包
```shell
npm run dev 
```
打包完成之后，会自动创建一个 *<font color="#d63200">dist</font>* 文件夹，里面包含 一个 *<font color="#d63200">main.jsn</font>* ,此时再回到 *<font color="#d63200">src -> index.html</font> *中，重新引入 打包之后的 js文件，代码如下图：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 传统模式是如下引入，但是我们要用模块化思维 -->
    <!-- <script src="./index.js"></script> -->
    <script src="../dist/main.js"></script>
</head>
<body>
    <ul>
        <li>这是第 1 个li</li>
        <li>这是第 2 个li</li>
        <li>这是第 3 个li</li>
        <li>这是第 4 个li</li>
        <li>这是第 5 个li</li>
        <li>这是第 6 个li</li>
        <li>这是第 7 个li</li>
        <li>这是第 8 个li</li>
        <li>这是第 9 个li</li>
    </ul>
</body>
</html>
```
此时再运行 *<font color="#d63200">index.html </font>* 文件就不会报错，运行结果如下图：
![index.html](/img/webpack/1.jpg) 
