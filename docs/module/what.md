## 1.概述

传统开发模式的经常会面临一些问题，如命名冲突、文件依赖等，因此需要 通过模块化 解决上述问题。  

**<font color="#d63200">模块化：</font>** 就是把单独的一个功能封装到一个模块中，模块之间相互隔离，但是可以通过特定接口公开内部成员，也可以依赖别的模块。  
**<font color="#d63200">好处：</font>** 方便了代码的重用，从而提高开发效率、降低维护成本。

## 2.浏览器端模块化规范

**<font color="#d63200">AMD</font>** 典型代表有 [Require.js](https://github.com/requirejs/requirejs)   
**<font color="#d63200">CMD</font>** 典型代表有 [Sea.js](https://github.com/seajs/seajs)   

## 3.服务器端模块化规范

**<font color="#d63200">CommonJS</font>**  

1. 模块分为 单文件 模块 与 包
2. 模块成员导出：*<font color="#d63200">module.exports</font>* 和 *<font color="#d63200">exports   </font>*
3. 模块成员导入：*<font color="#d63200">require('模块标识符')</font>*

## 4.ES6模块化

**前提：** 在 ES6 模块化规范诞生之前，Javascript 社区虽尝试提出 AMD、CMD、和 CommonJS 等模块化规范，但是由于自身存在一定的差异性与局限性，并不是浏览器和服务端通用的模块化标准，例如：

+ *<font color="#d63200">AMD</font>* 和 *<font color="#d63200">CMD</font>* 只适用于浏览器端的 *<font color="#d63200">Javascript</font>* 模块化
+ *<font color="#d63200">CommonJS</font>* 只适用于服务端 *<font color="#d63200">Javascript</font>* 模块化

因此定义了 ES6 模块化规范，是浏览器端和服务端通用的模块化开发规范。

**<font color="#d63200">ES6模块化规范定义：</font>**  

1. 每一个 *<font color="#d63200">JS</font>* 文件都是一个独立的模块  
2. **导入模块成员** 使用 *<font color="#d63200">import</font>* 关键字  
3. **暴露模块成员** 使用 *<font color="#d63200">export</font>* 关键字
