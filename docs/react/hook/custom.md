### 自定义钩子

**<font color="#d63200">自定义钩子(Custom Hook)</font>** 是一个函数，其名称以 **```use```** 开头，函数内部可以调用其他的 **```Hook```**。

```js
function useAge(){
    const [age, setAge] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setAge(18)
        }, 1000)
    })
    return age;
}

export default function HookTest() {
    // 自定义 状态
    const age = useAge();
    return (
        <div>
            <p>年龄： {age || 'loading...'}</p>
        </div>
    )
}
```

上面的代码中自定义了一个 ```age``` 的状态，这个状态是异步获取的，所以我们自定义了一个 ```useAge``` 钩子，通过 ```setAge(18)``` 改变 ```age``` 的状态，从而更新视图。
