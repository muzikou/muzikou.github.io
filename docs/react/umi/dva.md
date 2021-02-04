在 **<font color="#d63200">React</font>** 中，为了让数据更易于维护，我们分成了 **```store，reducer，action```** 等模块，各司其职，软件开发也一样。

**<font color="#d63200">DVA</font>** 引进来以后，前端代码分层很明确，分别为 **```page，Model，Service```**：  

- **page:** 负责与用户直接打交道，渲染页面，接受用户的操作输入，侧重于展示型交互性逻辑。
- **Model:** 负责处理业务逻辑，为 ```page``` 做数据、状态的读写、变换、暂存等。
- **Service:** 负责与 ```HTTP``` 接口对接，进行纯粹的数据读写。

**<font color="#d63200">DVA</font>** 是基于 **```redux```**、**```redux-saga```** 和 **```react-router```** 的轻量级前端框架及最佳实践沉淀，核心 ```Api``` 如下：

- **```model```**
  - state
  - reducer
  - effect 副作用，处理异步
- **```subscriptions```** 订阅
- **```router```** 路由

## 配置 DVA

**<font color="#d63200">Umi</font>** 里面内置的 **```dva```** ，所以不需要安装，直接在 ```config/config.js``` 中启用即可，如下：

```js
export default {
    plugins: [
        [
            "umi-plugin-react",
            {
                antd: true,
                dva: true
            }
        ]
    ],
};
```

## 创建 model

约定在 **```src```** 文件夹下面创建 ```./models/goods.js``` 维护页面数据状态，代码如下：

```js
export default {
    namespace: 'goods', // model的命名空间，区分多个model
    state: [{ title: "web全栈" },{ title: "java架构师" }], // 初始状态
    effects: {// 异步操作 },
    reducers: {  // 同步操作
        // 更新状态
        addGood(state, action){
            return  [ ...state, {title: action.title}]
        }
    }
}
```

- **namespace：** ```model``` 的命名空间，只能用字符串，非必需，默认与文件名同名，一个大型应用可能包含多个 ```model```，通过 ```namespace``` 区分。
- **reducers：** 用于修改 ```state```，由 ```action``` 触发，```reducers``` 是一个纯函数，接收当前的 ```state``` 及一个 ```action``` 对象，```action``` 对象里面可以包含数据体作为入参，返回一个新的 ```state```。
- **effect：** 用于处理异步操作和业务逻辑，也是由 ```action``` 触发，但是，不能修改 ```state```，要通过```action``` 调用 ```reducer``` 实现对 ```state``` 的间接操作。
- **action：** 是 ```reducers``` 及 ```effects``` 的触发器，一般是一个对象，形如 ```{type: 'add', payload: todo}```，通过 ```type``` 属性可以匹配到具体的 ```reducer``` 或者 ```effect``` ，```payload``` 属性则是数据体，用于传送给 ```reducer``` 或 ```effect```

## 使用状态

- 使用指令 **```umi g page goods```** 创建页面 ```goods.js```，会自动生成 ```src/pages/goods.js```，配置该页面代码如下：

```js
import styles from './goods.css';
import { Card, Button } from 'antd'
import { connect } from 'dva';
export default connect(
    state => ({
        goodsList: state.goods // 获取指定命名空间的模型状态
    }),
    {
        addGood: title => ({
            type: 'goods/addGood', // action 的 type 需要以命名空间为前缀+ reducer 名称
            title  
        })
    }
)(function({goodsList, addGood}) {
    return (
        <div className={styles.normal}>
            <h1>Page goods</h1>
            {/* 商品列表 */}
            <div>
                {goodsList.map(good => {
                    return (
                        <Card key={good.title}>
                            <div>{good.title}</div>
                        </Card>
                    );
                })}
                <div>
                    <Button onClick={() => addGood("商品" + new Date().getTime())}>
                        添加商品
                    </Button>
                </div>
            </div>
        </div>
    );
})
```

- 更新模型 ```./src/models/goods.js```，部分代码如下：

```js
export default {
    reducers: {  // 同步操作
        // 更新状态
        addGood(state, action){
            return  [ ...state, {title: action.title}]
        }
    }
}
```

## 异步操作

代码中通过 **```connect```** 映射出 ```state``` 和 ```action```，在组件中可以直接使用，```addGood``` 属于同步操作，如果想要实现异步操作，可以利用 **```mock```** 模拟数据接口  

- 首先创建 ```mock``` 目录 和 ```src``` 同级，然后新建 ```mock/goods.js```，代码如下:

```js
const data = [{ title: "web全栈" }, { title: "java架构师" }];

export default {
  // "method url": Object 或 Array
  //   "get /api/goods": { result: data },

  // "method url": (req, res) => {}
  "get /api/goods": function(req, res) {
    setTimeout(() => {
      res.json({ result: data });
    }, 1250);
  }
};
```

- **effect 处理异步**  
基于 **```redux-saga```**，使用 **```generator```** 函数来控制异步流程，请求接口的 ```./models/goods.js``` 需要修改，如下：

```js
// 首先安装axios
import axios from "axios";
// api
function getGoods() {
    return axios.get("/api/goods");
}
export default {
    namespace: "goods", // model的命名空间，区分多个model
    state: [], // 初始状态
    effects: {
        // 异步操作
        *getList(action, { call, put }) {
            const res = yield call(getGoods);
            yield put({ type: "initGoods", payload: res.data.result });
        }
    },
    reducers: {
        // 同步操作
        // 更新状态
        addGood(state, action) {
            return [...state, { title: action.title }];
        },
        initGoods(state, action) {
            return action.payload;
        }
    }
};
```

- 组件调用，```./src/pages/goods.js```，部分代码如下：

```js
export default connect(
    state => ({...}),
    {
        ...,
        getList: () => ({ // 映射getList动作
            type: 'goods/getList'
        })
    }
)(function({ ..., getList}) {
    useEffect(() => {
        getList()
    }, [])
    return ( ... );
})
```

## 加载状态

**<font color="#d63200">DVA</font>** 可以通过 **<font color="#d63200">loading</font>** 控件获取加载状态：

```js
export default connect(
    state => ({
        ...,
        loading: state.loading
    }),
    { ... }
)(function({ ..., loading}) {
    ...,
    console.log(loading)
    return (
        <div className={styles.normal}>
            ...,
            {/* 加载状态 */}
            {loading.models.goods && <p>loading...</p>}
        </div>
    );
})
```
