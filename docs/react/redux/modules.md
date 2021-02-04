前面实现了 **<font color="#d63200">redux</font>** 的使用，但是代码结构很不清晰，而且如果是多组件多模块要怎么开发呢，下面我们对代码进行重构，抽离 ```reducer``` 和 ```action```。

1. 新建 ```store``` 文件夹，把 ```store.js``` 移入同时更改名称为 ```index.js```，如下：

```js
// store/index.js
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import counterReducer from './count.redux'

const  store = createStore(counterReducer, applyMiddleware(logger, thunk))
export default store;
```

2. 在 ```store``` 文件夹下，新建 ```count.redux.js``` 文件， 同时把 ```index.js``` 文件中的 ```counterReducer``` 放进来, 再把组件中对状态更改的 ```Action``` 放进来，如下：

```js
// store/count.redux.js
const counterReducer = (state=0, actions ) => {
    switch (actions.type) {
        case 'add':
            return state+1;
        case 'minus':
            return state-1;
        default:
            return state;
    }
}
// action creator
export const add = ()  => ({type: 'add'});
export const minus = ()  => ({type: 'minus'});
export const asynAdd = () => (
    dispatch => {
        setTimeout(() => {
            dispatch({type: 'add'})
        }, 1000)
    }
);
export default counterReducer
```

3. 最后记得在组件 ```ReduxT.js``` 中导入 ```action```， 导入代码如下：

```js
import { add, minus, asynAdd } from '../redux/count.redux';
// 做一系列的映射
const mapStateToProps = state => ({num: state})
const mapDispatchToProps =  { add, minus, asynAdd }
```

### 模块化

日常开发中一般都是多模块的，要怎样实现呢，需要用到 **<font color="#d63200">combineReducers</font>**，具体代码如下：

```js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import counterReducer from './count.redux'
const  store = createStore(combineReducers({counter: counterReducer}), applyMiddleware(logger, thunk))
export default store;
```

这样修改之后，在组件中映射时也要加上 ```key```，才能取出来：

```js
const mapStateToProps = state => ({num: state.counter})
```
