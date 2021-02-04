### 引入 antd

- 安装

```shell
npm install antd -S  // 运行时依赖包
npm install umi-plugin-react -D  //  按需加载 antd，开发时依赖
```

- 修改 **```./config/config.js```**：

```js
export default {
    plugins: [
        [
            "umi-plugin-react",
            {
                antd: true
            }
        ]
    ],
};
```

- 在页面中使用 ```Button```：

```js
import styles from "./login.css";
import { Button } from "antd";

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <Button>登录</Button>
    </div>
  );
}
```
