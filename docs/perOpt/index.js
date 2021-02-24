// let arr = [20,1,9,2,7,15, 18, 21]
// const sum = 29

// let y =0;
// while(y < 10000){
//     arr.push(Math.random())
//     y++
// }
// 双层循环 判断  复杂度 o n*2
// let x = 0
// for(var i=0; i< arr.length; i++){
//     for(var j=0; j< arr.length; j++){
//         if((i != j) && (arr[i] + arr[j] == sum)){
//             console.log( i, j, arr[i], arr[j])
//         }
//         x++
//     }
// }
// console.log(x)

// 便利一次 复杂度 o(n)
// let obj = {}
// arr.forEach((v, i) => {
//     if(String(v) in obj){
//         console.log(v, i)
//         console.log(arr[obj[String(v)]])
//     }
//     x++
//     obj[sum-v] = i
// })
// console.log(x)


// 排序
//  冒泡排序 复杂度 o(n*2)
// function dubbleSort(){
//     for(let j = 0; j < arr.length-1; j++){
//         for(let i = 0; i < arr.length-1; i++){
//             if(arr[i] > arr[i+1]){
//                 var temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//             }
//         }
//     }
// }

// // 可以优化
// // for(let j = 0; j < arr.length-1; j++){
//     // for(let i = 0; i < arr.length-1-j; i++){
// console.log(arr)
// // console.log(arr.sort((a, b) => a-b))
// dubbleSort(arr)

// 快速排序 复杂度 o(n * lg n)
 // 排队的时候，随便找一个索引，大的排右边小的排左边
// let arr1 = [20,1,9,2,7,15, 18, 21]
// function quickSort(arr){
//     if(arr.length <= 1 ){
//         return arr
//     }
//     let flag = arr[0]
//     let left = []
//     let right = []
//     for(let i = 1; i<arr.length; i++){
//         if(arr[i] > flag){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     // console.log(quickSort(left))
//     return [ ...quickSort(left), flag, ...quickSort(right)]
// }
// console.log(quickSort(arr1))

// 但是这种方法 空间占用很多, 优化方法如下
// let arr1 = [10,3,44,13,8]
// function quickSort(arr){
//     if(arr.length <= 1 ){
//         return arr
//     }
//     let flag = arr[0]
//     let i = 1
//     let j = arr.length - 1
//     while(i<j){
//         while(arr[j] >= flag && i<j){
//             j--
//         }
//         while(arr[i] <= flag && i<j){
//             i++
//         }
//         const temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }
//     const temp = arr[0]
//     arr[0] = arr[j]
//     arr[j] = temp
//     return [ ...quickSort(arr.slice(0,i)), flag, ...quickSort(arr.slice(j+1))]
// }
// console.log(quickSort(arr1))

let arr1 = [3,1,3,2,5,4,5]
function demo(k, arr){
    const sortArr = arr.sort((a,b) => b-a)
    console.log(sortArr)
    let obj = []
    sortArr.forEach((v, i) => {
        if(obj.indexOf(v) != -1){
            return false
        }
        obj.push(v)
    });
    console.log(obj)
    return sortArr[k-1]
}
console.log(demo(2, arr1))