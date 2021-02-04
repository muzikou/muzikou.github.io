## 概述
**<font color="#d63200">Symbol</font>** 是 **<font color="#d63200">ES6</font>** 新引入的一种原始数据类型 **<font color="#d63200">Symbol</font>**，表示独一无二的值。它是 ```JavaScript``` 语言的第 **7** 种数据类型，前 **6** 种分别是 Undefined、Null 、布尔值(Boolean)、字符串(String)、数值(Number)和对象(Object)。                 
**<font color="#d63200">Symbol</font>** 值通过 **<font color="#d63200">Symbol</font>** 函数生成。 因此现在对象的属性名可以有两种类型： 一种是原来就有的字符串，另一种就是新增的 ```Symbol``` 类型，只要属性名属于 ```Symbol``` 类型,就是独一无二的,可以保证不会与其他属性名产生冲突。
```JavaScript
const s = Symbol(); 
typeof s // "symbol"
``` 
**<font color="#d63200">Symbol</font>** 函数可以接受一个字符串作为参数，表示对 ```Symbol``` 实例的描述，主要是为了在控制台显示，或者转为字符串时比较容易区分。
```JavaScript
const sl = Symbol('foo');  // Symbol(foo)
const s2 = Symbol('bar'); // Symbol(bar)
```
如果 ```Symbol``` 的参数是一个对象，就会调用该对象的 ```toString``` 方法，将其转为字符串，然后才生成 一个 ```Symbol``` 值。
```JavaScript
const obj = { 
    toString: () => 'abc'
}
const sym = Symbol(obj); //Symbol(abc)
```
**<font color="#d63200">注意: </font>** ```Symbol``` 函数的参数只表示对当前 ```Symbol``` 值的描述，因此相同 参数的 ```Symbol``` 函数的返回值是不相等的。
```JavaScript
let s1 =Symbol() ; 
let s2 =Symbol() ;
Object.is(s1,s2) // false
```
```Symbol``` 值不能与其他类型的值进行运算，否则会报错。
```JavaScript
let sym =Symbol('My symbol');
console.log('进行运算 '+ sym) // Cannot convert a Symbol value to a string
```
```Symbol``` 值可以显式转为字符串，也可以转为布尔值，但是不能转为数值。
```JavaScript
console.log(String(sym)) // Symbol(My symbol)
console.log(Boolean(sym)) // true
console.log(Number(sym))  // Cannot convert a Symbol value to a number
``` 
## 作为属性名的 Symbol
由于每一个 ```Symbol``` 值都是不相等的，这意味着 ```Symbol``` 值可以作为标识符用于对象的属性名，保证不会出现同名的属性。 这对于一个对象由多个模块构成的情况非常有用，能防止某个键被不小心改写或覆盖。
```JavaScript
let obj = {
    [sym]: '这是 Symbol 作为属性名的 demo'
}
// 或者 
let obj = {}
obj[sym] = '这是 Symbol 作为属性名的 demo' 
console.log(obj) // Symbol(My symbol): "这是 Symbol 作为属性名的 demo"
``` 
```Symbol``` 值作为属性名时，该属性还是公 属性，不是私有属性
## 属性名的遍历
```Symbol``` 作为属性名，该属性不会出现在 ```for ... in``` 和 ```for ... of``` 循环中，也不会被 ```Object.keys()```、 ```Object.getOwnPropertyNames()``` 返回 。但它也不是私有属性，有一个 ```Object.getOwnPropertySymbols``` 方法可以获取指定对象的所有 ```Symbol``` 属性名。
**<font color="#d63200">Object.getOwnPropertySymbols</font>** 方法返回一个数组，成员是当前对象的所有用作属性名的 ```Symbol``` 值。
```JavaScript
let a = Symbol('a') ; 
let b = Symbol('b');
let abObj = {
    [a]: 'a',
    [b]: 'b'
}
console.log(Object.getOwnPropertySymbols(abObj)) // [Symbol(a), Symbol(b)]
``` 
## Symbol.for()、 Symbol.keyFor()
**<font color="#d63200">Symbol.for(key)</font>** 方法会根据给定的键 **key**，来从运行时的 **symbol** 注册表中找到对应的 **symbol**，如果找到了，则返回它，否则新建一个与该键关联的 **symbol**，并放入全局 **symbol** 注册表中。
```JavaScript
Symbol.for(key);
// key:一个字符串，作为 symbol 注册表中与某 symbol 关联的键（同时也会作为该 symbol 的描述）
// 返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol。
``` 
**<font color="#d63200">区别：</font>** 
+ 和 Symbol() 不同的是，用 Symbol.for() 方法创建的的 symbol 会被放入一个全局 symbol 注册表中。            
+ Symbol.for() 并不是每次都会创建一个新的 symbol，它会首先检查给定的 key 是否已经在注册表中了。假如是，则会直接返回上次存储的那个。否则它会再新建一个。
## 属性
除了定义自己使用的 ```Symbol``` 值， ```ES6``` 还提供了 **11** 个内置的 ```Symbol``` 值，指向语言内部使用的方法。
**<font color="#d63200">Symbol.hasInstance</font>** 用于判断某对象是否为某构造器的实例。
```JavaScript
class MyClass { 
    [Symbol.hasinstance] (foo) { 
        return foo instanceof Array;
    }
}
[1 , 2 , 3] instanceof new MyClass() // true
``` 
**<font color="#d63200">Symbol.isConcatSpreadable</font>** 符号用于配置某对象作为 ```Array.prototype.concat()``` 方法的参数时是否展开其数组元素。
```JavaScript
const alpha = ['a', 'b', 'c'];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // ["a", "b", "c", 1, 2, 3]
numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); // ["a", "b", "c", [1, 2, 3]]
``` 
上面的代码说明，数组的默认行为是可以展开的， ```Symbol.isConcatSpreadable``` 属性等于 true undefined ，都有这个效果。        
对于类数组 **<font color="#d63200">(array-like)</font>** 对象，默认不展开。期望展开其元素用于连接，需要设置 ```Symbol.isConcatSpreadable``` 为 **true**。
```JavaScript
var x = [1, 2, 3];
var fakeArray = { 
    [Symbol.isConcatSpreadable]: true, 
    length: 2, 
    0: "hello", 
    1: "world" 
}
x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
``` 
**<font color="#d63200">Symbol.iterator</font>** 为每一个对象定义了默认的迭代器。该迭代器可以被 ```for...of``` 循环使用。
```JavaScript
var myiterable = {} ; 
myiterable[Symbol.iterator] = function* () { 
    yield 1; 
    yield 2; 
    yield 3 ; 
}
console.log([ ...myiterable ]) // [1, 2 , 3]
``` 
**<font color="#d63200">Symbol.match</font>**  指定了匹配的是正则表达式而不是字符串。```String.prototype.match() ```方法会调用此函数。
```JavaScript
String.prototype.match(regexp) 
// 等同于
regexp[Symbol.match](this)

const regexp1 = /foo/; 
regexp1[Symbol.match] = false; 

class MyMatcher { 
    [Symbol.match](string) { 
        return 'hello world'.indexOf(string) ; 
    }
}
'e'.match(new MyMatcher ()) // 1
``` 
**<font color="#d63200">Symbol.matchAll</font>** 返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。此函数可以被 ```String.prototype.matchAll()``` 方法调用。
```JavaScript
let re = /[0-9]+/g;
let str = '2016-01-02|2019-03-07';
let result = re[Symbol.matchAll](str);
console.log(Array.from(result, x => x[0])); // expected output: Array ["2016", "01", "02", "2019", "03", "07"]
``` 
**<font color="#d63200">Symbol.replace </font>** 这个属性指定了当一个字符串替换所匹配字符串时所调用的方法。String.prototype.replace() 方法会调用此方法。
```JavaScript 
class Replace1 {
    constructor(value) {
        this.value = value;
    }
    [Symbol.replace](string) {
        return `s/${string}/${this.value}/g`;
    }
}
console.log('foo'.replace(new Replace1('bar'))); // expected output: "s/foo/bar/g"
``` 
 **<font color="#d63200">Symbol.search</font>** 指定了一个搜索方法，这个方法接受用户输入的正则表达式，返回该正则表达式在字符串中匹配到的下标，这个方法由 ```String.prototype.search()``` 方法来调用 。
```JavaScript 
String.prototype.search(regexp) 
//  等同于
regexp[Symbol.search](this)

class MySearch { 
    constructor (value) { 
    this.value = value ; }
    [Symbol . search] (string) { 
    return string . indexOf(this.value); 
    }
}
'foobar'.search(new MySearch ('foo') ) // 0
``` 
**<font color="#d63200">Symbol.species</font>**  属性指向当前对象的构造函数。创造实例时默认会调用这个方法，即使用这个属性返回的函数当作构造函数来创造新的实例对象.
```JavaScript 
class MyArray extends Array { 
    // 覆盖父类 Array 的构造函数
    static get [Symbol.species]() { return Array; }
}
``` 
上面的代码中，子类 ```MyArray``` 继承了父类 ```Array``` 创建 ```MyArray``` 的实例对象时，本来会调用它自己的构造函数（本例中被省略了），但是由于定义了 ```Symbol.species``` 属性，所以会使用这个属性返回的函数来创建 ```MyArray``` 的实例。             
这个例子也说明，定义 ```Symbol.species``` 属性要采用 get 读取器。默认的 ```Symbol.species``` 属性等同于下面的写法。              
**<font color="#d63200">Symbol.split</font>** 指向一个正则表达式的索引处分割字符串的方法。 这个方法通过 ```String.prototype.split()``` 调用。
```JavaScript 
String.prototype.search(regexp) 
//  等同于
regexp[Symbol.search](this)

class MySplitter { 
    constructor(value) { 
        this.value =value;
    }
    [Symbol.split](string){ 
        var index= string.indexOf(this.value) ;
        if(index === -1){ 
            return string;
        }
        return [ 
            string.substr(O , index) , 
            string.substr(index + this.value.length)
        ]
    }
}
'foobar'. split (new MySplitter ('foo')) // ['','bar']
``` 
**<font color="#d63200">Symbol.toPrimitive</font>**   是一个内置的 Symbol 值，它是作为对象的函数值属性存在的，当一个对象转换为对应的原始值时，会调用此函数，返回该对象对于的原始类型值。             
**<font color="#d63200">Symbol.toPrimitive</font>**   被调用时会接受一个字符串参数，表示当前运算的模式。一共有3种模式。            
+  Number ：该场合需要转成数值
+ String 该场合需要转成字符串。
+ Default ：该场合可以转成数值，也可以转成字符串。
```JavaScript 
const object1 = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 42;
        }
        return null;
    }
};
console.log(+object1); // 42
```
**<font color="#d63200">Symbol.toStringTag</font>** 是一个内置 ```symbol```，它通常作为对象的属性键使用，对应的属性值应该为字符串类型，这个字符串用来表示该对象的自定义类型标签，通常只有内置的 ```Object.prototype.toString()``` 方法会去读取这个标签并把它包含在自己的返回值里。
```JavaScript 
({ [Symbol.toStringTag] :'Foo'}.toString()) // "[object Foo]"
```
**<font color="#d63200">Symbol.unscopables</font>**  指用于指定对象值，其对象自身和继承的从关联对象的 with 环境绑定中排除的属性名称。
```JavaScript 
const object1 = {
    property1: 42
};

object1[Symbol.unscopables] = {
    property1: true
};

with (object1) {
    console.log(property1); // expected output: Error: property1 is not defined
}
```
        