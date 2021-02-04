### 安装  
```shell
npm install @nuxt/axios
```
### 配置
配置  **```nuxt.config.js ```**
```JavaScript 
modules: ["@nuxtjs/axios"],
axios: {
    proxy: true
},
proxy: {
    "/api/": "http://localhost:3001/"
},
```
### 测试
```Javascript
// 修改 pages/user/_id.vue 
export default {
    async asyncData({ params, $axios }) {
        // 注意返回的就是响应数据
        const data = await $axios.$get(`/api/users/${params.id}`);
        if (data.ok) {
            return { user: data.user };
        }
        error({ statusCode: 400, message: "id有误，查询失败" });
    }
};

// 创建 server/api-server.js
// npm i koa-router
const Koa = require("koa");
const app = new Koa();
const Router = require('koa-router')
const router = new Router({prefix:'/api/users'})

const users = [{ name: "tom", id: 1 }, { name: "jerry", id: 2 }];

router.get('/:id', ctx => {
    const user = users.find(u => u.id == ctx.params.id)
    if (user) {
        ctx.body = {ok:1, user};
    }
    else {
        ctx.body = {ok:0}
    }
})

app.use(router.routes());
app.listen(3001);
```
###  拦截器实现
```Javascript
// nuxt.config.js 
plugins: [ "@/plugins/router"],

// 创建 plugins/axios.js
export default function({$axios}){
    // onRequest 是请求拦截器帮助方法
    $axios.onRequest(config => {
        if(!process.server) config.headers.token = 'token'
    })
}
```