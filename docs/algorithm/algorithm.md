## 递归

可以查看[JS-函数进阶之递归](/js/function/recursive.md)

## 排序

JS 中有 sort() 方法用于对数组的元素进行排序。这是 JS 封装好的方法，下面我们自己来实现几种排序的方法：

几种最经典、最常用的排序方法：冒泡排序、插入排序、选择排序、快速排序、归并排序、计数排序、基数排序、桶排序。

1. 冒泡排序  
    冒泡排序的原理是依次比较相邻的两个值，如果后面的比前面的小，则将小的元素排到前面。依照这个规则进行多次并且递减的迭代，直到顺序正确。  
    冒泡排序复杂度是 O(n^2)

    ```js
    function bubbleSort(arr){
        for(let j=0; j<arr.length-1; j++){
            for(let i=0; i<arr.length-1-j; i++){
                if(arr[i] > arr[i+1]){
                    let temp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                }
            }
        }
    }
    ```

    由代码我们可以知道，冒泡排序复杂度是 O(n^2)

2. 插入排序
    插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。  
    插入排序复杂度是 O(n^2)

    ```js
    function Insertion(arr) {
        let len = arr.length;
        let preIndex, current;
        for (let i = 1; i < len; i++) {
            preIndex = i - 1;
            current = arr[i];
            while (preIndex >= 0 && current < arr[preIndex]) {
                arr[preIndex + 1] = arr[preIndex];
                preIndex--;
            }
            arr[preIndex + 1] = current;
        }
        return arr;
    }
    ```

3. 选择排序  
    首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。  
    选择排序复杂度是 O(n^2)

    ```js
    function selectSort(arr){
        var len=arr.length;
        var minIndex,temp;
        for(i=0; i<len-1; i++){
            minIndex=i;
            for(j=i+1; j<len; j++){
                if(arr[j]<arr[minIndex]){
                    minIndex = j;
                }
            }
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        return arr;
    }
    ```

4. 快速排序  
    从数组中选定一个基数，然后把数组中的每一项与此基数做比较，小的放入一个新数组，大的放入另外一个新数组。然后再采用这样的方法操作新数组。直到所有子集只剩下一个元素，排序完成。
    选择排序复杂度是 O(nlogn)

    ```js
    function quickSort(arr){
        if(arr.length<=1){
            // 递归终止条件
            return arr
        }
        let flag = arr[0]
        let i =1
        let j = arr.length-1
        while(i<j){
            while(arr[j]>=flag && i<j){
                j--
            }
            while(arr[i]<=flag && i<j){
                i++
            }  
            // 右边找到一个比flag小的，左边一个比他大的
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j]=temp
        }
        // flag交换正确的位置上
        let temp = arr[0]
        arr[0] = arr[j]
        arr[j]=temp
        return quickSort(arr.slice(0,i)).concat([flag]).concat(quickSort(arr.slice(j+1)))
    }
    ```

5. 归并排序
    归并排序是一种非常稳定的排序方法，将数组从中间拆分成前后两部分,然后对前后两部依次拆分，一直拆分到只有一个数，然后按照拆分过程逐步合并并排序,这样整个数组就都有序了。
    选择排序复杂度是 O(nlogn)

    ```js
    // 将数组拆分成一个数
    function merge_sort(arr){
        if(arr.length == 1) return arr
        var mid = Math.floor(arr.length/2)
        var left = arr.slice(0,mid)
        var right = arr.slice(mid)
        return Merger(merge_sort(left),merge_sort(right)); //合并左右部分
    }
    // 合并两个有序数组的方法 Merger(a, b)
    function Merger(a, b){
        var n = a && a.length;
        var m = b && b.length;
        var c = [];
        var i = 0, j = 0;
        while (i < n && j < m){
            if (a[i] < b[j])
                c.push(a[i++]);
            else
                c.push(b[j++]); 
        }
        while (i < n){
            c.push(a[i++]);
        }
        while (j < m){
            c.push(b[j++]); 
        }
        return c;
    }
    ```

    排序的时间复杂度可以参考下图
    ![链表](/img/algorithm/fzd.jpeg)  

## 二分查找

二分法查找，也称折半查找，是一种在有序数组中查找特定元素的搜索算法。查找过程可以分为以下步骤：

1. 将数组的第⼀个位置设置为下边界（0）
2. 将数组最后⼀个元素所在的位置设置为上边界（数组的⻓度减1）。
3. 若下边界等于或⼩于上边界，则做如下操作。
    + 将中点设置为（上边界加上下边界）除以2
    + 如果中点的元素⼩于查询的值，则将下边界设置为中点元素所在下标加1
    + 如果中点的元素⼤于查询的值，则将上边界设置为中点元素所在下标减1
    + 否则中点元素即为要查找的数据，可以进⾏返回。

 ```js
function binarySearch(arr, value){
    let low = 0
    let high = arr.length-1
    let mid
    while(low<=high){
        mid = Math.floor((low+high)/2)
        if(arr[mid] < value){
            low = mid+1
        }else if(arr[mid] > value){
            high = mid -1
        }else{
            return mid
        }
    }
    return -1
}
```

## 动态规划

动态规划是一种常见的算法设计技巧，遵循 一套固定的流程：  
递归的暴力解法 -> 带备忘录的递归解法 -> 非递归的动态规划解法

下面我们以斐波拉契数列 ( 1，1，2，3，5，8，13，...) 为例，来动态规划实现：

1. 暴力递归：  
    想要计算 f(n),首先计算出子问题 f(n-1) 和 f(n-2)，然后要计算 f(n-1)，就要先计算出 f(n-1) 和 f(n-1)，依次类推，直到最后算出 f(1) 或者 f(2) 的时候，然后返回结果，递归树不再向下生长
    ![链表](/img/algorithm/bldg.jpeg)

    ```js
    function feiBoLaQie(n){
        if(n == 1 || n == 2) return 1
        return f(n-1) + f(n-2)
    }
    ```

    此时二叉树节点总数为指数级别，所以此时算法的时间复杂度是 O(2^n)，爆炸式增长，很容易卡死，但是仔细分析不难看出上面的算法中存在大量重复计算，效率极低，这就是动态规划问题的第一个性质，重叠子问题，下面我们想办法解决这个问题

2. 带临时存储的递归解法  
    定义一个空数组，每次计算出子问题的答案时先加到这个数组里再返回，每次计算数据之前先去数组里面查找这个 子问题 有木有计算过，计算过的直接返回，不要再去耗时间计算了
    ![链表](/img/algorithm/ccdg.jpeg)  

    ```js
    function feiBoLaQie(n, arr=[]){
        if(n === 1 || n === 2) return 1
        if(arr[n]) return arr[n]
        arr[n] = feiBoLaQie(n-1, arr) + feiBoLaQie(n-2, arr)
        return arr[n]
    }
    ```

3. 递归是从上到下, 动态规划，从下到上
    我们可以吧这个数组独立出来成为一张表，在这张表上完成自底向上的推算，如下图：
    ![链表](/img/algorithm/dtgh.png)  

    ```js
    function feiBoLaQie(n){
        // 创建一个数组，用于存放斐波拉契数组的数值
        let arr = []
        // 初始化数组
        arr[1] = arr[2] = 1
        for(let i=3; i<=n; i++){
            arr[i] = arr[i-1] + arr[i-2]
        }
        return arr[n]
    }
    ```
