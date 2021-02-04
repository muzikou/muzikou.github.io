### 试用 ant-design 组件库

1. 安装

```shell
npm install antd --save
```

2. 使用
在需要使用的组件中导入 **```ant```** 组件和 **```css```**，即可以使用：

```js
import Button from 'antd/lib/button'
import 'antd/dist/antd.css'
```

### 按需加载

上面虽然实现了组件库的导入，但是这种方法把整个组件库的样式都导入进来了，文件过大，很累赘，实际项目开发中，我们更多的是希望 **<font color="#d63200">按需加载</font>**，只导入我们需要的组件及其样式，下面我们来实现按需加载：

1. 安装 **```react-app-rewired```** 取代 **```react-scripts```**，可以扩展 **```webpack```** 的配置 ，类似 **```vue.config.js```**，命令如下：

```shell
npm install react-app-rewired@2.0.2-next.0 babel-plugin-import --save
```

2. 在根目录下创建配置文件 ```config-overrides.js```，代码配置如下：

```js
// config-overrides.js
const { injectBabelPlugin } = require("react-app-rewired");
module.exports = function override(config,env) {
    config = injectBabelPlugin(
        // 在默认的配置基础上注入
        // 插件名，插件配置
        [ "import",{ libraryName: "antd",libraryDirectory: "es",style: "css"}],
        config
    );
    return config;
}
```

3. 更改 ```package.json```,把 ```react-script``` 改成 ```react-app-rewired```:

```js
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },
```

4. 然后组件库的导入方式也要有所更改，如下：

```js
import { Button } from 'antd'
```

最后要记得重新启动项目哦，因为我们改了脚本，所以一定要重新启动项目才能看到效果。
