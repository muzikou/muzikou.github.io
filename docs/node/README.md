### NodeJS是什么

**<font color="#d63200">node.js</font>** 是一个异步的事件驱动的JavaScript运行时，[官网地址](https://nodejs.org/en/)

这里需要提及几个概念：

> 运行时 runtime 就是程序运行的时候  
> 运行时库 就是程序运行的时候所依赖的库  
> 运行的时候指的是指令加载到内存并由 cpu 执行的时候  

**node.js特性：**

+ [非阻塞I/O](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/)  
+ [事件驱动](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

### 与前端的不同

+ JS 核心语法不变
+ 前端 ```BOM``` ```DOM```
+ 后端 ```fs``` ```http``` ```buffer``` ```event``` ```os```

+ 运行 **```node```** 程序

```js
// nodeTest.js
console.log('node 初尝试')
console.log('node 初尝试2')
```

然后直接在终端执行指令： ```node nodeTest.js```

上面的运行方式，在每次修改之后都需要重新执行指令才能生效，很繁琐。  
所以一般是用 **```nodemon```** 来监视文件改动，自动实现重启。  

首先执行安装指令: ```npm i -g nodemon```  
然后运行: ```nodemon nodeTest.js```  

+ 使用模块(```module```)

    + 调用内置模块

    ```js
    const os = require("os")
    const mem = os.freemem() / os.totalmem() * 100
    console.log('内存占用率',mem)
    ```

    + 调用第三方模块，**```npm install```** 之后再调用

    ```js
    const CPUStat = require("cpu-stat")
    CPUStat.usagePercent((err, percent) => {
        console.log(`CPU占用率 ${percent}%`)
    })
    ```

    + 自定义模块

    ```js
    // 导出
    module.exports = {}
    // 导入
    require('')
    ```
