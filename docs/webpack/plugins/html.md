当你在浏览器中访问 ```http:localhost:8080``` 地址时，展示的是项目的路径，而不是 ```HTML``` 页面

此时需要我们通过配置 **```html-webpack-plugin```** 来生成预览页面

**<font color="#d63200">html-webpack-plugin</font>** 会在打包结束后，⾃动⽣成⼀个 ```html``` ⽂件，并把打包⽣成的 ```js``` 模块引⼊到该 ```html``` 中

### 安装

在终端中运行如下命令，安装生成预览页面的插件

```Shell
npm install html-webpack-plugin -D
```

### 修改

修改 webpack.config.js  文件,如下配置：

```js
// 导入生成预览页面的插件，得到一个构造函数
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```

执行之后将会产生一个包含以下内容的文件 ```dist/index.html```：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>webpack App</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

#### 配置

可以通过修改 *<font color="#d63200">webpack.config.js</font>* 来自定义配置,如下：

|  name   | Type  |  默认值   | 描述  |
|  ----  | ----  |  ----  | ----  |
| ```title```  | ```{String}``` | ```Webpack App``` | 用来生成页面的 title 元素 |
| ```filename```  | ```{String}``` | ```index.html``` | 指定生成的文件的名称,可以直接配置带有子目录的名称 |
| ```inject```  | ```{Boolean|String}``` | ```true``` | ```true || 'head' || 'body' || false```,注入所有的资源到特定的 template 或 templateContent 中，如果设置为 true 或 body，所有的 JavaScript 资源将被放置到body 元素的底部，head 将放置到 head 元素中 |
| ```favicon```  | ```{String}``` | ```‘’``` | 添加特定的 favicon 路径到输出的 HTML 文件中 |
| ```hash```  | ```{Boolean}``` | ```false``` | 如果为 true 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和css 文件，对于解除 cache 很有用 |
| ```cache```  | ```{String}``` | ```true``` | 仅当文件被更改时才发出该文件 |
| ```showErrors```  | ```{Boolean}``` | ```true``` | 错误详细信息将写入HTML页面 |
| ```chunks```  | ```{?}``` | ```?``` | 只允许添加一些块 |
| ```chunksSortMode```  | ```{String|Function}``` | ```auto``` | 允许控制块在包含到HTML之前应如何排序，支持的值 ```'none' | 'auto' | 'manual' | {Function}``` |
| ```excludeChunks```  | ```{Array.<string>}``` | ```''``` | 允许跳过一些块 |

下面是一些例子：

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({  //创建插件的实例对象
    title: '测试自定义标题',
    template: './template.html',    // 指定要用到的模版文件
    filename: 'app.html'    //指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})

var webpackConfig = {
    plugins: [ htmlPlugin ]
};
```

```html
<!-- template.html -->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>App</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

想要 ```title``` 生效还需要修改 模版文件中的 ```title``` 标签内容，如下：

```html
<!-- template.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
      <div id="app"></div>
  </body>
</html>
```

执行之后将会产生一个包含以下内容的文件夹 ：

```html
<!-- dist/app.html -->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>测试自定义标题</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```
