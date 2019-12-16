假如你在项目的 *<font color="#d63200">JS</font>* 文件中输入如下代码，然后运行项目，
```js
class Person {
    static info = 'aaa'
}
console.log(Person.info)
```
此时你会发现浏览器报错，错误提示 *<font color="#d63200">webapack</font>* 默认打包处理不了这种高级的 *<font color="#d63200">JS</font>* 语法 ，那要如何解决呢？    
我们需要配置 *<font color="#d63200">babel</font>* 相关的 *<font color="#d63200">loader</font>* ，来解析并转换这些高级的 *<font color="#d63200">JS</font>* 语法，具体操作如下：
1. 在终端中依次运行如下命令，安装 *<font color="#d63200">babel</font>* 转换器和 *<font color="#d63200">babel</font>* 语法插件相应的包
```Shell
npm install babel-loader @babel/core @babel/runtime -D
npm install @babel/preset-env @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties -D
```
2. 在根目录创建 *<font color="#d63200">babel</font>* 的配置文件，命名为 *<font color="#d63200">babel.config.js</font>* ，配置内容如下：
```js
module.exports = {
    presets: [ '@babel/preset-env' ] ,
    plugin: [ '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties' ]
}
``` 
3. 打开 *<font color="#d63200">webpack.config.js</font>* 文件，找到 *<font color="#d63200">module -> rules</font>* 数组，修改 *<font color="#d63200">css</font>* 的 *<font color="#d63200">loader</font>* 规则，修改内容如下：
```js
// exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的 js 文件
module: {
    rules: [
        { test: /\.js$/ ,use:'babel',exclude: /node_modules/
    ]
}
```
