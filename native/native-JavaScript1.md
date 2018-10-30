# 原生JavaScript简介

## 内置类型
	JS 中分为七种内置类型，七种内置类型又分为两大类型：基本类型和对象
	基本类型有六种： null，undefined，boolean，number，string，symbol。
## Typeof
	typeof 对于基本类型，除了 null 都可以显示正确的类型,使用typeof可以得到六种类型
```javascript
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof 'abc') //string
console.log(typeof 123) //number
console.log(typeof true) //boolean
console.log(typeof []) // object
console.log(typeof {}) //object
console.log(typeof console.log) //function
console.log(typeof Symbol())//symbol
```
**注意：当我们需要判断数据类型时，我们一般不用typeof进行判断，想上面所展示的，对象和数组和null使用typeof判断返回的都是object，不足以进行判断。准确的得到数据类型我们应该使用使用Object.prototype.toString.call(xx)**
```javascript 
console.log(Object.prototype.toString.call(null)) //[object Null]
console.log(Object.prototype.toString.call([]))  // [object Array]
```
##变量提升和函数提升
```javascript
//(1)变量提升
//全局范围内的变量提升
console.log(a) //undefined
var a = 1
console.log(a) // 1

//函数范围内的变量提升
function fn(){
    console.log(a) // undefined 当在函数作用域内找不到对应变量时，会向上寻找
    console.log(b) //undefined
    var a = 2
    var b = 2

    console.log(a) //2
    console.log(b) //2
}
fn()

//(2)函数提升
//js中声明函数有函数声明和函数表达式两种方式，只有函数声明存在函数提升

console.log(fn1) //function fn1(){}
console.log(fn2) //undefined
fn1()
function fn1(){console.log(1)}//函数声明
var fn2 = function(){}//函数表达式
```
## 作用域和作用域链
```javascript
//在es5中只有函数作用域和全局作用域
function fn(){
    for(var i = 0; i < 10; i++){

    }
    console.log(i)//10
}
fn()
//上面的代码块中i输出的是10

//在es6中是没有这个问题的，es6中用let声明的变量属于块级作用域
function fn1(){
    for(let i = 0; i < 10; i++){

    }
    //console.log(i)//出错
}
fn1()

//但要注意的是，es5中没有用var声明的变量会变为全局变量
function fn2(){
    a = '我是fn2里面的变量'
}
fn2()
console.log(a)//输出的是:我是fn2里面的变量

//es5如果要实现块级作用域需要用到闭包
function out(){
    var num = 1
    return function(){
        console.log(num++)
    }
}

var inner = out()
inner()//1
inner()//2
//num被保存了下来

//作用域链
var globe = 'out'
function fn3(){
    var a = 'inner'
    console.log(globe)//out
}
fn3()
//当在函数作用域内找不到对应的变量时，js会向上全局作用域寻找变量
```
## 匿名函数和闭包
```javascript
//官方对闭包的解释是：一个拥有许多变量和绑定了这些变量的环境的表达式
//（通常是一个函数），因而这些变量也是该表达式的一部分
//闭包
//包是指有权访问另一个函数作用域中的变量的函数， 创建闭包的常见的方式， 就是在
//一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量。
function fn1(){
    var a = 1
    return function(){
        console.log(a++)
    }
}
//匿名函数和闭包的结合,a保存在了内存中，所以能一直累加
var inner = fn1()
inner()//1
inner()//2

//匿名函数和闭包我注意到的有两点

//（1）下面的函数由于函数作用域的原因，返回的结果都是五
function out1(){
    var arr = []
    for(var i = 0; i < 5; i++){
        arr[i] = function(){
            console.log(i)
        }
    }
    return arr
}
var outFn = out1()
for(var i = 0; i < 5; i++){
    outFn[i]()//很尴尬，全是五，不按套路出牌
}



//怎么解决呢，当然是匿名函数自动执行啊
function out2(){
    var arr = []
    for(var i = 0; i < 5; i++){
        arr[i] = (function(num){
            return num
        })(i)//关键，让函数自动执行保存变量
    }
    return arr
}

var outFn = out2()
for(var i = 0; i < 5; i++){
   console.log(outFn[i])
}



console.log("~~~~~~~~~~~~~~~~~")
function setTime(){
    var arr = []
    for(var i = 0; i < 5; i++){
        (function(num){
            setTimeout(function(){
                console.log(num)
            }, 0);
        })(i)
    }
}
setTime()

console.log("~~~~~~~~~~~~~~~~~")
function fn(){
    var arr = []
    for(var i = 0; i < 5; i++){
        setTimeout((a) => {
            console.log(a)
        }, 10,i);
    }
}
fn()
```
##this
```javascript
/*
每次调用函数时，浏览器都会把一个对象作为隐藏的参数传递进函数，这
个对象就是函数执行的上下文对象，我们可以通过 this 来引用该对象。
根据函数的调用形式的不同，this 的值也不同：
1.以函数的形式调用时，this 永远都是window ；
2.以方法的形式调用时，谁调用 this 就是谁；
3.如果以构造函数的形式调用，this 就是新创建的那个对象；
4.通过call和apply调用时，第一个参数会成为this。


总结：
1.本质上任何函数在执行时都是通过某个对象调用的
2.this就代表调用函数的当前对象
3.在调用函数时，this还没有确定，只有在执行时才确定
4.当调用函数时没有明确指定当前对象，this就是全局对象window。

区别bind() ，call() , apply():
三者都可以指定函数中的this；
但： call 和 apply 在指定this后 会立即调用该函数，
而，bind 在指定this后 返回该函数，没有立即调用。*/

var name = '1'

//绑定
var obj = {
    name:'2',
    f:{
        name:'3',
        show:function(){
            console.log(this.name)
        }
    }
}

obj.f.show()//3  这个是链式调用，this指向最后的函数域
var k = obj.f.show //我的理解是这个只是找到show这个函数，并没有调用
k()//1  调用的时候是由window调用的（隐式丢失）


//有一点需要注意的是，在settimeout中，this指向的是全局
var set = 'out'
var obj1 = {
    set:'inner',
    show1:show
}
function show(){
    console.log(this.set)
    
}
setTimeout(obj1.show1, 1000);//在node环境中输出的是undefined


//使用call，apply和bind显示的改变this,其中call和apply只是存在参数传递方式的区别，bind不会立即绑定this,而是在调用的时候绑定（自己理解的，不知道有没错）
var obj3 = {
    name:'德莱厄斯',
    age:'30'
}
var obj2 = {
    name: '德玛',
    age:'25',
    show:function(description,girlFriend){
        console.log(this.name + '  ' + this.age + '描述：' + description +'    '+ '他的女朋友:' + girlFriend)
    }
}
obj2.show.call(obj3,'帅','维恩')//obj3为this指向


obj2.show.apply(obj3,['帅','维恩'])

obj2.show.bind(obj3,'帅','维恩')()//返回的是一个函数，需要调用生效


//bind还可以这样传参（ps:好像没什么卵用）
function fn4(num){
    console.log(this.a+num)
}

var outObj = {
    a:2
}

var obj2 = {
    a:3,
    show:fn4
}

var b = obj2.show.bind(outObj)
b(6)
```
## Array和String中的方法对比
###slice和splice方法
```javascript
//slice(该方法为数组和String共有),
//方法不会改变原数组，返回处理后的新数组
var arr = [1,2,3,4,5,6]

var arrSli = arr.slice(1,3)//参数表示开始下标和结束下标

console.log(arr)//[1,2,3,4,5,6]
console.log(arrSli)//[2,3]

//splice
//方法会改变原数组，返回处理后的原数组
var arr1 = [1,2,3,4,5,6]

arr1.splice(2,0,1) //第一个参数表示开始下标，第二个表示删除元素的数量，之后的元素表示添加的数量，输出[ 1, 2, 1, 3, 4, 5, 6 ]
console.log(arr1)
```
###String和Array的相互转换
```javascript
	//String转Array
{
    let str = '德玛西亚万岁'
    let arr = str.split("")
    console.log(str)
    console.log(arr)
    console.log(Array.isArray(arr))
}

//Array转String
//方法一
{
    let arr = [1,2,3,4]
    let str = arr.toString()
    console.log(arr)
    console.log(str)
}
//方法二
{
    let arr = [1,2,3,4]
    let str = arr.join(",")
    console.log(arr)
    console.log(str)
}
```

###substr,substring,slice的区别
```javascript
//slice 
{
    let str = '德玛西亚万岁'
    let str1 = str.slice(1,3)//两个参数分别代表开始下标和结束下标，如果第二个参数没填，则从开始下标到字符结尾
    console.log(str1)//玛西
}

//substr
{
    let str = '德玛西亚万岁'
    let str1 = str.substr(1,3)//两个参数分别代表开始下标和需要截取的字符串的长度，如果第二个参数不填，代表从开始下标到字符串结尾
    console.log(str1)//玛西亚
}

//substring
{
    let str = '我的剑飞向真理'
    let str1 = str.substring(1)//两个参数分别代表开始下标和结束下标，如果第二个参数没填，则从开始下标到字符结尾
    console.log(str1)
}
```
##常用获取页面宽高的方法
```javascript
document.body.clientWidth ==> BODY对象宽度  
document.body.clientHeight ==> BODY对象高度  
document.documentElement.clientWidth ==> 可见区域宽度  
document.documentElement.clientHeight ==> 可见区域高度  
  
网页可见区域宽： document.body.clientWidth  
网页可见区域高： document.body.clientHeight  
网页可见区域宽： document.body.offsetWidth (包括边线的宽)  
网页可见区域高： document.body.offsetHeight (包括边线的高)  
网页正文全文宽： document.body.scrollWidth  
网页正文全文高： document.body.scrollHeight  
网页被卷去的高： document.body.scrollTop  
网页被卷去的左： document.body.scrollLeft  
网页正文部分上： window.screenTop  
网页正文部分左： window.screenLeft  
屏幕分辨率的高： window.screen.height  
屏幕分辨率的宽： window.screen.width  
屏幕可用工作区高度： window.screen.availHeight  
屏幕可用工作区宽度： window.screen.availWidth  

HTML精确定位:scrollLeft,scrollWidth,clientWidth,offsetWidth   
scrollHeight: 获取对象的滚动高度。   
scrollLeft:设置或获取位于对象左边界和窗口中目前可见内容的最左端之间的距离   
scrollTop:设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离   
scrollWidth:获取对象的滚动宽度   
offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度   
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置   
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置   
event.clientX 相对文档的水平座标   
event.clientY 相对文档的垂直座标   
event.offsetX 相对容器的水平坐标   
event.offsetY 相对容器的垂直坐标   
document.documentElement.scrollTop 垂直方向滚动的值   
event.clientX+document.documentElement.scrollTop 相对文档的水平座标+垂直方向滚动的量
```
##DOM简介
###节点分类
```javascript
1. 元素节点：<html>、<body>、<p>等都是元素节点，即标签。
2. 文本节点:向用户展示的内容，如<li>...</li>中的JavaScript、DOM、CSS等文本。
3. 属性节点:元素属性，如<a>标签的链接属性href="http://www.baidu.com"。
```
###dom常用方法
####遍历方法
| 遍历节点树    |   |
| --------   |  
| childNodes     | 返回一个数组，这个数组由给定元素的子节点构成
| firstChild      |   返回第一个子节点
| lastChild        |    返回最后一个子节点
| parentNode  | 返回一个给定节点的父节点
| nextSibling  | 返回给定节点的下一个子节点
| previousSibling  | 返回给定节点的上一个子节点
**注意：nextSibling，previousSibling，firstChild，lastChild，childNodes返回到的都是下一个节点，包括文本节点，如果要返回元素节点需要用到返回元素节点的特定方法，如：nextElementSibling，firstElementChild等**
### 对节点进行操作
| DOM操作   |   |
| --------   |  
| creatElement(element)     |创建一个新的元素节点
| creatTextNode()     |   创建一个包含给定文本的新文本节点
| appendChild()       |    	指定节点的最后一个节点列表后添加一个新的子节
| insertBefore()  |	将一个给定节点插入到一个给定元素节点的给定子节点的前面
| removeChild()  | 从一个给定元素中删除子节点
| replaceChild()  | 	把一个给定父元素里的一个子节点替换为另外一个节点

** 注意：replaceChild()removeChild()insertBefore()appendChild() 都是要指定父节点的，insertBefore()有两个参数，第一个为newItem,第二个为插入的地方**

##dom阻止默认行为和冒泡
```javascript
//阻止冒泡
e.stopPropagation();//w3c
e.cancelBubble=true;//ie

//阻止默认行为
event.preventDefault();//w3c
event.returnValue = false;//ie

//删除事件
 element.removeEventListener(type,handler,false);//w3c
 element.detachEvent("on" + type,handler); //ie
 
//添加事件
element.addEventListener(type,handler,false);//w3c
element.attachEvent("on" + type,handler);//ie
```
##BOM简介
###window对象常用方法
```javascript
window.close();  //关闭窗口  

window.alert("message");  //弹出一个具有OK按钮的系统消息框，显示指定的文本 

window.confirm("Are you sure?");  //弹出一个具有OK和Cancel按钮的询问对话框，返回一个布尔值  

window.prompt("What's your name?", "Default");  //提示用户输入信息，接受两个参数，即要显示给用户的文本和文本框中的默认值，将文本框中的值作为函数值返回  

window.status  //可以使状态栏的文本暂时改变  

window.defaultStatus  //默认的状态栏信息，可在用户离开当前页面前一直改变文本  

window.setTimeout("alert('xxx')", 1000);  //设置在指定的毫秒数后执行指定的代码，接受2个参数，要执行的代码和等待的毫秒数  

window.clearTimeout("ID");  //取消还未执行的暂停，将暂停ID传递给它  

window.setInterval(function, 1000);  //无限次地每隔指定的时间段重复一次指定的代码，参数同setTimeout()一样  

window.clearInterval("ID");  //取消时间间隔，将间隔ID传递给它  

window.history.go(-1);  //访问浏览器窗口的历史，负数为后退，正数为前进 

window.history.back();  //同上  

window.history.forward();  //同上  

window.history.length  //可以查看历史中的页面数   
```

###location对象常用方法
```javascript
location对象：表示载入窗口的URL，也可用window.location引用它  

location.href  //当前载入页面的完整URL，如http://www.somewhere.com/pictures/index.htm  

location.portocol  //URL中使用的协议，即双斜杠之前的部分，如http 

location.host  //服务器的名字，如www.wrox.com  

location.hostname  //通常等于host，有时会省略前面的www  

location.port  //URL声明的请求的端口，默认情况下，大多数URL没有端口信息，如8080 

location.pathname  //URL中主机名后的部分，如/pictures/index.htm  

location.search  //执行GET请求的URL中的问号后的部分，又称查询字符串，如?param=xxxx  

location.hash  //如果URL包含#，返回该符号之后的内容，如#anchor1  

location.assign("http:www.baidu.com");  //同location.href，新地址都会被加到浏览器的历史栈中  

location.replace("http:www.baidu.com");  //同assign()，但新地址不会被加到浏览器的历史栈中，不能通过back和forward访问  

location.reload(true | false);  //重新载入当前页面，为false时从浏览器缓存中重载，为true时从服务器端重载，默认为false  
```

###screen常用方法
```javascript
  screen对象：用于获取某些关于用户屏幕的信息，也可用window.screen引用它  

  screen.width/height  //屏幕的宽度与高度，以像素计  

  screen.availWidth/availHeight  //窗口可以使用的屏幕的宽度和高度，以像素计 

  screen.colorDepth  //用户表示颜色的位数，大多数系统采用32位  

  window.moveTo(0, 0);  

  window.resizeTo(screen.availWidth, screen.availHeight);  //填充用户的屏幕   
```
















