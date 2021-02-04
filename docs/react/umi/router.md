
## 动态路由

以 **```$```** 开头的文件或者目录，会自动生成动态路由

- 用命令行生成 ```users``` 页面

```shell
umi g page users/index
```

- 然后在 ```users``` 文件夹下面创建 ```$id.js```，代码如下：

```js
// 创建 users/$id.js，显示传参
import React from 'react'
export default function $id({match}) {
    return (
        <div>
            {match.params.id}
        </div>
    )
}
```

## 嵌套路由

嵌套路由以 **```_layout```** 表示

- 用命令行生成 **```_layout```**，如下：

```shell
umi g page users/_layout
```

- 会自动生成嵌套路由，记得修改 ```users/_layout.js``` 代码，不然 ```users/index.js``` 不展示，如下：

```js
import styles from './_layout.css';
export default function(props) {
  return (
    <div className={styles.normal}>
        <h1>Page _layout</h1>
        <h5>{props.children}</h5>
    </div>
  );
}
```

## 配置式路由

默认路由为声明式，根据 ```pages``` 下面内容自动生成路由，如果业务复杂后仍需配置路由，需要在跟目录创建 **```config/config.js```**，代码如下：

```js
export default {
    routes: [
        //   以pages为根目录
        { path: "/", component: "./index" },
        {
            path: "/users",
            component: "./users/_layout",
            routes: [
                { path: "/users/", component: "./users/index" },
                { path: "/users/:id", component: "./users/$id" },
            ]
        },
    ]
};
```

**<font color="#d63200">注意：</font>** ```component``` 是相对于 ```src/pages``` 目录的

## 404 页面

- 创建 **```404```** 页面：

```shell
umi g page notFound
```

- 添加不带 **```path```** 的路由配置项：

```js
export default {
    routes: [
        { component: "./NotFound" }
    ]
};
```

**<font color="#d63200">注意：</font>** 如果有 **嵌套路由** 每一层级都要配置 **404 页面**
