**<font color="#d63200">ES6</font>** 加强了对 <font color="#d63200">Unicode</font> 的支持，并且扩展了字符串对象。
## 字符的 Unicode 表示法
```JavaScript``` 允许采用```＼uxxxx``` 形式表示一个字符，其中 ```xxxx``` 表示字符的 <font color="#d63200">Unicode</font> 码点，      
但是这种表示法只限于码点在 ```\uOOOO～\uFFFF``` 之间的字符。超出这个范围的字符，必须用 2个双字节的形式表达。
```JavaScript
console.log("\u20BB7") // "₻7" 
```
由上面的代码可以看出，如果直接在```＼u``` 后面跟上超过 ```OxFFFF``` 的数值（比如 ```u20BB7``` ) , ```JavaScript``` 会理解成```＼u20BB+7```。            
**<font color="#d63200">ES6</font>** 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。
```JavaScript
console.log("\u{20BB7}") // "𠮷"
```  
## 字符串的遍历器接口
**<font color="#d63200">ES6</font>** 为字符串添加了遍历器接口，使得字符串可以由 ```for...of``` 循环遍历。
```JavaScript
for (let codePoint of 'foo') { 
    console.log(codePoint)  // f o o
}
```  
## includes()、startsWith()、endsWith()
传统上， ```JavaScript``` 中只有 <font color="#d63200">indexOf</font> 方法可用来确定 一个字符串是否包含在另一个字符串中。 **<font color="#d63200">ES6</font>** 又提供了 3 种新方法。                 
```includes()``` ：返回布尔值，表示是否找到了参数字符串                  
```startsWith()```： 返回布尔值 表示参数字符串是否在源字符串的头部                 
```endsWith()```： 返回布尔值， 表示参数字符串是否在源字符串的尾部     
```JavaScript
var s = 'Hello world ! '; 
s.startsWith('Hello') // true 
s.endsWith("!") // true 
s.includes('o')  //true
```            
这 3 个方法都支持第二个参数，表示开始搜索的位置
```JavaScript
s.startsWith('Hello',6) // fasle 
s.endsWith("!",6) // false 
s.includes('o',6) // true 
```   
**<font color="#d63200">注意：</font>**             
    使用第二个参数 <font color="#d63200">n</font> 时， <font color="#d63200">endsWith</font> 针对前 <font color="#d63200">n</font> 个字符，而其他两个方法针对从第 <font color="#d63200">n</font> 个位置到字符串结束位置之间的字符。 
## repeat()
```repeat()``` 方法返回一个新字符串，表示将原字符串重复 <font color="#d63200">n</font> 次。 
```JavaScript
'hello'.repeat(2 ) // 'hellohello'
``` 
参数如果是小数， 会被取整。
```JavaScript
'na'.repeat(2.9) // 'nana'
``` 
如果 <font color="#d63200">repeat</font> 的参数是负数或者 <font color="#d63200">Infinity</font> ，会报错。
```JavaScript
'na'.repeat (Infinity)  // RangeError 
'na'.repeat (-1) // RangeError
``` 
但如果参数是 0 到 －1 之间的小数，则等同于 0，这是因为会先进行取整运算。 0 到－1 之间的小数取整以后等于－0, <font color="#d63200">repeat</font> 视同为 0。
```JavaScript
'na'.repeat(-0.9) // ''
``` 
参数 NaN 等同于 0
```JavaScript
'na'.repeat(NaN) // ''
```
如果 <font color="#d63200">repeat()</font> 的参数是字符串,则会先转换成数字。
```JavaScript
'na'.repeat ('na' ) // '' 
'na'.repeat ('3' ) // 'nanana'
```
## padStart()、 padEnd()
**<font color="#d63200">ES2017</font>** 引入了字符串补全长度的功能，如果某个字符串不够指定长度，会在头部或尾部补全。
```padStart()```： 用于头部补全            
```padEnd()```：用于尾部补全      
以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。
```JavaScript
'x'.padStart (5, 'ab') // ’ ababx ’
'x'.padEnd (5, 'ab') // 'xabab'
```
如果指定的长度小于或者等于原字符串的长度，则返回原字符串:
```JavaScript
"hello".padStart(5,"A") // hello
```
如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串:
```JavaScript
"hello".padEnd(10,",world!") // "hello,worl"
'abc'.padStart(10,'0123456789') //"0123456abc"
```
如果省略第 二个参数， 则会用空格来补全
```JavaScript
'x'. padStart(4) // "   x"
'x'. padEnd(4) // "x   "
```
## 模板字符串
**<font color="#d63200">ES6</font>** 新增的创建字符串的方式，使用反引号定义，可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
 ```JavaScript
const name = `模板字符串`;
```
模板字符串中可以解析变量
```JavaScript
const name = 'muzi'
const say = `my name is ${name}` // my name is muzi 
```
定义多行字符串
```JavaScript
const obj = {
    name: 'muzi',
    age: 18
}
const dom = `
    <div>
    <p>${obj.name}</p>
    <p>${obj.age}</p>
    </div>
`;
```      
模板字符串中可以调用函数
```JavaScript
const say = () => {
    return '模板字符串中可以调用函数'
}
const saying = `${say()},很是优秀`
```
        