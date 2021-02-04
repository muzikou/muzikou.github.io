## 通过 loader 打包非 js 模块

*<font color="#d63200">webpack</font>* 是模块打包⼯具，⽽模块不仅仅是 ```js```，还可以是css，图⽚或者其他格式。  

但是 *<font color="#d63200">webpack</font>*  默认只知道如何处理 ```js``` 模块，那么其他格式的模块 *<font color="#d63200">webpack</font>* 默认处理不了， 需要调用 *<font color="#d63200">loader</font>* 加载器才可以正常打包，否则会报错！

## 1. loader 是什么

**<font color="#d63200">loader</font>** 加载器可以协助 *<font color="#d63200">webpack</font>* 打包处理待定的文件模块，比如：

+ *<font color="#d63200">less-loader</font>* 可以打包处理 *<font color="#d63200">.less</font>* 相关的文件
+ *<font color="#d63200">sass-loader</font>* 可以打包处理 *<font color="#d63200">.scss</font>* 相关文件
+ *<font color="#d63200">url-loader</font>* 可以打包处理 *<font color="#d63200">css</font>* 中与 *<font color="#d63200">url</font>* 路径相关的文件

## 2. loader 的调用过程

![loader](/img/webpack/loader.jpg)
