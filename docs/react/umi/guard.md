
### 权限路由

**<font color="#d63200">Umi</font>** 中路由守卫是通过配置路由的 **<font color="#d63200">Routes</font>**  属性来实现  

- 指令创建 **```about```** 页面：

```shell
umi g page about
```

- 同时给 **```about```**  路由设置权限：

```js
export default {
    routes: [
        {
            path: "/about",
            component: "./about",
            Routes: ["./routes/PrivateRoute.js"]
        },
    ]
};
```

**<font color="#d63200">注意：</font>** **```Routes```** 中的路径是相对根目录，同时文件名后缀一定不能少

- 根目录创建 **```./routes/PrivateRoute.js```**

```js
import Redirect from "umi/redirect";

export default props => {
    // 50%概率需要去登录页面
    if (Math.random() > 0.5) {
        return <Redirect to="/login" />;
    }
    return (
        <div>
            <div>PrivateRoute (routes/PrivateRoute.js)</div>
            {props.children}
        </div>
    );
};
```

- 此时还需要创建 **```login```** 页面：

```shell
umi g page login
```

- 然后配置路由：

```js
export default {
    routes: [
        {
            path: '/login',
            component: './login',
        },
    ]
};
```
