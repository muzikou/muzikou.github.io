**<font color="#d63200">Umi</font>**，是可扩展的企业级前端应用框架，是蚂蚁金服的底层前端框架，通过约定、自动生成和解析代码等方式来辅助开发，提高开发效率，具有一下特点：

- 开箱即用，内置 ```react```，```react-router``` 等
- 类 ```net.js``` 且功能完备的路由约定，同时支持配置的的路由方式
- 完美的插件体系，覆盖从源码到构建产物的每个生命周期
- 高性能，通过插件支持 ```PWA```，以路由为单元的 ```code splitting``` 等
- 支持静态页面导出，是培育各种环境，比如中台业务，无线业务，支付宝钱包等
- 开发启动快，支持一键开启 ```dll``` 和 ```hard-source-webpack-plugin``` 等
- 一键兼容到 ```IE9```，基于 ```umi-plugin-polyfills```
- 完善的 ```TypeScript``` 支持，包括 ```d.ts``` 定义和 ```umi test```
- 与 ```dva``` 数据流的深入融合，支持 ```duck directory```、```model``` 的自动加载，```code splitting``` 等等

**<font color="#d63200">Umi</font>** 与 **<font color="#d63200">dva</font>** 数据流的深入融合，下面是 **<font color="#d63200">dva</font>** 的原理图：

![webpack](/img/react/dva.jpeg)

组件中用户的交互或者路由组件的跳转引起数据的改变会触发 **```Action```**，如果是同步会直接更新 **```Reducer```**，如果是异步操作会触发 **```Effect```** 与后台服务器 **```Server```** 交互获取数据然后再更新 **```Reducer```**，**```Subscription```** 订阅一些特殊的事件，当事件改变时派发 **```Action```** 去做更新，更新完成之后视图模型层 **```Model```** 把最新的状态 **```connect```** 到组件上。

## dva 与  umi 约定

1. src 文件下是源码
    - pages 文件下是页面
    - components 文件下是组件
    - layout 是布局
    - model
2. config 配置
3. mock 数据模拟
4. test 测试等

## 安装

```shell
npm init
npm install umi -D
```

此处用 ```-D``` 是因为 **Umi** 是开发时的框架，用来做打包、编译工作的，是 ```devDependencies``` 依赖

## 新建 index页

在根目录创建 ```src``` 文件夹，然后执行以下命令：

```shell
umi g page index
```

此时会在 ```src``` 下创建 ```pages``` 文件夹，同时生成 ```index.js``` 和 ```index.css```

## 启动服务器

通过下面的指令启动服务器，查看页面：

```shell
umi dev
```
