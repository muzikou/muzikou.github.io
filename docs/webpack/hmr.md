### Hot Module Replacement (HMR:热模块替换)

**模块热替换**(```Hot Module Replacement 或 HMR```)是 ```webpack``` 提供的最有用的功能之一  
它允许在运行时更新各种模块，而无需进行完全刷新

主要是通过以下几种方式，来显著加快开发速度：

+ 保留在完全重新加载页面期间丢失的应用程序状态。  
+ 只更新变更内容，以节省宝贵的开发时间。  
+ 在源代码中 ```CSS/JS``` 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 ```devtools``` 直接更改样式。  

### 启动

在配置文件中开启 ```HMR``` ，如下：

```js
// webpack.config.js 中的配置
devServer: {
    contentBase: "./dist",
    open: true,
    hot:true, //即便HMR不生效，浏览器也不自动刷新，就开启hotOnly
    hotOnly:true
},
```

### 配置

配置文件头部引入 ```webpack```

```js
// webpack.config.js 中的配置
const webpack = require("webpack");
```

在插件配置处添加：

```js
plugins: [
    new webpack.HotModuleReplacementPlugin()
],
```

```HMR``` 默认对 ```css``` 模块支持较好，对 ```js``` 模块需要额外的处理，通过 ```module.hot.accept``` 来对需要更新模块进行监控,如下案例： 

```js
// a.js
function a() {
  console.log(123)
}
export default a;

// index.js
import a from "./a";
a();

if (module.hot) {
  module.hot.accept("./a", () => {
    a();
  });
}
```
