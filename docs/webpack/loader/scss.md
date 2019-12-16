当我们在项目 *<font color="#d63200">import</font>* 引入 *<font color="#d63200">scss</font>* 文件时，会发现项目报错，提示我们打包失败，需要安装合适的加载器解决问题  
1. 在终端中运行如下命令，安装处理 *<font color="#d63200">scss</font>* 文件的加载器
```Shell
npm install sass-loader node-sass -D
```
2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：
```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.scss$/ ,use:['style-loader','css-loader','sass-loader']}
    ]
}
//其中 test 表示 匹配文件类型，use 表示对应要调用的 loader
// 其中需要注意：
// use 数组中指定的 loader 顺序是固定的
// 多个 loader 的调用顺序是 从后往前调用的
```   

