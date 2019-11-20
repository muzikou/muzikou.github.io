### 关于input输入框placeholder属性的样式问题
正常情况下，我们写的 *<font color="#d63200">input</font>* 的默认样式是这样的：   
![placeholder default](/img/css/placeholder/2.png) 

但是开发过程中，我们需要实现的效果是这样的：    
![placeholder](/img/css/placeholder/1.png)  

实现方法很简单，我们只需要在 *<font color="#d63200">style</font>* 样式里进行如下设置，同时因为适配问题，总体代码如下：    
```css
:-ms-input-placeholder{
    color: #7ed5c4;
}/* Internet Explorer 10+ */
::-webkit-input-placeholder{
    color: #7ed5c4;
}/* WebKit browsers */
::-moz-placeholder{
    color: #7ed5c4;
} /* Mozilla Firefox 19+ */
:-moz-placeholder{
    color: #7ed5c4;
}/* Mozilla Firefox 4 to 18 */
```