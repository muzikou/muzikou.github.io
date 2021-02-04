### 网络通信

**网络通信协议** 是一种网络通用语言，为连接不同操作系统和不同硬件体系结构的互联网络提供通信支持，是一种网络通用语言。

![图解](/img/node/http.jpeg)

### HTTP 协议

观察 HTTP 协议

```shell
curl -v http://www.baidu.com
```

### HTTP 使用

+ 创建接口

```js
// index.js
const http = require("http");
const fs = require("fs");
http.createServer((req, res) => {
    const { method, url } = req;
    if (method == "GET" && url == "/") {
        fs.readFile("./index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    } else if (method == "GET" && url == "/users") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify([{ name: "muzi", age: 18 }]));
    }
}).listen(3000);
```

+ 请求接口

```html
<!-- index.html -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
    axios.defaults.baseURL = 'http://localhost:3000'
    axios.get("/users").then(res => res.data).then(users => console.log(users));
</script>
```

+ 跨域
所谓的跨域就是浏览器同源策略引起的接口调用问题。
简单的理解就是三个不同：协议、域名和端口号三个任意中的一个不同都会造成跨域问题，下面我们利用 live-server 来实现跨域的问题：

首先安装，然后执行，启动 server：

```shell
npm i live-server
live-server
```

此时浏览器会自动打开页面，并提示错误，解决方法如下：

+ 常用的解决方案

1. JSONP(JSON with Padding)，前端+后端方案，绕过跨域

> 前端构造 script 标签请求指定 URL (由 script 标签发出的 GET 请求不受同源策略限制)，服务器返回一个函数执行语句，该函数名称通常由查询参数 callback 的值巨鼎，函数的参数为服务器返回的 json 数据，该函数在前端执行后即可获取数据。

目前基本上不用了。

2. 代理服务器

> 请求同源服务器，通过该服务器转发请求至目标服务器，得到结果再转发给前端。
> 前端开发中测试服务器的代理功能就是采用的该解决方案，但是最终发布上线时如果 web 应用和接口服务器不在一起仍会跨域。

3. CORS(Cross Origin Resource Share) - 跨域资源共享，后端方案，解决跨域
原理上 cors 是w3c规范，真正意义上解决跨域问题。它需要服务器对请求进行检查并对响应头做相应处理，从而允许跨域请求。
跨域时，请求分为 简单请求和 预检测请求，具体实现方法如下：

+ 简单请求
满足以下条件中的一条都属于简单请求：
+ GET  
+ HEAD
+ POST  
    +  Content-Type（仅当 POST 方法当 Content-Type 值为下列之一才算做简单请求)  
        +  text/plain  
        +  multipart/form-data
        +  application/xwww-form-urlencoded
简单请求没有自定义请求头的，解决跨域的方法如下：

```js
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
```

+ 预检请求  
需要响应浏览器发出的 options 请求(预检请求)到服务器，以获知服务器是否允许该实际请求。  
预检请求的使用，跨域避免跨域请求对服务器的用户数据产生未预期的影响。
满足以下条件中的一条，浏览器都会首先发送预请求：
+ 使用下面任一 HTTP 请求：
    + PUT  
    + DELETE
    + CONNECT  
    + OPTIONS  
    + TRACE  
    + OPTIONS  
+ 人为设置了对 CORS 安全的首部字段集合 之外的其他首部字段，合集如下：  
    +  Accept / Accept-Language
    +  Content-Type / Content-Language
    +  DPR
    +  DownLink
    +  Save-Data
    +  Width / Viewport-Width
    +  Content-Type 的值不属于下列之一：
        +  text/plain  
        +  multipart/form-data
        +  application/xwww-form-urlencoded

此时需要根据情况设置响应头：

```js
// index.js
else if (method == "OPTIONS" && url == "/users") {
    res.writeHead(200, { "Access-Control-Allow-Origin": "http://localhost:3000", "Access-Control-Allow-Headers": "X-Token,Content-Type", "Access-Control-Allow-Methods": "PUT" });
    res.end();
}
```

> 该案例中可以通过添加自定义的x-token请求头使请求变为 预检请求

```js
// index.html
axios.get("/users", {headers:{'X-Token':'token'}}).then(res => res.data).then(users => console.log(users));
```

> 则服务器需要允许 ```X-Token```，若请求为post，还传递了参数：

```js
// index.html
axios.get("/users", {foo:'bar'}, {headers:{'X-Token':'token'}}).then(res => res.data).then(users => console.log(users));
// index.js
else if ((method == "GET" || method == "POST") && url == "/users") {}
```

> 则服务器还需要允许 content-type 请求头

+ 如果要携带cookie信息，则请求变为credential请求：

```js
// 预检options中和/users接口中均需添加
res.setHeader('Access-Control-Allow-Credentials', 'true');
```
