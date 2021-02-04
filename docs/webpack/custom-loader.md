### 如何⾃⼰编写⼀个Loader

⾃⼰编写⼀个 **```Loader```** 的过程是⽐较简单的，

**```Loader```** 就是⼀个函数，声明式函数，不能⽤箭头函数

拿到源代码，作进⼀步的修饰处理，再返回处理后的源码就可以了

### 简单案例

+ 创建⼀个替换源码中字符串的 ```loader```

```js
//index.js
console.log('hello webpack')

//customLoader.js
module.exports = function(source) {
    // source 源文件的 内容
    console.log(source, this, this.query);
    return source.replace('webpack', 'customLoader replace')
};
// 需要⽤声明式函数，因为要⽤到上下⽂ this 的数据
// 该函数接受⼀个参数，是源码
```

+ 在配置⽂件 <strong>webpack.config.js</strong> 中使⽤ ```loader```

```js
//需要使⽤node核⼼模块path来处理路径
const path = require('path')
module: {
    rules: [
        {
            test: /\.js$/,
            use: path.resolve(__dirname, "./loader/customLoader.js")
        }
    ]
 },
```

+ 如果想要配置参数，如何给设置，又如何接受参数呢?  

<strong>webpack.config.js</strong> 设置参数

```js
module: {
    rules: [
        {
            test: /\.js$/,
            use: [
                {
                    loader: path.resolve(__dirname, "./loader/customLoader.js"),
                    options: {
                        desc: "自定义loader 配置参数"
                    }
                }
            ]
        }
    ]
 },
```

接受参数可以通过如下方式：

```js
// customLoader.js
module.exports = function(source) {
    // 通过 this.query 来接受配置⽂件传递进来的参数
    const { query } = this
    return source.replace("webpack", query.desc);
}
```

也可以使用官⽅推荐的工具 ```loader-utils``` 来处理，如下：

```js
// 记得安装：npm i loader-utils -D

// replaceLoader.js
const loaderUtils = require("loader-utils");
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const result = source.replace("webpack", options.desc);
    return source.replace("webpack", result);
}
```

函数中的 ```this``` 中有什么属性，具体可参考 [loaders API](https://www.webpackjs.com/api/loaders/)  
下面我们来看几个例子：

+ <strong>this.callback</strong>  
返回多个信息，不⽌是处理好的源码

```js
// replaceLoader.js
const loaderUtils = require("loader-utils");
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    const result = source.replace("webpack", options.desc);
    this.callback(null, result);
}
```

代码中的 ```this.callback``` 可传参数：

```js
this.callback(
    err: Error | null, // 错误信息
    content: string | Buffer, //内容
    sourceMap?: SourceMap,
    meta?: any
);
```

+ <strong>this.async</strong>  
处理 ```loader``` ⾥⾯异步的操作用 ```this.async```，会返回 ```this.callback```

```js
// replaceLoader.js
const loaderUtils = require("loader-utils");
module.exports = function(source) {
    const options = loaderUtils.getOptions(this);
    // 定义⼀个异步处理，告诉webpack,这个loader⾥有异步事件,在⾥⾯调⽤下这个异步
    // callback 就是 this.callback
    const callback = this.async();
    setTimeout(() => {
        const result = source.replace("webpack", options.desc);
        callback(null, result);
    }, 3000);
}
```

+ **多个 loader 的使⽤**

```js
// replaceLoader.js
module.exports = function(source) {
    return source.replace("webpack", '不异步')
}

// replaceLoaderAsync.js
module.exports = function(source) {
    const loaderUtils = require("loader-utils");
    const options =  loaderUtils.getOptions(this)
    const callback = this.async();
    setTimeout(()=>{
        const res = source.replace("webpack", options.desc)
        callback(null, res)
    },1000)
}

//webpack.config.js
// 配置 resolveLoader，打包时会先去 node_modules 找该文件，找不到的话在查找 loader 文件
resolveLoader: {
    modules: ["node_modules", "./loader"]
},
module: {
    rules: [
        {
            test: /\.js$/,
            use: [
                // loader 执行顺序 ⾃下⽽上，⾃右到左
                {
                    loader: "replaceLoader"
                },
                {
                    loader: "replaceLoaderAsync",
                    options: {
                        name: 'muzi'
                    }
                }
            ]
        }
    ]
},
```
