## indexOf() 和 lastIndexOf()
*<font color="#d63200">indexOf()</font>* 方法可返回某个指定的字符串值在字符串中首次出现的位置。    
*<font color="#d63200">lastIndexOf()</font>* 方法可返回一个指定的字符串值最后出现的位置。       
如果没有找到匹配的字符串则返回 -1。
```JavaScript
string.indexOf(searchvalue,start)
// searchvalue：必需。规定需检索的字符串值。
// start：可选。规定在字符串中开始检索的位置。如省略该参数，则将从字符串的首字符开始检索.
// 注意： indexOf() 方法区分大小写。
string.lastIndexOf(searchvalue,start)
// searchvalue：必需。规定需检索的字符串值。
// start：可选。规定在字符串中开始检索的位置。如省略该参数，则将从字符串的最后一个字符处开始检索.
// 注意：
// lastIndexOf() 方法区分大小写。
// lastIndexOf() 方法将从后向前检索字符串，但返回是从起始位置(0)开始计算子字符串最后出现的位置。 看它是否含有字符串。
// lastIndexOf() 方法开始检索的位置在字符串的 start 处或字符串的结尾（没有指定 start 时）。
```  
## search()
*<font color="#d63200">search()</font>* 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回字符串的起始位置。如果没有找到任何匹配的子串，则返回 -1。
```JavaScript
string.search(searchvalue)
// searchvalue：必需。查找的字符串或者正则表达式。
``` 
## match()
*<font color="#d63200">search()</font>* 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
```JavaScript
string.match(regexp)
// regexp：必需。 规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。
``` 
## replace()
*<font color="#d63200">replace()</font>* 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
```JavaScript
stringObject.replace(regexp/substr,replacement)
// regexp/substr：被替换的字符串或者正则表达式
// replacement：替换为的字符串
// 返回值：替换完成以后的一个新字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的
``` 
## slice()
*<font color="#d63200">slice()</font>* 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
```JavaScript
string.slice(start,end)
// start：必须. 要抽取的片断的起始下标(包含)。第一个字符位置为 0
// end：可选。 紧接着要截取的片段结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置
``` 
## split() 
*<font color="#d63200">split() </font>* 方法用于把一个字符串分割成字符串数组。
```JavaScript
string.split(separator,limit)
// separator：可选。字符串或正则表达式，从该参数指定的地方分割 string Object。
// limit：可选。该参数可指定返回的数组的最大长度。 如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
```
## substr() 和 substring()
*<font color="#d63200">substr()</font>* 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。                                                          
*<font color="#d63200">substring()</font>* 方法用于提取字符串中介于两个指定下标之间的字符，返回的子串包括 开始 处的字符，但不包括 结束 处的字符。
```JavaScript
string.substr(start,length)
// start：必需。要抽取的子串的起始下标。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。
// length：可选。子串中的字符数。 如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。
// 注意：substr()方法不会改变源字符串
string.substring(from, to)
// from：必需。一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
// to：可选。如果省略该参数，那么返回的子串会一直到字符串的结尾。

```

## trim()
*<font color="#d63200">trim()</font>* 方法用于删除字符串的头尾空格。
```JavaScript
var str = '  trim()   方法   '
console.log(str.trim())
// 注意：trim()方法不会改变原始字符串,返回一个新的字符串。
```  
## toLowerCase()  和 toUpperCase()
*<font color="#d63200">toLowerCase()</font>* 方法用于把字符串转换为小写。    
*<font color="#d63200">toUpperCase()</font>* 方法用于把字符串转换为大写。 
