## 打包处理css文件
1. 在终端中运行如下命令，安装处理 *<font color="#d63200">css</font>* 文件的加载器
```Shell
npm install style-loader css-loader -D
```
2. 打开 *<font color="#d63200">webpack.config.js</font>*，新建一个 *<font color="#d63200">module</font>* 节点并配置，配置内容如下：
```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.css$/ ,use:['style-loader','css-loader']}
    ]
}
//其中 test 表示 匹配文件类型，use 表示对应要调用的 loader
// 其中需要注意：
// use 数组中指定的 loader 顺序是固定的
// 多个 loader 的调用顺序是 从后往前调用的
``` 
## 打包处理less文件
1. 在终端中运行如下命令，安装处理 *<font color="#d63200">less</font>* 文件的加载器
```Shell
npm install less-loader less -D
```
2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：
```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.less$/ ,use:['style-loader','css-loader','less-loader']}
    ]
}
//其中 test 表示 匹配文件类型，use 表示对应要调用的 loader
// 其中需要注意：
// use 数组中指定的 loader 顺序是固定的
// 多个 loader 的调用顺序是 从后往前调用的
```   
## 打包处理scss文件   
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
## 打包处理样式表中的图片和字体文件
1. 在终端中运行如下命令，安装相关的加载器
```Shell
npm install url-loader file-loader -D
```
2. 打开 *<font color="#d63200">webpack.config.js</font>* ，修改  *<font color="#d63200">module -> rules</font>* 数组(原数组内容不动)，新增规则如下：
```js
// 所有第三方文件模块的匹配规则
module: {
    rules: [
        { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/ ,use:'url-loader?limit=16940'
    ]
}
//其中 ？之后是 loader 的参数项，limit用来指定图片的大小，只有小于这个值才会被转换成 base64 图片
```   

