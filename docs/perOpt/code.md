
### 渲染完成后的页面交互优化

## 节流

以滚动为例，隔一段时间只触发一次，第一个人说了算，在指定时间之内只执行一次，避免函数执行测试过多

```js
// func 是用户传入需要节流的函数
// wait 是等待的时间
const throttle = (func, wait=200) => {
    // 定义上次执行的时间
    let lastTime = 0;
    return (...args) => {
        let nowTime = new Date().getTime()
        if(nowTime - lastTime > wait){
            func.apply(this, args)
            lastTime = nowTime
        }
    }
}
let i = 1
window.addEventListener('scroll', throttle(() => {
    console.log(i)
    i += 1
}), 300)
```

## 防抖

以输入用户名完成之后在统一发送请求为例，在指定时间之内只认最后一次

```js
/// 校验用户名是不是重复，用户输入完 向后端发起请求
// 如果用户每次输入都发出请求，冗余请求过多
// 用户停止输入字符 500ms 后在发出
const debounce = (func, wait=200) => {
    let timer = 0;
    return (...args) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}
let i = 1
window.addEventListener('scroll', debounce(() => {
    console.log(i)
    i += 1
}), 500)
```

## 重绘

当我们对DOM 的修改导致了样式的变化、却未影响其几何属性（比如修改了颜色或者背景）时，浏览器不需要重新计算元素的几何属性，直接为该元素绘制新的样式，这个过程叫做重绘

## 回流

当我们对DOM 的修改引发了 DOM 集合尺寸的变化（比如修改元素的宽 高或隐藏元素等）时，浏览器需要重新计算元素的集合属性（其他元素的集合属性和位置也会因此受到影响），然后再将计算的结果绘制出来，这个过程就是回流（也叫重排）  

重绘不一定导致回流，回流一定会导致重绘

回流的影响是最大的， 以下改变都会造成回流，应尽可能避免：

+ 窗体字体大小
+ 增加样式表
+ 内容变化
+ class属性
+ offsetWidth 和 offsetHeight
+ fixed

## 懒加载

```js
// 获取所有图片的标签
    const imgs = document.querySelectorAll('img')
    // 获取可视区域高度
    const viewHeight = window.innerHeight || window.documentElement.clientHeight
    console.log(viewHeight,imgs)
    // num 用于统计当前显示到哪一张图片，避免每次都从第一张图片开始检查是否露出
    num = 0
    function lazyload(){
        for(let i=0; i<imgs.length;i++){
            // 用可视区域高度减去元素顶部距离可视区域顶部的高度
            console.log(imgs[i].getBoundingClientRect().top)
            let distance = viewHeight - imgs[i].getBoundingClientRect().top
            // 如果可是区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
            if(distance >= 0){
                // 给元素写入真是的 src ，展示图片
                imgs[i].src = imgs[i].getAttribute('data-src')
                // 前一张图片已经加载完毕，下次从第 i+1 张开始检查是否露出
                num = i+1
            }
        }
    }
    lazyload()
    // 节流
    window.addEventListener('scroll',lazyload, false)
```

## 常列表优化

以移动端的淘宝首页，无限滚动下拉商品，但是一些低端的安卓机，加载dom 过多，就崩了，该怎么优化？

可以通过虚拟列表，模拟滚动条，只保留上下三屏的dom，多于的销毁，可参考 react virtualized
