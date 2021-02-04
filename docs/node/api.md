### NodeJS核心 API

## fs（文件系统）

**```fs```** 模块可用于与文件系统进行交互（以类似于标准 POSIX 函数的方式）。

要使用此模块：

```js
const fs = require('fs')
```

所有的文件系统操作都具有同步的、回调的、以及基于 **```promise```** 的形式。

```js
// 同步的示例
const data = fs.readFileSync('./package.json')
console.log(data.toString())

// 但是日常开发中更多的是异步回调的操作
const fs = require('fs')
fs.readFile('./package.json', (err,data) => {
    console.log(data.toString())
})

// 其实我们可以使用内置的 promisify 进行异步操作，如下：
const fs = require('fs')
const { promisify } = require("util")
const readFile = promisify(fs.readFile)
readFile('./package.json').then(data => {
    console.log(data.toString())
})
// 可以改写成如下写法
(async () => {
    const fs = require('fs')
    const { promisify } = require("util")
    const readFile = promisify(fs.readFile)
    const data = await readFile('./package.json')
    console.log(data.toString())
})()
```

## Buffer（缓冲器）

**```Buffer```** 对象用于表示固定长度的字节序列。 许多 ```Node.js API``` 都支持 **```Buffer```**。  
**```Buffer```** 类是 ```JavaScript``` 的 ```Uint8Array``` 类的子类，且继承时带上了涵盖额外用例的方法。 只要支持 **```Buffer```** 的地方，```Node.js API``` 都可以接受普通的 ```Uint8Array```。  
**```Buffer```** 类在全局作用域中，因此无需使用 ```require('buffer').Buffer```。

```js
// 创建一个长度为 10 的 Buffer：
const buf1 = Buffer.alloc(10)
console.log(buf1)

// 使用 Buffer.from 直接进行二进制赋值
const buf2 = Buffer.from([1, 2, 3]);
console.log(buf2)
const buf3 = Buffer.from('Buffer创建方法');
console.log(buf3)

// 写入
buf1.write('hello');

// 读取 ，利用 toString 将二进制转化为 string  
console.log(buf3.toString());

// 合并
const buf4 = Buffer.concat([buf1, buf3]);
```

## http（HTTP）

若要使用 **```HTTP```** 服务器和客户端，则可以 ```require('http')```。

这里简单的建立一个 **```HTTP```** 的请求：

```js
const http = require('http');
const server = http.createServer((request, response) => {
    console.log('there is a request');
    const { url, method, headers } = req
    console.log('res', url, method )
    response.end('a response from server');
});
server.listen(3000);
```

可以进行扩展如下：

```js
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    const { url, method, headers } = req
    console.log('res', url, method )

    if(url === '/' && method === 'GET'){
        fs.readFile('./index.html', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8' })
                res.end('server 异常')
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html ')
            res.end(data)
        })
    }else if(url === '/users' && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
        res.end(JSON.stringify({name: 'muzi'}))
    }else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        fs.createReadStream('.'+url).pipe(res)
    }
})
server.listen(3000)
```

## 仿写一个简版Express

仿写之前先来体验一下 **```express```** 的用法：

```js
// index.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('helllo world......')
})
app.get('/users', (req, res) => {
    res.end(JSON.stringify({name: 'muzi'}))
})
app.listen(3333, () => {
    console.log('listen start')
})
```

自定义文件 ```myExpress.js```,如下：

```js
//  myExpress.js
const http = require('http')
const fs = require('fs')
const url = require('url')
const router = []
class Application {
    get(path, handler){
        router.push({
            path,
            method: 'GET',
            handler
        })
    }
    listen(){
        const server = http.createServer((req, res) => {
            const { pathname } = url.parse(req.url, true)
            router.find(route => pathname === route.path && req.method === route.method).handler(req, res)
        })
        server.listen(...arguments)
    }
}
module.exports = function (){
    return new Application()
}
```

此时在引入自定义的 ```JS``` 文件：

```js
// index.js
const express = require('./myExpress')
```
