### Node 中通过 babel 体验 ES6 模块化
 *<font color="#d63200">Node</font>*  中默认支持  *<font color="#d63200">CommonJS</font>* 这个服务器端模块化规范，但是对 *<font color="#d63200">ES6</font>* 的模块化支持并不是太友好，所以需要通过 *<font color="#d63200">babel</font>* 这个第三方插件在 *<font color="#d63200">Node</font>* 中来体验高级的 *<font color="#d63200">ES6</font>* 特性，

**<font color="#d63200">babel</font>** 相当于一个语法转换工具，可以把高级的、有兼容性的 *<font color="#d63200">Javascript</font>* 代码转换成为低级的、没有兼容性的  *<font color="#d63200">Javascript</font>* 代码

如何在 *<font color="#d63200">Node</font>* 中配置 *<font color="#d63200">babel</font>* ？  
1. 依次安装 *<font color="#d63200">babel</font>* 相关依赖包，如下
```Shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node   
npm install --save @babel/polyfill
```
2. 在项目的根目录下创建一个命名为 *<font color="#d63200">babel.config.js</font>* 的配置文件，其内容如下
```JavaScript
const presets = [
    ["@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
      }],
  ];
  
module.exports = { presets };
```
3. 最后在终端执行如下命令，执行代码   
```Shell
npx babel-node index.js 
```
其中 *<font color="#d63200">npx</font>* 是在 高版本的 *<font color="#d63200">npm</font>* 中就默认提供了，可直接通过 *<font color="#d63200">npx</font>* 来执行某些命令   
*<font color="#d63200">index.js</font>* 是指要运行的文件，如果文件中还没有 *<font color="#d63200">index.js</font>* ，就新建 *<font color="#d63200">index.js</font>*，跟 *<font color="#d63200">babel.config.js</font>* 同级