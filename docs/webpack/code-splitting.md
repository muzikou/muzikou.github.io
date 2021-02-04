在日常的开发中，如果当前页面业务逻辑代码体积就不小，在引入第三方的工具库，这样就会导致如下问题：

+ 体积大，加载时间长 业务逻辑会变化，
+ 第三方工具库不会，所以业务逻辑一变更，第三方工具库也要跟着变。

所以此时最好的解决办法就是 **代码分离**

**代码分离** 是 ```webpack``` 中最引人注目的特性之一。此特性能够把代码分离到不同的 ```bundle``` 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 ```bundle```，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

有三种常用的代码分离方法：

+ 入口起点：使用 ```entry``` 配置手动地分离代码。
+ 防止重复：使用 ```CommonsChunkPlugin``` 去重和分离 chunk。
+ 动态导入：通过模块的内联函数调用来分离代码。

### 入口起点(entry points)

这是迄今为止最简单、最直观的分离代码的方式。不过，这种方式手动配置较多，并有一些陷阱。先来看看如何从 ```main bundle``` 中分离另一个模块：

<strong>project</strong>

```diff
|- package.json
|- webpack.config.js
|- /dist
|- /src
  |- index.js
+ |- another-module.js
|- /node_modules
```

<strong>another-module.js</strong>

```js
// 引入之前记得安装，npm install lodash -D
import _ from 'lodash';

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);
```

<strong>webpack.config.js</strong>

```js
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

正如前面提到的，这种方法存在一些问题:

+ 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
+ 这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。

以上两点中，第一点对我们的示例来说无疑是个问题，因为之前我们在 ```./src/index.js``` 中也引入过 lodash，这样就在两个 bundle 中造成重复引用。接着，我们通过使用 ```CommonsChunkPlugin``` 来移除重复的模块。

### 防止重复(prevent duplication)

<strong>```CommonsChunkPlugin```</strong> 插件可以将公共的依赖模块提取到已有的入口 ```chunk``` 中，或者提取到一个新生成的 ```chunk```。  
使用这个插件，将之前的示例中重复的 ```lodash``` 模块去除：

<strong>webpack.config.js</strong>

```js{2,13-17}
const path = require('path');
+ const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Code Splitting'
-       })
+       }),
+       new webpack.optimize.CommonsChunkPlugin({
+           name: 'common' // 指定公共 bundle 的名称。
+       })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

### split-chunks-plugin

**```webpack```** 中提供了一种更加方便的方法供我们实现代码分割, 基于 [split-chunks-plugin](https://webpack.js.org/plugins/split-chunks-plugin/)  
配置如下：

<strong>webpack.config.js</strong>

```js
optimization:{
    //帮我们自动做代码分割
    splitChunks:    {
        chunks:"all", //默认是支持异步，我们使用all
    }
}
```

可配置项及其默认值如下 ：

```js
optimization: {
    splitChunks: {
        chunks: 'async', // all 是指对同步，异步，所有的模块有效，默认值 async
        minSize: 30000, //当模块大于30kb
        maxSize: 0, //对模块进行二次分割时使用，不推荐使用
        minChunks: 1, //打包生成的chunk文件最少有几个chunk引用了这个模块
        maxAsyncRequests: 5, //模块请求5次
        maxInitialRequests: 3, //入口文件同步请求3次
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10 //优先级 数字越大，优先级越高
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    }
}
```
