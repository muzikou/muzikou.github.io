// var num = new Number(123);
// var str = new String('abc');
// var boo = new Boolean(true);
// console.log(typeof num, typeof str, typeof boo)
// let obj =  {name: 'muzi'}
// function fn(){
//     console.log(this)
// }

// Function.prototype.myBind = function(obj){
//     // 判断调用对象是否为函数
//     if(typeof this !== 'function'){
//         throw new Error('Error')
//     }
//     // 获取参数
//     var args = [...arguments].slice(1)
//     let fn = this
//     return function Fn(){
//         // 根据调用方式，传入不同绑定值
//         return fn.apply(this instanceof Fn ? new fn : obj, [ ...args, ...arguments])
//     }
// }
// // fn.myBind(obj, 1, 2)(3,4)

// let foo = fn.myBind(obj)
// let res = new foo()


// function feiBoLaQie(n, arr=[]){
//     if(n === 1 || n === 2){
//         return 1
//     }
//     if(arr[n]) return arr[n]
//     arr[n] = feiBoLaQie(n-1, arr) + feiBoLaQie(n-2, arr)
//     return arr[n]
// }

function feiBoLaQie(n){
    // 动态规划，从下到上
    let arr = []
    arr[1] = arr[2] = 1
    for(let i=3; i<=n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
  }

console.log(feiBoLaQie(1100))