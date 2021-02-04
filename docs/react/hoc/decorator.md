# 高阶组件的装饰器使用

前面学习的 高阶组件的链式调用其实还是很繁琐的，在 ```ES7``` 之后出现了 **<font color="#d63200">装饰器</font>**，可以应用与高阶组件，在使用之前需要安装依赖包：

```shell
npm install --save-dev babel-plugin-transform-decorators-legacy
```

安装之后，需要去更改 ```webpack``` 的配置文件 ```config-overrides.js```：

```js
const { injectBabelPlugin } = require("react-app-rewired");
module.exports = function override(config,env) {
    // ant-design 配置
    config = injectBabelPlugin( [ "import",{ libraryName: "antd",libraryDirectory: "es",style: "css"}], config );
    // 装饰器配置
    config = injectBabelPlugin( ['@babel/plugin-proposal-decorators', { "legacy": true }], config, )
    return config;
}
```

配置好之后 用法如下：

```js
import React, { Component } from 'react'
const HocSay = Comp => {
    const name = '高阶组件'
    return class NewComp extends Component{
        componentDidMount(){
            console.log('do somethimg')
        }

        render(){
            return <Comp {...this.props} name={name}></Comp>
        }
    }
}
const HocLink = Comp => {
    console.log('这里是 高阶链式调用')
    return props => <Comp {...props} ></Comp>
}

// 装饰器的执行顺序是 从上往下
@HocLink
@HocSay
@HocLink
class Say extends Component{
    render(){
        return (
            <div>{this.props.stage} - {this.props.name}</div>
        )
    }
}
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Say stage="React 之 " />
            </div>
        )
    }
}
```
