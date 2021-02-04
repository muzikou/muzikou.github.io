开发者可以使用 **<font color="#d63200">云开发</font>** 开发微信小程序、小游戏，无需搭建服务器，即可使用云端能力。

**<font color="#d63200">云开发</font>** 为开发者提供完整的原生云端支持和微信服务支持，弱化后端和运维概念，无需搭建服务器，使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。

**<font color="#d63200">云开发</font>** 提供了几大基础能力支持：

|   能力   |   作用   |   说明   |  
|   ----   |   ---   |   ----   |
|   云函数   |   无需自建服务器   |   在云端运行的代码，微信私有协议天然鉴权，开发者只需编写自身业务逻辑代码   |
|   数据库   |   无需自建数据库 |   一个既可在小程序前端操作，也能在云函数中读写的 JSON 数据库   |
|   存储   |   无需自建存储和 CDN   |   在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理   |
|   云调用   |   原生微信服务集成   |   基于云函数免鉴权使用小程序开放接口的能力，包括服务端调用、获取开放数据等能力   |

## 1. 新建云开发模板

注意使用云开发能力必须填写 **<font color="#d63200">AppID</font>**

![cloud1](/img/wechat/cloud1.png)

## 2. 开通云开发、创建环境

创建了第一个云开发小程序后，在使用云开发能力之前需要先开通云开发。在开发者工具工具栏左侧，点击【云开发】按钮即可打开云控制台、根据提示开通云开发、创建云环境。默认配额下可以创建两个环境，各个环境相互隔离，每个环境都包含独立的数据库实例、存储空间、云函数配置等资源。每个环境都有唯一的环境 **ID** 标识，初始创建的环境自动成为默认环境。  

如果要配置新的环境在 开云开发控制台中新增，如下图：

![cloud2](/img/wechat/cloud2.png)

> 注：**AppID** 首次开通云环境后，需等待大约 10 分钟方可正常使用云 **API**，在此期间官方后台服务正在做准备服务，如尝试在小程序中调用云 **API** 则会报 `cloud init error：{ errMsg: "invalid scope" }` 的错误

## 3. 体验云开发

开发者工具打开该项目，其文件结构如下：

```diff
├── README.md
├── cloudbase
│   └── all
│       └── functions
├── miniprogram
│   ├── app.js
│   ├── app.json
│   ├── app.wxss
│   └── pages
│       └── index
└── project.config.json
```

+ **<font color="#d63200">project.config.json</font>** 文件中增加了字段 **`cloudbaseRoot`** 用于指定存放云项目, 同时新增 **`"cloudfunctionRoot"`**, 如下：

```json
{
    "miniprogramRoot": "miniprogram/",
    "cloudbaseRoot": "cloudbase/",
    "cloudfunctionRoot": "cloudbase/all/functions/",
    ...
}
```

+ **<font color="#d63200">cloudbase/all/functions</font>** 目录中已经存在一些云函数，我们来创建一个自己的云函数  
右键点击  ```cloudbase/all/functions``` 新建 **`test`** 云函数, 如下图：

![cloud4](/img/wechat/cloud4.png)

然后更改 **<font color="#d63200">test/index.js</font>** 文件,内容如下：

```js
// test/index.js
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  // 云函数当前的环境可在 app.js 中配置
  env: cloud.DYNAMIC_CURRENT_ENV,
})
// 云函数入口函数
exports.main = async (event, context) => {
  return {
    sum: event.a +  event.b
  }
}
```

在  ```cloudbase/all/functions``` 下面创建 **<font color="#d63200">test/package.json</font>** 文件,内容如下：

```json
// test/package.json
{
  "name": "openapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "wx-server-sdk": "latest"
  }
}

```

创建云函数之后记得右键部署到云服务，如下图：

![cloud3](/img/wechat/cloud3.png)

上传部署云函数后，我们在小程序页面 **<font color="#d63200">js</font>** 文件中可以这么调用：

```js
wx.cloud.callFunction({
    // 需调用的云函数名
    name: 'test',
    // 传给云函数的参数
    data: {
        a: 1,
        b: 2,
    },
    // 成功回调
    complete: (res) =>{
        console.log(res)
    }
})
// 当然 promise 方式也是支持的
wx.cloud.callFunction({
  name: 'test',
  data: {
    a: 1,
    b: 2
  }
}).then((res) =>{
    console.log(res)
})
```
