## 当前 Web 开发所面临的困境

+ 文件依赖关系错综复杂
+ 静态资源请求效率低
+ 模块化支持不友好
+ 浏览器对高级 Javascript 特性兼容性低
+ 等等....

面临这么多困境，怎么去解决呢？当然是 *<font color="#d63200">webpack</font>* 啦～

## 1. webpack 是什么

**```Webpack```** 是一个流行的 前端项目构建工具（打包工具），可以解决当前 *<font color="#d63200">Web</font>* 开发中所面临的困境。  

**```Webpack```** 本质上仍然还是一个模块化打包工具，它通过“万物皆模块”这种设计思想，巧妙地实现了整个前端项目的模块化。在 Webpack 的理念中，前端项目中的任何资源都可以作为一个模块，任何模块都可以经过 Loader 机制的处理，最终再被打包到一起。

**```Webpack```** 本身的架构中有两个很核心的特性，分别是 Loader 机制和插件机制。正是因为它的插件机制形成了非常繁荣的生态，所以造就了它现在“无所不能”的现状，所以让 程序员把工具的重心放到具体的功能实现上，提高了开发效率和项目的可维护性。  

![webpack](/img/webpack/webpack.jpg)

## 2. webpack 的基本使用

### 2.1 创建列表隔行变色项目

1. 新建项目空白目录，并在根目录终端运行如下命令，初始化包管理配置文件 *<font color="#d63200">package.json </font>*

```Shell
npm init -y
```

2. 新建 *<font color="#d63200">src</font>* 源代码目录，并且在 *<font color="#d63200">src</font>* 下面新建 *<font color="#d63200">index.html</font>* 首页，然后初始化 首页基本的结构，代码如下：

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

3. 在终端执行如下命令，安装 *<font color="#d63200">jQuery</font>*

```Shell
npm install jquery -s
```

4. 继续在  *<font color="#d63200">src</font>* 下面创建  *<font color="#d63200">index.js</font>*,并写入代码 如下

```js
// 用 import 导入 jquery
import $ from 'jquery'
$(function(){
    $('li:odd').css('background','blue')
    $('li:even').css('background','lightblue')
})
```

此时运行 *<font color="#d63200">html</font>* 文件，会发现浏览器报错，为什么会报错呢？   
因为 *<font color="#d63200">import</font>* 语法属于 *<font color="#d63200">ES6</font>* 的模块化语法，浏览器对这种语法支持并不友好，浏览器不识别，因此就会报错。   
既然报错那又如何解决呢？请看下一篇文章 [安装和配置](/webpack/init.md)
