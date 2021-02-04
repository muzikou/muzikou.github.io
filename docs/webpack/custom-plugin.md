### 如何⾃⼰编写⼀个Plugins

**```Plugin```** 主要在我们打包的某个时刻，帮助我们处理⼀些操作  

在 ```webpack``` 的源码中，⽤ ```plugin``` 的机制还是占有⾮常⼤的场景，可以说 ```plugin``` 是 ```webpack``` 的灵魂

**```Plugin```** 是⼀个类，⾥⾯包含⼀个 ```apply``` 函数，接受⼀个参数 ```compiler```

### 简单案例

+ 创建 ```./plugin/copyright-webpack-plugin.js```

```js
class CopyrightWebpackPlugin {
    constructor() {
    }
    //compiler：webpack实例
    apply(compiler) {
    }
}
module.exports = CopyrightWebpackPlugin;
```

+ 在配置⽂件 <strong>webpack.config.js</strong> 中使⽤ ```loader```

```js
const CopyrightWebpackPlugin = require("./plugin/copyright-webpack-plugin");

plugins: [new CopyrightWebpackPlugin()]
```

+ 如果想要配置参数，如何给设置，又如何接受参数呢?  

<strong>webpack.config.js</strong> 设置参数

```js
plugins: [
    new CopyrightWebpackPlugin({
        type: '自定义 plugin '
    })
]
```

接受参数可以通过如下方式：

```js
// copyright-webpack-plugin.js
class CopyrightWebpackPlugin {
    constructor(options) {
        console.log("我被调用了",  options)
    }
    apply(compiler) {
    }
}
module.exports = CopyrightWebpackPlugin;
```

+ 配置 ```plugin``` 在什么时刻进⾏

```js
class CopyrightWebpackPlugin {
    constructor(options) {
        console.log("我被调用了",  options)
    }
    //compiler：webpack实例,包含配置信息
    apply(compiler) {
        //hooks.emit 定义在某个时刻
        compiler.hooks.emit.tapAsync("CopyrightWebpackPlugin",(compilation, cb) => {
                compilation.assets["copyright.txt"] = {
                    source: function() {
                        return "hello copy";
                    },
                    size: function() {
                        return 20;
                    }
                };
                cb();
            }
        );
        // //同步的写法
        // compiler.hooks.compile.tap("CopyrightWebpackPlugin", compilation => {
        //     console.log("开始了");
        // });
    }
}
module.exports = CopyrightWebpackPlugin;
```
