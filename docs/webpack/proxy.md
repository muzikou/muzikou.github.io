### devServer.proxy

联调期间，前后端分离，直接获取数据会跨域，上线后我们使⽤ ```nginx``` 转发，开发期间，```webpack``` 就可以搞定这件事

```dev-server``` 使用了非常强大的 ```http-proxy-middleware``` 包，可查阅其[文档](https://github.com/chimurai/http-proxy-middleware#options)

#### 启动⼀个服务器，```mock``` ⼀个接⼝

```js
// npm i express -D
// 创建⼀个server.js

//server.js
const express = require('express')
const app = express()
app.get('/api/info', (req,res)=>{
    res.json({
        name:'木子',
        age: 18,
        msg: '正在学习中...'
    })
})
app.listen('9092')
```

#### 项⽬中安装 ```axios``` ⼯具

```js
//npm i axios -D
//index.js
import axios from 'axios'
axios.get('http://localhost:9092/api/info').then(res=>{
    console.log(res)
})
```

此时运行会有 跨域问题，跨域通过设置代理解决，如下：

修改 ```webpack.config.js``` 设置服务器代理

```js
proxy: {
    "/api": {
        target: "http://localhost:9092"
    }
}
```

修改 ```index.js```

```js
axios.get('/api/info').then(res=>{
    console.log(res)
})
```
