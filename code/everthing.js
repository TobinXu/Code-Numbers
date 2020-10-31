// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }

// import { reject } from "async";

// import { promises } from "dns";
// import { timeout } from "async";

// import { fromStringWithSourceMap } from "source-list-map";

// import { readFile } from "fs";

// a[6]();
//不要使用 块级作用域声明函数不推荐
// {
//     let a = 'secret';
//     function f() {
//         return a;
//     }
// }

// //块级作用域内部，优先使用函数表达式
// {
//     let a = 'secret';
//     let f = function () {
//         return a;
//     };
// }

//不报错
// 'use strict'
// if (true) {
//     function f() {}
// }

//报错
// 'use strict'
// if(true) 
// function f() {}

// const PI = 3.1416;
// PI;

// if (true) {
//     const MAx = 5;
// }
// MAX;

// 本质 § ⇧
// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
// 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
// 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
// const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，
// 就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

// const foo = {};
// foo.prop = 123;
// foo.prop

// const a = [];
// a.push('hello');
// a.length = 0;
// a = ['Dave'];
// console.log(a);

// var constantize = (obj) => {
//     Object.freeze(obj);
//     Object.keys(obj).forEach( (key, i) => {
//         if ( typeof obj[key] === 'object') {
//             constantize( obj[key] );
//         }
//     });
// };

// var a = 1;
// window.a;

// let b =1;
// window.b;

// 很难找到一种方法，可以在所有情况下，都取到顶层对象。下
// 面是两种勉强可以使用的方法。
//方法一
// (typeof window !== 'undefined'
//     ? window
//     : (typeof process === 'object' &&
//        typeof require === 'function' &&
//        typeof global === 'object')
//        ? global
//        : this);
// //方法二
// var getGlobal = function () {
//     if (typeof self !== 'undefined') { return self; }
//     if (typeof window !== 'undefined') { return window; }
//     if (typeof global !== 'undefined') { return global;}
//     throw new Error('unable to locate global object');
// };

// let [a, b, c] = [1, 2, 4];

// let [foo, [[bar], baz]] = [1, [2], 3];
// foo;
// let [ , , third] = ["foo", "bar", "baz"];
// third;

// let [x,y,z] =new Set(['a', 'b', 'c']);
// x;

// var tt = ... new Set([5, 5, 6, 6, 3, 3, 2]);

// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;//yield这个关键字是用来暂停和恢复一个遍历器函数（的运行）的。
//         [a,b] = [b, a+b];
//     }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth;

// function* foo(index) {
//     while (index < 5) {
//       yield index++;
//     }
//   }
  
//   const iterator = foo(0);
  
//   console.log(iterator.next().value);
//   // expected output: 0
  
//   console.log(iterator.next().value);
//   // expected output: 1
  
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
// function* foo(index) {
//   while (index < 5) {
//     yield index++;
//   }
// }

// const iterator = foo(0);

// console.log(iterator.next().value);
// // expected output: 0

// console.log(iterator.next().value);
// // expected output: 1

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// 生成 0 1 2 3 4 undefined  

// let {foo, baz } = { foo:'aaa', bar: 'bbb'};
// foo;
// bar;

// function add([x, y]){
//     return x + y;
// }
// add([1, 2]);

// let x = 1;
// let y = 2;
// [x, y] = [y ,x];

// //返回一个数组
// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
// //返回一个对象
// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let { foo, bar } = example();

// //参数时一组有次序的值
// function f([x, y, z]) {...}
// f([1 ,2 ,3]);

// //参数十一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});

// //提取json数据
// let jsonData = {
//     id:42,
//     status: 'OK',
//     data: [854, 344]
// };
// let {id, status, data: number} =jsonData;
// console.log(id, status, number);

// //函数参数的默认值
// jQuery.ajax = function (url, {
//     async =true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global =true,
//     //more config
// } = {}) {
//     //。。。do stuff
// };

// //遍历Map结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key,value] of map) {
//     console.log(key + " is " + value);
// }

// for (let codePoint of 'foo') {
//     console.log(codePoint)
// }

// let text = String.fromCodePoint(0x20BB7);
// for (let i=0; i<text.length; i++) {
//     console.log(text[i]);
// }

// for (let i of text) {
//     console.log(i);
// }

// let a = 5;
// let b = 10;
// function tag(s, v1, v2) {
//     console.log(s[0]);
//     console.log(s[1]);
//     console.log(s[2]);
//     console.log(v1);
//     console.log(v2);

//     return 'OK';
// }
// tag`Hello ${ a + b } world ${ a * b }`;

// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
// function passthru(literals) {
//     let result = '';
//     let i=0;
//     while (i< literals.length) {
//         result += literals[i++];
//         if(i < arguments.length) {
//             result += arguments[i];
//         }
//     }
//     return result;
// }

// console.log(msg);

// const s = '   abc   ';
// s.trim();
// s.trimStart();
// s.trimRight();
// console.log(s);

// let s = Symbol();
// typeof s

// async function getStockPriceByName(name) {
//     const symbol = await getStockSymbol(name);
//     const stockPrice = await getStockPriceByName(symbol);
//     return stockPrice;
// }

// getStockPriceByName('goog').then(function (result) {
//     console.log(result);
// });

// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }

// asyncPrint('Hello World',500);

// function Point(x ,y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function () {
//     return '(' + this.x + ',' + this.y + ')';
// };
// var p =new Point(1, 2);

// class Point {
//     constructor(x, y) {
//         this.x =x;
//         this.y = y;
//     }

//     toString() {
//         return '(' + this.x +',' +this.y + ')';
//     }
// }

// class Bar {
//     doStuff() {
//         console.log('stuff');
//     }
// }
// var b = new Bar();
// b.doStuff();

// class Point {
//     cosntructor(){}
// }
// Object.assign(Point.prototype, {
//     toString(){},
//     toValue(){}
// });

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         this.color =color; //ReferenceError
//         super(x, y); //调用父类的constructor(x, y)
//         this.color =color; //正确
//     }
//     toString() {
//         return this.color + ' ' + super.toString(); //调用父类的toString()
//     }
// }

// class MyArray extends Array {
//     constructor(...args){
//         super(...args);
//     }
// }
// var arr = new MyArray();
// arr[0] = 12;
// arr.length;

// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
// var hw = helloWorldGenerator();

//使用Proxy实现观察者模式
// const person = observable({
//     name: '张三',
//     age: 20
// });

// function print() {
//     console.log(`${person.name}, ${person.age}`)
// }

// observe(print);
// person.name = '李四';

// const queuedObservers = new Set();
// const observable = obj => new Proxy(obj, {set});
// function set(target, key, value, receiver) {
//     const result = Reflect.set(target, key, value, receiver);
//     queuedObservers.forEach(observe => observe());
//     return result;
// }

// function * f() {
//     console.log('执行了！')
// }
// var generator = f();
// setTimeout(function () {
//     generator.next()
// }, 2000);

//多个回调函数嵌套形成回调函数地域
//使用promise进行解决
// var readFile = require('fs-readfile-promise');
// readFile(fileA)
// .then(function (data) {
//     console.log(data.toString());
// })
// .then(function () {
//     return readFile(fileB);
// })
// .then(function (data){
//     console.log(data.toString());
// })
// .catch(function (err){
//     console.log(err);
// })
// /*我使用了fs-readfile-promise模块，它的作用就是返回一个 Promise 版本的readFile函数。
// Promise 提供then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。*/
// readFile(fileB)
// .then(function (data){
//     console.log(data.toString());
// })
// .then(function(){
//     return readFile(fileC);
// })
// .then(function() {
//     console.log(data.toString);
// })
// .catch(function(err){
//     console.log(err);
// })

// function* gen(x) {
//     var y = yield x + 2;
//     return y;
// }
// var g = gen(1);
// g.next();
// g.next();

// function * gen(x){
//     try {
//         var y = yield x + 2;
//     }catch (e){
//         console.log(e);
//     }
//     return y;
// }
// var g =gen(1);
// g.next();
// g.throw('出错了');

// [...new Set('aabbcc')].join('');

// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];
// console.log(materials.map((material => material.length))); //输出 Array [8,6,7,9]
// 普通函数
// materials.map(function(element){
//     return element.length;
// });
// 箭头函数
// materials.map((element) => {
//     return element.length;
// });

// const promise = new Promise1(function(resolve,reject){
//     //some code
//     if(/*异步操作成功*/){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });

// const promise = new Promise2(function(resolve,reject){
//     //some code
//     if(/*成功*/){
//         resolve(value);
//     } else {
//         reject(value);
//     }
// });

// const promise = new Promise3(function(resolve,reject){
//     //some code
//     if(/*成功*/){
//         resolve(value);
//     } else {
//         reject(value );
//     }
// });

// promises.then(function(value){
//     //success
// },function(error){
//     //failure
// });
// import { promises } from "dns";
// import { reject } from "async";

// function timeout(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'done');
//     });
// }
// timeout(100).then((value)=> {
//     console.log(value);
// })

// function timeout(ms){
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'fuck');
//     });
// }
// timeout(100).then((value)=>{
//     console.log(value);
// })

// let promise = new Promise(function(resolve,reject){
//     console.log('Promise');
//     resolve();
// });
// promise.then(function(){
//     console.log('resolved.');
// });
// console.log('HI');

//异步加载图片
// funciton loadImageAsync(url) {
//     return new Promise(function(resolve,reject){
//         const image = new Image();
//         image.onload = function() {
//             resolve(image);
//         };
//         image.onerror = function() {
//             reject(new Error('Could not load image at '+ url));
//         };
//         image.src = url;
//     })
// }

//用Promise对象实现Ajax操作
// const getJson = function(url) {
//     const promise = new Promise(function(resolve,reject){
//         const handler = function() {
//             if(this.readyState !== 4) {
//                 return;
//             }
//             if(this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open('GET',url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept","application/json");
//         client.send();
//     });
//     return promise;
// };
// getJson("/posts.json").then(function(json){
//     console.log('Contents:' + json);
// },function(error){
//     console.log("出错了",error);
// });


// 快速排序之哨兵相遇交换法

// function Quick_sort(arr,l,r){
//     var i=l; //哨兵i
//     var j=r; //哨兵j
//     var key=arr[l]; //基准数
//     if(l>=r){return;}  //如果数组只有一个元素，退出
//     while(i<j){
//         while(i<j&&arr[j]>key){ //从右往左找，找第一个比key小的数，找到或者两个哨兵相遇跳出循环
//             j--;
//         }
//         while(i<j&&arr[i]<=key){ //从左往右找，找第一个比key大的数，找到或者两个哨兵相遇跳出循环
//             i++;                 //=号的目的是防止key和arr[j]进行交换
//         }
//         if(i<j){ //交换元素
//         var temp=arr[j];
//         arr[j]=arr[i];
//         arr[i]=temp;
//         }
//     }
//     arr[l]=arr[i];
//     arr[i]=key;
//     Quick_sort(arr,l,i-1);
//     Quick_sort(arr,i+1,r);
// }

// var arr=[1,4,2,3,8,3,5,9,1,4];
// console.log(arr);
// Quick_sort(arr,0,arr.length-1);
// console.log(arr);

// js实现快速排序 挖萝卜坑法则
// function quick_sort(s,l,r){
//     var i=l;
//     var j=r;
//     var  key=s[i];
//     if(l>=r){return;}
//     while(i<j){
//         while(i<j&&arr[j]>=key){
//             j--;
//         }
//         if(i<j){
//             s[i]=s[j];
//         }
//         while(i<j&&arr[i]<=key){
//             i++;
//         }
//         if(i<j){
//             s[j]=s[i];
//         }
//     }
//     s[i]=key;
//     quick_sort(arr,l,i-1);
//     quick_sort(arr,i+1,r);

// }

// var arr=[6,3,8,7,9,1,3,5,3,8,2,9];
// console.log(arr);
// quick_sort(arr,0,arr.length-1);
// console.log(arr);

//暴力冒泡
// function pop_sort(){
//     var arr=[1,4,2,6,9,8];
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;       
//             }
//         }
//     } 
//    console.log(arr);
// }
// pop_sort();

//标志位冒泡
// function pop_sort(){
//     var arr=[1,4,2,6,9,8];
//     var flag=1;
//     var position=0;
//     var len=arr.length-1;
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<len;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//                 flag=0;  
//                 position=j;     
//             }
//         }
//         len=position;
//         if(flag==1){
//             break;
//         }
//     } 
//    console.log(arr);
// }
// pop_sort();
// //求质数方法一
// function IsPrime(N){
//     var arr=[2,3];
//     for(var i=4;i<N;i++){
//         var flag=true;
//         for (var j=2;j<=i/2;j++){
//             if(i%j==0){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     console.log(arr.length);
// }
// IsPrime(1000);

//求质数方法二
// function IsPrime(N){
//     var arr=[2,3];
//     for(var i=4;i<N;i++){
//         var flag=true;
//         for (var j=2;j<=Math.sqrt(i);j++){
//             if(i%j==0){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     console.log(arr.length);
// }
// IsPrime(1000);

// var arr=[1,2];
// console.log([...arr].pop());
// console.log(arr);

//js实现括号匹配
// function SingUp(arr){
//     var arr=['{','(','[',']',')','}'];
//     var temp =[];
//     var flag=true;
//     for(let i=0;i<arr.length;i++){
//         var x=arr[i];
//         switch(x){
//             case '(' :
//             case '{' :
//             case '[' :
//             temp.push(x);
//             break;
//             case ')' :
//             case '}' :
//             case ']' :
//                 topEle=temp.pop();
//                 if(topEle=='{'&&x=='}'||topEle=='('&&x==')'||topEle=='['&&x==']'){
//                    continue;
//                 }
//                 else{
//                     // console.log('括号不匹配')将标志位置为false;
//                     flag=false;
//                 }
//         }
//     }
//     if(flag){
//         console.log('括号匹配');
//     } else {
//         console.log('括号不匹配');
//     }
// }
// SingUp();

// 在数组中找出连续数列等于目标值

// function findSum(num,sum){
//     var right=0;
//     var left=0;
//     for(let i=0; i<num.length;i++){
//         right=i;
//         left=i;
//         var curSum=0;
//         while(curSum<sum){
//             curSum+=num[right++];
//         }
//         if(curSum==sum){
//             for(let j=left; j<right; j++){
//                 console.log(num[j]);
//             }
//             console.log("\n");
//         }
//     }
// }

// var num=[1,2,2,3,4,5,6,7,8,9];
// var sum=7;
// findSum(num,sum);


// var a = [1,2,3,4,5,6,25,60];
//  console.log(Math.max.apply([],a));
//  apply中第一个参数指向一个对象，第二个是用数组存储的元素。

//闭包实现累加
// function a(numberOne){
//     var count=numberOne;
//     return function b(numberTwo){
//         if(numberTwo===undefined){
//             return count;
//         }
//         count+=numberTwo;
//         return b;
//     }
// }
// console.log(a(2)(3)());

//计数器
// function add2(){
//     count =2;
//     return function() {
//         count+=2;
//         console.log(count);
//     }
// }

// var add1=add2();
// add1();
// add1();
// var add3=add2();
// add3();

//闭包输出0,1,2,3
// for (var i=0;i<4;i++){
//     setTimeout(
//         function(){
//             var temp=i;
//             return function(){
//                 console.log(temp);
//             }
//         }(),300)
// }

// for(var i=0;i<4;i++){
//     setTimeout(
//         function(){
//             var temp=i;
//             return function(){
//                 console.log(temp);
//             }
//         }(),300)
// }

// console.log(Object.prototype.toString.call([1,2,3]));
// console.log(Object.prototype.toString.call(/regexp-literal/i));

// console.log(typeof NaN);

// var nun=new Array(8);
// console.log(nun[2]);

// var x ="120000000000000000000";

// console.log(x.replace(/(\d)(?=(?:\d{3})+\.)/g,","));

// promise 异步对象的学习
// const fn = new Promise(function (resolve,reject ){
//     setTimeout(() => {
//         let num = Math.ceil(Math.random() * 10) //假设num算出来是10
//         if ( num > 5 ) {
//             resolve(num)
//         } else {
//             reject(num)
//         }
//     }, 2000)
// })

// fn.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })
// 这是一个最简单的Promise使用，假设2秒之后生成了随机数10，那么resolve回调函数运行
// then走第一个函数，console.log(7)
// 假设2秒后随机数3，那么reject函数运行。then走第二个函数，console.log(3)

// const fm =new Promise( function(resolve,reject){
//     setTimeout(() => {
//         let num = Math.ceil( Math.random()* 10)
//     if(num>5) {
//         resolve(num);
//     } else {
//         reject(num);
//     }
//     }, 2000)
    
// })

// fm.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })

// const fk = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let num = Math.ceil(Math.random() * 10) 
//         if (num > 5) {
//             resolve(num)
//         } else {
//             reject(num)
//         }
//     }, 2000)
// })

// fk.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })

// fn = new Promise(function (resolve, reject) {
//     let num = Math.ceil(Math.random() * 10)
//     if (num >5) {
//         resolve(num)
//     } else {
//         reject(num)
//     }
// })
// //第一次回调
// fn.then((res) => {
//     console.log(`res==>$(res)`)
//     return new Promise((resolve, reject) => {
//         if (2 * res > 15) {
//             resolve(2 * res)
//         } else {
//             reject(2*res)
//         }
//     })
// }, (err) => {
//     console.log(`err==>${err}`)
// }).then((res) => {  //第二次回调
//     console.log(res)
// }, (err) => {
//     console.log(`err==>${err}`)
// })

// Promise 是一个构造函数，接收一个函数作为参数，返回一个 Promise 实例,这个函数里面接受两个参数
// 分别是resolve函数和reject函数，状态的改变是通过 resolve() 和 reject() 函数来实现的，我们
// 可以在异步操作结束后调用这两个函数改变 Promise 实例的状态，它的原型上定义了一个 then 方法，
// 使用这个 then 方法可以为两个状态的改变注册回调函数。这个回调函数属于微任务，会在本轮事件循环的末尾执行。
// 在Promise的内部，有一个状态管理器，有三种状态：pending，fulfilled，rejected。 
// promise对象的初始状态为pending，
// 当调用resolve（成功），会由pending=>fulfilled
// 当调用reject(失败)，会由pending=>rejected
// 状态一旦修改，不可改变。
// 当状态为fulfilled(rejected反之)时，then的成功回调函数被调用，并接受上面传来的num
// 进行相应的操作。

// //catch的用法
// fn.then((res) => {
//     console.log(`res==>$(res)`)
//     return new Promise((resolve, reject) => {
//         if (2 * res > 15) {
//             resolve(2 * res)
//         } else {
//             reject(2*res)
//         }
//     })
// }, (err) => {
//     console.log(`err==>${err}`)
// }).then((res) => {  //第二次回调
//     console.log(res)
// }).catch((err) => {
//     console.log(`err==>${err}`)
// })

// //Promise.resolve返回一个fulfilled状态的promise对象，Promise.reject返回一个rejected状态的promise对象
// Promise.resolve('hello').then(function(value) {
//     console.log(value);
// });

// Promise.resolve('hello');
// //相当于
// const promise = new Promise(resolve => {
//     resolve('hello');
// });

// //reject
// Promise.reject('hello');
// //相当于
// const promise = new Promise(reject => {
//     resolve('hello');
// });

// promises all方法就是 作为几个参数的对象一旦有一个状态为rejected，则all的返回值就是rejected。
// 当几个参数的函数的返回状态都为fulfilled时，至于最后输出的时间就看谁跑的慢。
// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('1s') //1秒后输出去
//         resolve(1)
//     }, 1000)
// })
// let p10 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('10s') //10s后输出
//         resolve(10)
//     })
// }, 10000)
// let p5 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('5s')  //5s后输出
//         resolve(5)
//     }, 5000)
// })

// Promise.all([p1,p10,p5]).then((res) => {
//     console.log(res);  //最后输出
// })

// //运行结果是，根据谁最后原则，10s后输出[1,10,5]

// //使用race方法 做一些超时操作
// //请求某个图片资源
// let requestImg = new Promise(function(resolve, reject) {
//     var img = new Image();
//     img.onload = function() {
//         resolve(img);
//     }
// });
// //延时函数，用于给请求计时
// let tineOut = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('图片请求超时');
//     }, 5000);
// });

// Promise.race([requestImg, timeout]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Promise值穿透
// .then或者.catch的参数期望是函数，传入非函数会发生值穿透
// Promise.resolve(1)
// .then(2)
// .then(Promise.resolve(3))
// .then(console.log)
// 输出： 1；

// async function ajaxGetData() {
//     xxx
//     dosomething()
//     await ajaxGetDataFirst()
//     dosomething()
//     await ajaxGetDataSecond()
//     dosomething()
//     xxx
// }
// ajaxGetData()

// 我们做了一些事情，然后到一个异步的ajax请求后，等待ajaxGetDataFirst这个异步的事件执行完毕后，
// 开始继续做一些事情，到了第二个ajax异步请求ajaxGetDataSecond（），开始执行阻塞住函数的执行，
// 等待异步事件执行完毕后就继续做下面的事情。用await关键字的时候就是在告诉下面的代码，这块你得给我等着，
// wait我执行完了才能轮到你 understand？总之await吊极了。

// //await是在async函数里面使用的，作用范围是不可以继承下去的
// async function fn() {
//     (function(){
//         await 123
//     })()
// }  //会报错告诉await只能在async函数中使用，而这个await是在下一个function  作用域不可以继承
// //在promise使用async函数
// new Promise(async (resolve, reject) => {
//     await xxx
// })

// // async函数的返回值是一个promise对象,帮助我们把内部的异步请求的数据抛出到函数外部来。
// //在使用场景中，我们有的时候需要异步的一个结果，比如ajax请求的结果，这个时候我们希望得到这个异步的结果怎么办？
// //这个时候await可以帮助我，在执行完异步的操作的时候拿到结果，在拿到结果后顺序执行下去。直到return的时候把这个结果 return出去，
// async function fn() {
//     let result = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(100)
//         }, 1000)
//     }).then(res => {
//         return res
//     })
//     return result
// }
// let a =fn()

//闭包中调用问题，这道题调用了全局变量name，打印出"The Window"
// var name = 'The Window';
// var object = {
//     name: "My Object",

//     getNameFunc : function() {
//         return function() {
//             return this.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());

//这种情况下打印My Object
// var name = "The Window";

// var object = {
//     name : "My Object",
//     getNameFunc : function() {
//         var that =this;
//         return function() {
//             return that.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());

//下面三种情况下this的指向
// var name = "The Window";
// var object = {
//     name : "My Object",
//     getName: function(){
//         return this.name;
//     }
// };
// object.getName();  //"My Object"
// (object.getName)();  //"My Object"
// (object.getName = object.getName)();  //"The Window",非严格模式下

// var num=120000000;
// num.replace(/(?!^)(?=(\d{3})+\.)/g,",");
// console.log(num);


// var p1 = new Promise((resolve,reject) => {
//     console.log('没有resolve')
//     // throw new Error('手动返回错误')
//     reject('失败了')
// })
// reject一定会进入then的第二个回调函数（运行结束），如果then没有第二个回调会进入catch
// p1.then(data => {
//     console.log('data=',data);
// },err => {
//     console.log('err=',err)
// }).catch(
//     res => {
//         console.log('catch data=',data)
//     }
// )

// then中没有第二个回调情况
// p1.then(data => {
//     console.log('data=',data);
// }).catch(
//     res => {
//         console.log('catch data=',res)
//     }
// )

//没有then 直接进入catch
// p1.catch(
//     res => {
//         console.log('catch data=',res)
//     }
// )

// resolve一定会进入then的第一个回调，没有的话就不进入，肯定不进入catch
// var p1 = new Promise((resolve,reject) => {
//     console.log('resolve')
//     // throw new Error('手动返回错误')
//     resolve('成功了了')
// })

// p1.then(data => {
//     console.log('data:',data)
// },err => {
//     console.log('err:'.err)
// }).catch(
//     res => {
//         console('catch data:',res)
//     }
// )

// ES6中的类
// class point {
//     cosntructor(x, y) {
//         this.x = x;
//         this.y =y;
//     }

//     toString() {
//         return '(' + this.x + this.y + ')';
//     }
// }

// 函数柯里化，将使用多个参数的函数转化为使用一个参数的函数
// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }

// toPrecision 用于处理精读，精读是从左至右第一个不为零的数开始数起
// toFixed是对小数点后指定位数取整，从小数点后开始数起
// Math.round是讲一个数字四舍五入到整数


// 使用setTimeout解决setInterval并非等待一定时间进行执行
// funciton mySetInterval(fn, timeout) {
//     // 控制器 控制定时器是否继续执行
//     var timer = {
//         flag: true
//     };

//     // 设置递归函数，模拟定时器执行
//     function interval() {
//         if (timer.flag) {
//             fn();
//             setTimeout(interval, timeout);
//         }
//     }

//     // 启动定时器
//     setTimeout(interval, timeout);

//     // 返回控制器
//     return timer;
// }

// 如何判断一个对象是否为空对象
// function checkNullObj(obj) {
//     return Object.keys(obj).length === 0;
// }

// 使用闭包实现每隔一秒打印1， 2， 3
// for (var i=0; i < 5; i++ ) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000)
//     })(i);
// }

// 使用let块级作用域
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }

//查找字符串中是否含有某个字符
//indexOf()可返回指定的字符串值在字符串中首次出现的位置，如果没有，返回-1
// var str = "abc";
// console.log(str.indexOf("abc") != -1);

//方法二 search() 用于检索字符串中指定的字符串，或检索与正则表达式相匹配的子字符串
//如果没有返回-1
// var str = "1234";
// console.log(str.search("3") != -1);

//方法三 match()可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
// var str = "123";
// var reg = RegExp(/3/);
// console.log(str.match(reg));
// if(str.match(reg)) {
//     console.log("成功！");
// }

// replace 第一个参数为替换目标，第二个参数为要被替换对象
// var str ="Visit Microsoft!";
// console.log(str.replace(/Microsoft/,"W3School"));

//返回最后一次字符出现的位置，没有的话返回-1
// var str = "The full name of Chian is the Prople's Republic of China.";
// console.log(str.lastIndexOf("China"));

// slice()提取字符串的某部分，两个参数 开始和结束
// var str = "Apple, Banana,Mango";
// console.log(str.slice(7,13));

// substr()类似于slice，不同之处是第二个参数表示要提取部分的长度
// var str = "Apple, Banana,Mango";
// console.log(str.substr(7,6))

// 大小写转化 toUpperCase(),toLowerCase()
// var str = "Apple, Banana,Mango";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

//连接两个字符串
// var text1 = "Hello";
// var text2 = "en";
// var text3 = text1.concat(" ",text2);
// console.log(text3);

//删除字符串两端空白符
// var str = "     Hello World!     ";
// console.log(str.trim());


//返回字符串中指定位置的字符串
// var str = "HELLOWORLD";
// console.log(str.charAt(0));

//charCodeAt()返回字符串中指定索引的字符的unicode编码
// var str = "HELLOWORLD";
// console.log(str.charCodeAt(0));

//将字符串转换为数组
// var str = "a,b,c,d,f";
// console.log(str.split(",")); //[ 'a', 'b', 'c', 'd', 'f' ]
// console.log(str.split(" ")); // [ 'a,b,c,d,f' ]
// console.log(str.split("|")); // [ 'a,b,c,d,f' ]

// 闭包引用 HTML元素 该元素将无法被销毁的解决办法

// function assignHandler() {
//     var element = document.getElementById("someElement");
//     element.onclick = function() {
//         alert(element.id);
//     };
// }
// // 改进
// function assignHandler() {
//     var element = doucument.getElementById("someElement");
//     var id = element.id;
//     element.onclick = function() {
//         alert(id);
//     };
//     element = null;
// }

// // let相比var 没有变量提升，有暂时性死区：没有声明不能使用。let只在代码块内有效

// // 匿名函数模仿块级作用域
// (function() {
//     //这里是块级作用域
// })();
 
// // 关于匿名函数的讲解
// var count = 5;
// outputNumbers(count);
// // 等同于
// outputNumbers(5);
// // 演化一下

// var someFunction = funciton() {
//     // 这里是块级作用域
// };
// //调用执行方法
// someFunction();
// //等同于
// (function() {
//     //块级作用域
// })();

// var count = 5;
// function outputNumbers(count) {
//     (function() {
//         for(var i = 0; i < count; i++) {
//             alert(i);
//         }
//     })();
//     alert(i); // 报错
// }

// (function() {
//     var now = new Date();
//     if (now.getMonth() == 0 && now.getDate() == 1) {
//         alert("Happy new year!");
//     }
// })();

// 特权方法 有权访问私有变量和私有函数的公有方法
// function MyObject() {
//     // 私有变量和私有函数
//     var privateVariable = 10;
//     function privateFunction() {
//         return false;
//     }
//     // 特权方法
//     this.publicMethod = function () {
//         privateVariable++;
//         return privateFunction();
//     };
// }

// function Person(name) {
//     this.getName = function() {
//         return name;
//     };
//     this.setName = function (value) {
//         name = value;
//     };
// }
// var person = new Person("Nicholoas");
// console.log(person.getName());  //Nicholoas
// person.setName("Greg");
// console.log(person.getName()); // Greg

// // 静态私有变量
// (function() {
//     // 私有变量和私有函数
//     var privateVariable = 10;
//     function privateFunction() {
//         return false;
//     }
//     // 构造函数
//     MyObject = function() {};
//     // 公有/特权方法
//     MyObject.prototype.publicMethod = function() {
//         privateVariable++;
//         return privateFunction();
//     };
// })();

// (function() {
//     var name = "";
//     Person = function(value) {
//         name = value;
//     };
//     Person.prototype.getName = function() {
//         return name;
//     };
//     Person.prototype.setName = function (value) {
//         name = value;
//     };
// })();
// var person1 = new Person("Nicholas");
// console.log(person1.getName()); // Nicholas
// person1.setName("Greg");
// console.log(person1.getName()); // Greg

// var person2 = new Person("Micholas");
// console.log(person1.getName()); // Micholas
// console.log(person2.getName()); //Micholas

// 模块模式 单例对象
// var singleton = {
//     name : value,
//     method : function() {
//         // 这里是方法的代码
//     }
// };

// 模块模式通过为单利添加私有变量和特权方法能够使其得到增强
// var singleton = function() {
//     // 私有变量和私有函数
//     var pricateVarible = 10;
//     function privateFunction() {
//         return false;
//     }
//     // 特权/公有方法
//     return {
//         publicProperty: true,
//         publicMethod : function() {
//             privateVarible++;
//             return privateFunction();
//         }
//     };
// }();

// 实际使用 用于添加组件
// 在 Web 应用程序中，经常需要使用一个单例来管理应用程序级的信息。
// var application = function () {
//     // 私有函数和变量
//     var components = new Array();
//     // 初始化
//     components.push(new BaseComponent());
//     // 公共
//     return {
//         getComponentCount : function() {
//             return components.length;
//         },
//         registerComponent : function(component) {
//             if (typeof component === "object") {
//                 components.push(component);
//             }
//         }
//     };
// }();

// 鸡兔同笼问题
// 首先根据输入的字符串，存在一个字符串处理的过程
// 需要对字符串切割，使用split,将字符串切割成一个数组，
// 然后在对数组中的字符串元素进行类型转化为数值型
// 假设兔头too为0，对鸡头递增进行循环，每循环一次进行判断是否满足条件
// function Chicken(headAndFoot) {
//     var str = headAndFoot.split(",");
//     var head = parseInt(str[0]);
//     var foot = parseInt(str[1]);
//     if(head <= 1) console.log("NODATA");
//     var too = 0;
//     for (var j =0; j < head; j++) {
//         too = head - j;
//         if (j * 2 + too * 4 === foot) {
//             console.log(j + ',' + too);
//         }
//     }
// }
// var k = '20,60';

// Chicken(k);

// 选择排序
// function Select_Sort(nums) {
//     var N = nums.length;
//     for (let i=0; i < N-1; i++) {
//         var min = i;
//         for (let j = i + 1; j < N; j++) {
//             if (nums[j] < nums[min]) {
//                 min = j;
//             }
//         }
//         var t = nums[i];
//         nums[i] = nums[min];
//         nums[min] = t;
//     }
//     console.log(nums);
// }
// var k = [2,1,8,4,6,7,3];
// Select_Sort(k);

// 插入排序
// function InsertSort(nums) {
//     var N = nums.length;
//     var temp;
//     for (let i = 0; i < N; i++) {

//         for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
//             temp = nums[j-1];
//             nums[j-1] = nums[j];
//             nums[j] = temp;
//         }
//     }
//     console.log(nums);
// }
// var k = [2,1,8,4,6,7,3];
// InsertSort(k);

// 相交单链表

// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// import { reject } from "async";
// import { promises } from "dns";
// import { timeout } from "async";
// import { fromStringWithSourceMap } from "source-list-map";
// import { readFile } from "fs";
// a[6]();
//不要使用 块级作用域声明函数不推荐
// {
//     let a = 'secret';
//     function f() {
//         return a;
//     }
// }
// //块级作用域内部，优先使用函数表达式
// {
//     let a = 'secret';
//     let f = function () {
//         return a;
//     };
// }
//不报错
// 'use strict'
// if (true) {
//     function f() {}
// }
//报错
// 'use strict'
// if(true) 
// function f() {}
// const PI = 3.1416;
// PI;
// if (true) {
//     const MAx = 5;
// }
// MAX;
// 本质 § ⇧
// const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
// 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
// 但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
// const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，
// 就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
// const foo = {};
// foo.prop = 123;
// foo.prop
// const a = [];
// a.push('hello');
// a.length = 0;
// a = ['Dave'];
// console.log(a);
// var constantize = (obj) => {
//     Object.freeze(obj);
//     Object.keys(obj).forEach( (key, i) => {
//         if ( typeof obj[key] === 'object') {
//             constantize( obj[key] );
//         }
//     });
// };
// var a = 1;
// window.a;
// let b =1;
// window.b;
// 很难找到一种方法，可以在所有情况下，都取到顶层对象。下
// 面是两种勉强可以使用的方法。
//方法一
// (typeof window !== 'undefined'
//     ? window
//     : (typeof process === 'object' &&
//        typeof require === 'function' &&
//        typeof global === 'object')
//        ? global
//        : this);
// //方法二
// var getGlobal = function () {
//     if (typeof self !== 'undefined') { return self; }
//     if (typeof window !== 'undefined') { return window; }
//     if (typeof global !== 'undefined') { return global;}
//     throw new Error('unable to locate global object');
// };
// let [a, b, c] = [1, 2, 4];
// let [foo, [[bar], baz]] = [1, [2], 3];
// foo;
// let [ , , third] = ["foo", "bar", "baz"];
// third;
// let [x,y,z] =new Set(['a', 'b', 'c']);
// x;
// var tt = ... new Set([5, 5, 6, 6, 3, 3, 2]);
// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//         yield a;//yield这个关键字是用来暂停和恢复一个遍历器函数（的运行）的。
//         [a,b] = [b, a+b];
//     }
// }
// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth;
// function* foo(index) {
//     while (index < 5) {
//       yield index++;
//     }
//   }
//   const iterator = foo(0);
//   console.log(iterator.next().value);
//   // expected output: 0
//   console.log(iterator.next().value);
//   // expected output: 1
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
//   console.log(iterator.next().value);
// function* foo(index) {
//   while (index < 5) {
//     yield index++;
//   }
// }
// const iterator = foo(0);
// console.log(iterator.next().value);
// // expected output: 0
// console.log(iterator.next().value);
// // expected output: 1
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// 生成 0 1 2 3 4 undefined  
// let {foo, baz } = { foo:'aaa', bar: 'bbb'};
// foo;
// bar;
// function add([x, y]){
//     return x + y;
// }
// add([1, 2]);
// let x = 1;
// let y = 2;
// [x, y] = [y ,x];
// //返回一个数组
// function example() {
//     return [1, 2, 3];
// }
// let [a, b, c] = example();
// //返回一个对象
// function example() {
//     return {
//         foo: 1,
//         bar: 2
//     };
// }
// let { foo, bar } = example();
// //参数时一组有次序的值
// function f([x, y, z]) {...}
// f([1 ,2 ,3]);
// //参数十一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});
// //提取json数据
// let jsonData = {
//     id:42,
//     status: 'OK',
//     data: [854, 344]
// };
// let {id, status, data: number} =jsonData;
// console.log(id, status, number);
// //函数参数的默认值
// jQuery.ajax = function (url, {
//     async =true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global =true,
//     //more config
// } = {}) {
//     //。。。do stuff
// };
// //遍历Map结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key,value] of map) {
//     console.log(key + " is " + value);
// }
// for (let codePoint of 'foo') {
//     console.log(codePoint)
// }
// let text = String.fromCodePoint(0x20BB7);
// for (let i=0; i<text.length; i++) {
//     console.log(text[i]);
// }
// for (let i of text) {
//     console.log(i);
// }
// let a = 5;
// let b = 10;
// function tag(s, v1, v2) {
//     console.log(s[0]);
//     console.log(s[1]);
//     console.log(s[2]);
//     console.log(v1);
//     console.log(v2);
//     return 'OK';
// }
// tag`Hello ${ a + b } world ${ a * b }`;
// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
// function passthru(literals) {
//     let result = '';
//     let i=0;
//     while (i< literals.length) {
//         result += literals[i++];
//         if(i < arguments.length) {
//             result += arguments[i];
//         }
//     }
//     return result;
// }
// console.log(msg);
// const s = '   abc   ';
// s.trim();
// s.trimStart();
// s.trimRight();
// console.log(s);
// let s = Symbol();
// typeof s
// async function getStockPriceByName(name) {
//     const symbol = await getStockSymbol(name);
//     const stockPrice = await getStockPriceByName(symbol);
//     return stockPrice;
// }
// getStockPriceByName('goog').then(function (result) {
//     console.log(result);
// });
// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }
// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value);
// }
// asyncPrint('Hello World',500);
// function Point(x ,y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ',' + this.y + ')';
// };
// var p =new Point(1, 2);
// class Point {
//     constructor(x, y) {
//         this.x =x;
//         this.y = y;
//     }
//     toString() {
//         return '(' + this.x +',' +this.y + ')';
//     }
// }
// class Bar {
//     doStuff() {
//         console.log('stuff');
//     }
// }
// var b = new Bar();
// b.doStuff();
// class Point {
//     cosntructor(){}
// }
// Object.assign(Point.prototype, {
//     toString(){},
//     toValue(){}
// });
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         this.color =color; //ReferenceError
//         super(x, y); //调用父类的constructor(x, y)
//         this.color =color; //正确
//     }
//     toString() {
//         return this.color + ' ' + super.toString(); //调用父类的toString()
//     }
// }
// class MyArray extends Array {
//     constructor(...args){
//         super(...args);
//     }
// }
// var arr = new MyArray();
// arr[0] = 12;
// arr.length;
// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
// var hw = helloWorldGenerator();
//使用Proxy实现观察者模式
// const person = observable({
//     name: '张三',
//     age: 20
// });
// function print() {
//     console.log(`${person.name}, ${person.age}`)
// }
// observe(print);
// person.name = '李四';
// const queuedObservers = new Set();
// const observable = obj => new Proxy(obj, {set});
// function set(target, key, value, receiver) {
//     const result = Reflect.set(target, key, value, receiver);
//     queuedObservers.forEach(observe => observe());
//     return result;
// }
// function * f() {
//     console.log('执行了！')
// }
// var generator = f();
// setTimeout(function () {
//     generator.next()
// }, 2000);
//多个回调函数嵌套形成回调函数地域
//使用promise进行解决
// var readFile = require('fs-readfile-promise');
// readFile(fileA)
// .then(function (data) {
//     console.log(data.toString());
// })
// .then(function () {
//     return readFile(fileB);
// })
// .then(function (data){
//     console.log(data.toString());
// })
// .catch(function (err){
//     console.log(err);
// })
// /*我使用了fs-readfile-promise模块，它的作用就是返回一个 Promise 版本的readFile函数。
// Promise 提供then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。*/
// readFile(fileB)
// .then(function (data){
//     console.log(data.toString());
// })
// .then(function(){
//     return readFile(fileC);
// })
// .then(function() {
//     console.log(data.toString);
// })
// .catch(function(err){
//     console.log(err);
// })
// function* gen(x) {
//     var y = yield x + 2;
//     return y;
// }
// var g = gen(1);
// g.next();
// g.next();
// function * gen(x){
//     try {
//         var y = yield x + 2;
//     }catch (e){
//         console.log(e);
//     }
//     return y;
// }
// var g =gen(1);
// g.next();
// g.throw('出错了');
// [...new Set('aabbcc')].join('');
// const materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];
// console.log(materials.map((material => material.length))); //输出 Array [8,6,7,9]
// 普通函数
// materials.map(function(element){
//     return element.length;
// });
// 箭头函数
// materials.map((element) => {
//     return element.length;
// });
// const promise = new Promise1(function(resolve,reject){
//     //some code
//     if(/*异步操作成功*/){
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });
// const promise = new Promise2(function(resolve,reject){
//     //some code
//     if(/*成功*/){
//         resolve(value);
//     } else {
//         reject(value);
//     }
// });
// const promise = new Promise3(function(resolve,reject){
//     //some code
//     if(/*成功*/){
//         resolve(value);
//     } else {
//         reject(value );
//     }
// });
// promises.then(function(value){
//     //success
// },function(error){
//     //failure
// });
// import { promises } from "dns";
// import { reject } from "async";
// function timeout(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'done');
//     });
// }
// timeout(100).then((value)=> {
//     console.log(value);
// })
// function timeout(ms){
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'fuck');
//     });
// }
// timeout(100).then((value)=>{
//     console.log(value);
// })
// let promise = new Promise(function(resolve,reject){
//     console.log('Promise');
//     resolve();
// });
// promise.then(function(){
//     console.log('resolved.');
// });
// console.log('HI');
//异步加载图片
// funciton loadImageAsync(url) {
//     return new Promise(function(resolve,reject){
//         const image = new Image();
//         image.onload = function() {
//             resolve(image);
//         };
//         image.onerror = function() {
//             reject(new Error('Could not load image at '+ url));
//         };
//         image.src = url;
//     })
// }
//用Promise对象实现Ajax操作
// const getJson = function(url) {
//     const promise = new Promise(function(resolve,reject){
//         const handler = function() {
//             if(this.readyState !== 4) {
//                 return;
//             }
//             if(this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//         const client = new XMLHttpRequest();
//         client.open('GET',url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept","application/json");
//         client.send();
//     });
//     return promise;
// };
// getJson("/posts.json").then(function(json){
//     console.log('Contents:' + json);
// },function(error){
//     console.log("出错了",error);
// });
// 快速排序之哨兵相遇交换法
// function Quick_sort(arr,l,r){
//     var i=l; //哨兵i
//     var j=r; //哨兵j
//     var key=arr[l]; //基准数
//     if(l>=r){return;}  //如果数组只有一个元素，退出
//     while(i<j){
//         while(i<j&&arr[j]>key){ //从右往左找，找第一个比key小的数，找到或者两个哨兵相遇跳出循环
//             j--;
//         }
//         while(i<j&&arr[i]<=key){ //从左往右找，找第一个比key大的数，找到或者两个哨兵相遇跳出循环
//             i++;                 //=号的目的是防止key和arr[j]进行交换
//         }
//         if(i<j){ //交换元素
//         var temp=arr[j];
//         arr[j]=arr[i];
//         arr[i]=temp;
//         }
//     }
//     arr[l]=arr[i];
//     arr[i]=key;
//     Quick_sort(arr,l,i-1);
//     Quick_sort(arr,i+1,r);
// }
// var arr=[1,4,2,3,8,3,5,9,1,4];
// console.log(arr);
// Quick_sort(arr,0,arr.length-1);
// console.log(arr);
// js实现快速排序 挖萝卜坑法则
// function quick_sort(s,l,r){
//     var i=l;
//     var j=r;
//     var  key=s[i];
//     if(l>=r){return;}
//     while(i<j){
//         while(i<j&&arr[j]>=key){
//             j--;
//         }
//         if(i<j){
//             s[i]=s[j];
//         }
//         while(i<j&&arr[i]<=key){
//             i++;
//         }
//         if(i<j){
//             s[j]=s[i];
//         }
//     }
//     s[i]=key;
//     quick_sort(arr,l,i-1);
//     quick_sort(arr,i+1,r);
// }
// var arr=[6,3,8,7,9,1,3,5,3,8,2,9];
// console.log(arr);
// quick_sort(arr,0,arr.length-1);
// console.log(arr);
//暴力冒泡
// function pop_sort(){
//     var arr=[1,4,2,6,9,8];
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;       
//             }
//         }
//     } 
//    console.log(arr);
// }
// pop_sort();
//标志位冒泡
// function pop_sort(){
//     var arr=[1,4,2,6,9,8];
//     var flag=1;
//     var position=0;
//     var len=arr.length-1;
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<len;j++){
//             if(arr[j]>arr[j+1]){
//                 var temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//                 flag=0;  
//                 position=j;     
//             }
//         }
//         len=position;
//         if(flag==1){
//             break;
//         }
//     } 
//    console.log(arr);
// }
// pop_sort();
// //求质数方法一
// function IsPrime(N){
//     var arr=[2,3];
//     for(var i=4;i<N;i++){
//         var flag=true;
//         for (var j=2;j<=i/2;j++){
//             if(i%j==0){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     console.log(arr.length);
// }
// IsPrime(1000);
//求质数方法二
// function IsPrime(N){
//     var arr=[2,3];
//     for(var i=4;i<N;i++){
//         var flag=true;
//         for (var j=2;j<=Math.sqrt(i);j++){
//             if(i%j==0){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag){
//             arr.push(i);
//         }
//     }
//     console.log(arr);
//     console.log(arr.length);
// }
// IsPrime(1000);
// var arr=[1,2];
// console.log([...arr].pop());
// console.log(arr);
//js实现括号匹配
// function SingUp(arr){
//     var arr=['{','(','[',']',')','}'];
//     var temp =[];
//     var flag=true;
//     for(let i=0;i<arr.length;i++){
//         var x=arr[i];
//         switch(x){
//             case '(' :
//             case '{' :
//             case '[' :
//             temp.push(x);
//             break;
//             case ')' :
//             case '}' :
//             case ']' :
//                 topEle=temp.pop();
//                 if(topEle=='{'&&x=='}'||topEle=='('&&x==')'||topEle=='['&&x==']'){
//                    continue;
//                 }
//                 else{
//                     // console.log('括号不匹配')将标志位置为false;
//                     flag=false;
//                 }
//         }
//     }
//     if(flag){
//         console.log('括号匹配');
//     } else {
//         console.log('括号不匹配');
//     }
// }
// SingUp();
// 在数组中找出连续数列等于目标值
// function findSum(num,sum){
//     var right=0;
//     var left=0;
//     for(let i=0; i<num.length;i++){
//         right=i;
//         left=i;
//         var curSum=0;
//         while(curSum<sum){
//             curSum+=num[right++];
//         }
//         if(curSum==sum){
//             for(let j=left; j<right; j++){
//                 console.log(num[j]);
//             }
//             console.log("\n");
//         }
//     }
// }
// var num=[1,2,2,3,4,5,6,7,8,9];
// var sum=7;
// findSum(num,sum);
// var a = [1,2,3,4,5,6,25,60];
//  console.log(Math.max.apply([],a));
//  apply中第一个参数指向一个对象，第二个是用数组存储的元素。
//闭包实现累加
// function a(numberOne){
//     var count=numberOne;
//     return function b(numberTwo){
//         if(numberTwo===undefined){
//             return count;
//         }
//         count+=numberTwo;
//         return b;
//     }
// }
// console.log(a(2)(3)());
//计数器
// function add2(){
//     count =2;
//     return function() {
//         count+=2;
//         console.log(count);
//     }
// }
// var add1=add2();
// add1();
// add1();
// var add3=add2();
// add3();
//闭包输出0,1,2,3
// for (var i=0;i<4;i++){
//     setTimeout(
//         function(){
//             var temp=i;
//             return function(){
//                 console.log(temp);
//             }
//         }(),300)
// }
// for(var i=0;i<4;i++){
//     setTimeout(
//         function(){
//             var temp=i;
//             return function(){
//                 console.log(temp);
//             }
//         }(),300)
// }
// console.log(Object.prototype.toString.call([1,2,3]));
// console.log(Object.prototype.toString.call(/regexp-literal/i));
// console.log(typeof NaN);
// var nun=new Array(8);
// console.log(nun[2]);
// var x ="120000000000000000000";
// console.log(x.replace(/(\d)(?=(?:\d{3})+\.)/g,","));
// promise 异步对象的学习
// const fn = new Promise(function (resolve,reject ){
//     setTimeout(() => {
//         let num = Math.ceil(Math.random() * 10) //假设num算出来是10
//         if ( num > 5 ) {
//             resolve(num)
//         } else {
//             reject(num)
//         }
//     }, 2000)
// })
// fn.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })
// 这是一个最简单的Promise使用，假设2秒之后生成了随机数10，那么resolve回调函数运行
// then走第一个函数，console.log(7)
// 假设2秒后随机数3，那么reject函数运行。then走第二个函数，console.log(3)
// const fm =new Promise( function(resolve,reject){
//     setTimeout(() => {
//         let num = Math.ceil( Math.random()* 10)
//     if(num>5) {
//         resolve(num);
//     } else {
//         reject(num);
//     }
//     }, 2000)
// })
// fm.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })
// const fk = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let num = Math.ceil(Math.random() * 10) 
//         if (num > 5) {
//             resolve(num)
//         } else {
//             reject(num)
//         }
//     }, 2000)
// })
// fk.then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })
// fn = new Promise(function (resolve, reject) {
//     let num = Math.ceil(Math.random() * 10)
//     if (num >5) {
//         resolve(num)
//     } else {
//         reject(num)
//     }
// })
// //第一次回调
// fn.then((res) => {
//     console.log(`res==>$(res)`)
//     return new Promise((resolve, reject) => {
//         if (2 * res > 15) {
//             resolve(2 * res)
//         } else {
//             reject(2*res)
//         }
//     })
// }, (err) => {
//     console.log(`err==>${err}`)
// }).then((res) => {  //第二次回调
//     console.log(res)
// }, (err) => {
//     console.log(`err==>${err}`)
// })
// 在Promise的内部，有一个状态管理器，有三种状态：pending，fulfilled，rejected。 
// promise对象的初始状态为pending，
// 当调用resolve（成功），会由pending=>fulfilled
// 当调用reject(失败)，会由pending=>rejected
// 状态一旦修改，不可改变。
// 当状态为fulfilled(rejected反之)时，then的成功回调函数被调用，并接受上面传来的num
// 进行相应的操作。
// //catch的用法
// fn.then((res) => {
//     console.log(`res==>$(res)`)
//     return new Promise((resolve, reject) => {
//         if (2 * res > 15) {
//             resolve(2 * res)
//         } else {
//             reject(2*res)
//         }
//     })
// }, (err) => {
//     console.log(`err==>${err}`)
// }).then((res) => {  //第二次回调
//     console.log(res)
// }).catch((err) => {
//     console.log(`err==>${err}`)
// })
// //Promise.resolve返回一个fulfilled状态的promise对象，Promise.reject返回一个rejected状态的promise对象
// Promise.resolve('hello').then(function(value) {
//     console.log(value);
// });
// Promise.resolve('hello');
// //相当于
// const promise = new Promise(resolve => {
//     resolve('hello');
// });
// //reject
// Promise.reject('hello');
// //相当于
// const promise = new Promise(reject => {
//     resolve('hello');
// });
// promises all方法就是 作为几个参数的对象一旦有一个状态为rejected，则all的返回值就是rejected。
// 当几个反坐参数的函数的返回状态都为fulfilled时，至于最后输出的时间就看谁跑的慢。
// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('1s') //1秒后输出去
//         resolve(1)
//     }, 1000)
// })
// let p10 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('10s') //10s后输出
//         resolve(10)
//     })
// }, 10000)
// let p5 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('5s')  //5s后输出
//         resolve(5)
//     }, 5000)
// })
// Promise.all([p1,p10,p5]).then((res) => {
//     console.log(res);  //最后输出
// })
// //运行结果是，根据谁最后原则，10s后输出[1,10,5]
// //使用race方法 做一些超时操作
// //请求某个图片资源
// let requestImg = new Promise(function(resolve, reject) {
//     var img = new Image();
//     img.onload = function() {
//         resolve(img);
//     }
// });
// //延时函数，用于给请求计时
// let tineOut = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('图片请求超时');
//     }, 5000);
// });
// Promise.race([requestImg, timeout]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// Promise值穿透
// .then或者.catch的参数期望是函数，传入非函数会发生值穿透
// Promise.resolve(1)
// .then(2)
// .then(Promise.resolve(3))
// .then(console.log)
// 输出： 1；
// async function ajaxGetData() {
//     xxx
//     dosomething()
//     await ajaxGetDataFirst()
//     dosomething()
//     await ajaxGetDataSecond()
//     dosomething()
//     xxx
// }
// ajaxGetData()
// 我们做了一些事情，然后到一个异步的ajax请求后，等待ajaxGetDataFirst这个异步的事件执行完毕后，
// 开始继续做一些事情，到了第二个ajax异步请求ajaxGetDataSecond（），开始执行阻塞住函数的执行，
// 等待异步事件执行完毕后就继续做下面的事情。用await关键字的时候就是在告诉下面的代码，这块你得给我等着，
// wait我执行完了才能轮到你 understand？总之await吊极了。
// //await是在async函数里面使用的，作用范围是不可以继承下去的
// async function fn() {
//     (function(){
//         await 123
//     })()
// }  //会报错告诉await只能在async函数中使用，而这个await是在下一个function  作用域不可以继承
// //在promise使用async函数
// new Promise(async (resolve, reject) => {
//     await xxx
// })
// // async函数的返回值是一个promise对象,帮助我们把内部的异步请求的数据抛出到函数外部来。
// //在使用场景中，我们有的时候需要异步的一个结果，比如ajax请求的结果，这个时候我们希望得到这个异步的结果怎么办？
// //这个时候await可以帮助我，在执行完异步的操作的时候拿到结果，在拿到结果后顺序执行下去。直到return的时候把这个结果 return出去，
// async function fn() {
//     let result = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(100)
//         }, 1000)
//     }).then(res => {
//         return res
//     })
//     return result
// }
// let a =fn()
//闭包中调用问题，这道题调用了全局变量name，打印出"The Window"
// var name = 'The Window';
// var object = {
//     name: "My Object",
//     getNameFunc : function() {
//         return function() {
//             return this.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());
//这种情况下打印My Object
// var name = "The Window";
// var object = {
//     name : "My Object",
//     getNameFunc : function() {
//         var that =this;
//         return function() {
//             return that.name;
//         };
//     }
// };
// console.log(object.getNameFunc()());
//下面三种情况下this的指向
// var name = "The Window";
// var object = {
//     name : "My Object",
//     getName: function(){
//         return this.name;
//     }
// };
// object.getName();  //"My Object"
// (object.getName)();  //"My Object"
// (object.getName = object.getName)();  //"The Window",非严格模式下
// var num=120000000;
// num.replace(/(?!^)(?=(\d{3})+\.)/g,",");
// console.log(num);
// var p1 = new Promise((resolve,reject) => {
//     console.log('没有resolve')
//     // throw new Error('手动返回错误')
//     reject('失败了')
// })
// reject一定会进入then的第二个回调函数（运行结束），如果then没有第二个回调会进入catch
// p1.then(data => {
//     console.log('data=',data);
// },err => {
//     console.log('err=',err)
// }).catch(
//     res => {
//         console.log('catch data=',data)
//     }
// )
// then中没有第二个回调情况
// p1.then(data => {
//     console.log('data=',data);
// }).catch(
//     res => {
//         console.log('catch data=',res)
//     }
// )
//没有then 直接进入catch
// p1.catch(
//     res => {
//         console.log('catch data=',res)
//     }
// )
// resolve一定会进入then的第一个回调，没有的话就不进入，肯定不进入catch
// var p1 = new Promise((resolve,reject) => {
//     console.log('resolve')
//     // throw new Error('手动返回错误')
//     resolve('成功了了')
// })
// p1.then(data => {
//     console.log('data:',data)
// },err => {
//     console.log('err:'.err)
// }).catch(
//     res => {
//         console('catch data:',res)
//     }
// )
// ES6中的类
// class point {
//     cosntructor(x, y) {
//         this.x = x;
//         this.y =y;
//     }
//     toString() {
//         return '(' + this.x + this.y + ')';
//     }
// }
// 函数柯里化，将使用多个参数的函数转化为使用一个参数的函数
// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }
// toPrecision 用于处理精读，精读是从左至右第一个不为零的数开始数起
// toFixed是对小数点后指定位数取整，从小数点后开始数起
// Math.round是讲一个数字四舍五入到整数
// 使用setTimeout解决setInterval并非等待一定时间进行执行
// funciton mySetInterval(fn, timeout) {
//     // 控制器 控制定时器是否继续执行
//     var timer = {
//         flag: true
//     };
//     // 设置递归函数，模拟定时器执行
//     function interval() {
//         if (timer.flag) {
//             fn();
//             setTimeout(interval, timeout);
//         }
//     }
//     // 启动定时器
//     setTimeout(interval, timeout);
//     // 返回控制器
//     return timer;
// }
// 如何判断一个对象是否为空对象
// function checkNullObj(obj) {
//     return Object.keys(obj).length === 0;
// }
// 使用闭包实现每隔一秒打印1， 2， 3
// for (var i=0; i < 5; i++ ) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000)
//     })(i);
// }
// 使用let块级作用域
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000);
// }
//查找字符串中是否含有某个字符
//indexOf()可返回指定的字符串值在字符串中首次出现的位置，如果没有，返回-1
// var str = "abc";
// console.log(str.indexOf("abc") != -1);
//方法二 search() 用于检索字符串中指定的字符串，或检索与正则表达式相匹配的子字符串
//如果没有返回-1
// var str = "1234";
// console.log(str.search("3") != -1);
//方法三 match()可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
// var str = "123";
// var reg = RegExp(/3/);
// console.log(str.match(reg));
// if(str.match(reg)) {
//     console.log("成功！");
// }
// replace 第一个参数为替换目标，第二个参数为要被替换对象
// var str ="Visit Microsoft!";
// console.log(str.replace(/Microsoft/,"W3School"));
//返回最后一次字符出现的位置，没有的话返回-1
// var str = "The full name of Chian is the Prople's Republic of China.";
// console.log(str.lastIndexOf("China"));
// slice()提取字符串的某部分，两个参数 开始和结束
// var str = "Apple, Banana,Mango";
// console.log(str.slice(7,13));
// substr()类似于slice，不同之处是第二个参数表示要提取部分的长度
// var str = "Apple, Banana,Mango";
// console.log(str.substr(7,6))
// 大小写转化 toUpperCase(),toLowerCase()
// var str = "Apple, Banana,Mango";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
//连接两个字符串
// var text1 = "Hello";
// var text2 = "en";
// var text3 = text1.concat(" ",text2);
// console.log(text3);
//删除字符串两端空白符
// var str = "     Hello World!     ";
// console.log(str.trim());
//返回字符串中指定位置的字符串
// var str = "HELLOWORLD";
// console.log(str.charAt(0));
//charCodeAt()返回字符串中指定索引的字符的unicode编码
// var str = "HELLOWORLD";
// console.log(str.charCodeAt(0));
//将字符串转换为数组
// var str = "a,b,c,d,f";
// console.log(str.split(",")); //[ 'a', 'b', 'c', 'd', 'f' ]
// console.log(str.split(" ")); // [ 'a,b,c,d,f' ]
// console.log(str.split("|")); // [ 'a,b,c,d,f' ]
// 闭包引用 HTML元素 该元素将无法被销毁的解决办法
// function assignHandler() {
//     var element = document.getElementById("someElement");
//     element.onclick = function() {
//         alert(element.id);
//     };
// }
// // 改进
// function assignHandler() {
//     var element = doucument.getElementById("someElement");
//     var id = element.id;
//     element.onclick = function() {
//         alert(id);
//     };
//     element = null;
// }
// // let相比var 没有变量提升，有暂时性死区：没有声明不能使用。let只在代码块内有效
// // 匿名函数模仿块级作用域
// (function() {
//     //这里是块级作用域
// })();
// // 关于匿名函数的讲解
// var count = 5;
// outputNumbers(count);
// // 等同于
// outputNumbers(5);
// // 演化一下
// var someFunction = funciton() {
//     // 这里是块级作用域
// };
// //调用执行方法
// someFunction();
// //等同于
// (function() {
//     //块级作用域
// })();
// var count = 5;
// function outputNumbers(count) {
//     (function() {
//         for(var i = 0; i < count; i++) {
//             alert(i);
//         }
//     })();
//     alert(i); // 报错
// }
// (function() {
//     var now = new Date();
//     if (now.getMonth() == 0 && now.getDate() == 1) {
//         alert("Happy new year!");
//     }
// })();
// 特权方法 有权访问私有变量和私有函数的公有方法
// function MyObject() {
//     // 私有变量和私有函数
//     var privateVariable = 10;
//     function privateFunction() {
//         return false;
//     }
//     // 特权方法
//     this.publicMethod = function () {
//         privateVariable++;
//         return privateFunction();
//     };
// }
// function Person(name) {
//     this.getName = function() {
//         return name;
//     };
//     this.setName = function (value) {
//         name = value;
//     };
// }
// var person = new Person("Nicholoas");
// console.log(person.getName());  //Nicholoas
// person.setName("Greg");
// console.log(person.getName()); // Greg
// // 静态私有变量
// (function() {
//     // 私有变量和私有函数
//     var privateVariable = 10;
//     function privateFunction() {
//         return false;
//     }
//     // 构造函数
//     MyObject = function() {};
//     // 公有/特权方法
//     MyObject.prototype.publicMethod = function() {
//         privateVariable++;
//         return privateFunction();
//     };
// })();
// (function() {
//     var name = "";
//     Person = function(value) {
//         name = value;
//     };
//     Person.prototype.getName = function() {
//         return name;
//     };
//     Person.prototype.setName = function (value) {
//         name = value;
//     };
// })();
// var person1 = new Person("Nicholas");
// console.log(person1.getName()); // Nicholas
// person1.setName("Greg");
// console.log(person1.getName()); // Greg
// var person2 = new Person("Micholas");
// console.log(person1.getName()); // Micholas
// console.log(person2.getName()); //Micholas
// 模块模式 单例对象
// var singleton = {
//     name : value,
//     method : function() {
//         // 这里是方法的代码
//     }
// };
// 模块模式通过为单利添加私有变量和特权方法能够使其得到增强
// var singleton = function() {
//     // 私有变量和私有函数
//     var pricateVarible = 10;
//     function privateFunction() {
//         return false;
//     }
//     // 特权/公有方法
//     return {
//         publicProperty: true,
//         publicMethod : function() {
//             privateVarible++;
//             return privateFunction();
//         }
//     };
// }();
// 实际使用 用于添加组件
// 在 Web 应用程序中，经常需要使用一个单例来管理应用程序级的信息。
// var application = function () {
//     // 私有函数和变量
//     var components = new Array();
//     // 初始化
//     components.push(new BaseComponent());
//     // 公共
//     return {
//         getComponentCount : function() {
//             return components.length;
//         },
//         registerComponent : function(component) {
//             if (typeof component === "object") {
//                 components.push(component);
//             }
//         }
//     };
// }();
// 鸡兔同笼问题
// 首先根据输入的字符串，存在一个字符串处理的过程
// 需要对字符串切割，使用split,将字符串切割成一个数组，
// 然后在对数组中的字符串元素进行类型转化为数值型
// 假设兔头too为0，对鸡头递增进行循环，每循环一次进行判断是否满足条件
// function Chicken(headAndFoot) {
//     var str = headAndFoot.split(",");
//     var head = parseInt(str[0]);
//     var foot = parseInt(str[1]);
//     if(head <= 1) console.log("NODATA");
//     var too = 0;
//     for (var j =0; j < head; j++) {
//         too = head - j;
//         if (j * 2 + too * 4 === foot) {
//             console.log(j + ',' + too);
//         }
//     }
// }
// var k = '20,60';
// Chicken(k);
// 选择排序
// function Select_Sort(nums) {
//     var N = nums.length;
//     for (let i=0; i < N-1; i++) {
//         var min = i;
//         for (let j = i + 1; j < N; j++) {
//             if (nums[j] < nums[min]) {
//                 min = j;
//             }
//         }
//         var t = nums[i];
//         nums[i] = nums[min];
//         nums[min] = t;
//     }
//     console.log(nums);
// }
// var k = [2,1,8,4,6,7,3];
// Select_Sort(k);
// 插入排序
// function InsertSort(nums) {
//     var N = nums.length;
//     var temp;
//     for (let i = 0; i < N; i++) {
//         for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
//             temp = nums[j-1];
//             nums[j-1] = nums[j];
//             nums[j] = temp;
//         }
//     }
//     console.log(nums);
// }
// var k = [2,1,8,4,6,7,3];
// InsertSort(k);
// 相交单链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
// var getIntersectionNode = function(headA, headB) {
//     let  l2 = headB;
//     let  l1 = headA;
//     while(l1 !== l2) {
//         l1 = l1 === null ? headB : l1.next;
//         l2 = l2 === null ? headA : l2.next;
//     }
//     return l1;
// }
// 反转链表 头插法
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function(head) {
//     let new_head = null;
//     while(head !== null){
//     let temp = head;   
//     head = head.next;
//     temp.next = new_head;
//     new_head = temp;
//     }
//     return new_head;
// };
// function a(numberone) {
//     var count = numberone;
//     return function b(numberTwo) {
//         if (numberTwo === undefined) {
//             return count;
//         } else {
//             count += numberTwo;
//             return b;
//         }
//     }(20);
// }
// console.log(a(10)());
// function addcount() {
//     let count =2;
//     return function b(){
//          count += 2;
//          console.log(count);
//         }
// }
// var add1 = addcount();
// add1();
// for (var i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i)
//     },200);
// }
// for (let i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i)
//     },200);
// }
// for (var i = 0; i < 5; i++) {
//     setTimeout(function(){
//         var temp = i;
//         return function() {
//             console.log(temp);
//         };
//     }(),200);
// }
// for (var i =0; i < 5; i++) {
//     setTimeout(function() {
//         var temp = i;
//         return function() {
//             console.log(temp);
//         };
//     }(),300)
// }
// var p1 = new Promise((resolve,reject) => {
//      resolve("成功了");
//     reject("卧槽失败了");
// })
// p1.then(data => {
//     console.log(data)
// },err => {
//         console.log("失败了", data);
//     }
// ).catch(
//     res => {
//         console.log("抓好足了",res);
//     }
// )
// function quickSort(s,l,r) {
//     var i = l;
//     var j = r;
//     var key = s[i];
//     if(l>r) {return };
//     while(i < j) {
//         while(i < j && s[j] >= key){
//             j--;
//         }
//         if(i<j) {
//             s[i] = s[j];
//         }
//          while(i<j && s[i] <= key) {
//             i++;
//         }
//         if(i<j) {
//             s[j] = s[i]
//         }
//     }
//     s[i]=key;
//     quickSort(arr,l,i-1);
//     quickSort(arr,i+1,r);
// }
// var arr = [6,3,6,2,1,55,7,3,6,2,1];
// quickSort(arr,0,arr.length-1);
// console.log(arr);
// function quickSort(s,l,r){
//     var i = l;
//     var j = r;
//     key = s[i];
//     if(l > r) {return};
//     while(i<j) {
//         while(i < j && s[j] >= key) {
//             j--;
//         }
//         if(i<j) {
//             s[i] = s[j];
//         }
//         while( i< j && s[i] <= key) {
//             i++;
//         }
//         if(i < j) {
//             s[j] = s[i];
//         }
//     }
//     s[i] = key;
//     quickSort(arr,l,i-1);
//     quickSort(arr,i+1,r);
// }
// var arr = [8,6,5,3,1,5,22];
// quickSort(arr,0,arr.length-1);
// console.log(arr);
// 相遇比较换值
// function quicksort(s,l,r){
//     var i = l;
//     var j = r;
//     var key = s[l];
//     if (l >= r) {return};
//     while (i<j) {
//         while(i < j && s[j] > key) {
//             j--;
//         }
//         while(i < j && s[i] <= key) {
//             i++;
//         }
//         if(i < j) {
//             var temp = s[j];
//             s[j] = s[i];
//             s[i] = temp;
//         }
//     }
//     s[l] = s[i];
//     s[i] = key;
//     quicksort(arr,l,i-1);
//     quicksort(arr,i+1,r);
// }
//  var arr = [8,6,5,3,1,5,22];
//  quicksort(arr,0,arr.length-1);
//  console.log(arr);
// for (var i=0; i<5; i++) {
//     setTimeout(function() {
//         var temp = i;
//         return function() {
//             console.log(temp)
//         };
//     }(),300);
// }
// 想准确地检测弹出窗口是否被屏蔽，必须检测返回值的同时，将对window.open()调用封装。在一个try-catch块中
// var blocked = false;
// try {
//     var wroxWin = window.open("http://www.wrox.com","_blank");
//     if (wroxWin == null) {
//         blocked = true;
//     }
// } catch (ex) {
//     blocked = true;
// }
// if (blocked) {
//     alert("The opoup was blocked");
// }
// 防抖 在第一次出发事件时，不立刻执行，而是给出一个期限值，比如200ms
// 然后：如果200ms内没有再次触发，执行；再次触发，重新计时
// 效果：如果短时间内大量触发，只执行一次
// 实现：既然要有计时，肯定需要setTimeOut函数，还需要一个变量保存计时，
// 考虑维护全局纯净，可以借助闭包实现
// fn 需要防抖的函数 delay防抖时间期限值
//  function debounce(fn, delay) {
//      let timer = null; // 借助闭包
//      return function() {
//         if(timer) {
//             clearTimeout(timer); // 进到这个分支，说明一个计时周期内，再次触发相同时间，所以清除当前计时器，重新计时
//         } 
//          timer = setTimeout(fn, delay) // 进入该分支说明当前没有计时，那就开始计时      
//      }
//  }

// funcution debounce(fn, delay) {
//     let timer = null;
//     if(timer) {
//         clearTimeout(timer);
//     }
//     timer = setTimeout(fn, delay);
// }

//  // 输出滚动条的位置
// function showTop() {
//     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log('滚动条位置' + scrollTop);
// }
// window.onscroll = debounce(showTop,1000);
// 节流 即使用户不断的拖动滚动条，也能在某个时间间隔给出反馈
// 可以设置一个控制器，定期开放函数，也就是让函数在一次执行后，一个时间段内失效，过了这个时间段再激活
// 效果 短时间内大量触发同一事件，在函数执行一次后，该函数在指定时间期限内不工作，过了这段时间在工作
// 使用setTimeout 和 状态为valid（表示当前函数是否在工作状态）来实现
// function throttle(fn, delay) {
//     let valid = true;
//     return function() {
//         if(!valid) {
//             //休息时间，暂不接客
//             return false;
//         }
//         // 工作时间，执行函数并且在间隔期内把状态为设为无效
//         valid = false;
//         setTimeout(() => {
//             fn();
//             valid = true;
//         }, delay)
//     }
// }

// function throttle(fn ,delay) {
//     let valid = true;
//     return function() {
//         if(!valid) {
//             return false;
//         }
//         valid = false;
//         setTimeout(() => {
//             fn();
//             valid = true;
//         }, delay)
//     }
// }

// function showTop() { 
//     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; // 滚动条与顶部的距离
//     console.log('当前您在：',scrollTop);
// }
// window.onscroll = throttle(showTop, 1000);
// 间歇调用
// var num = 0;
// var max = 10;
// var setintervalId = null;
// function num() {
//     num++;
//     if(num === max) {
//         clearInterval(setintervalId);
//         console.log("done!");
//     }
// }
//  setintervalId = setInterval(num, 500);
// 超时调用
// var num = 0;
// var max = 10;
// function num() {
//     num++;
//     if (num < max) {
//         setTimeout(num,500);
//     } else {
//         console.log("done");
//     }
// }
// setTimeout(num, 500);
// if (confirm("are you sure?")) {
//     alert("I'm so gload your are sure!")
// } else {
//     alert("i am sorry to hear you are not sure!");
// }
// var result = prompt("What is your name?", "");
// if(result !== null) {
//     alert("Welcome, "+ result);
// }
// window.print();
// window.find();
// // 可以像下面这样创建一个函数，用以解析查询字符串，然后返
// // 回包含所有参数的一个对象：
// function getQueryStringArgs() {
//     // 取得查询字符串并去掉开头的问号
//     var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
//     // 保存数据对象
//     args = {},
//     // 取得每一项
//     items = qs.length ? qs.split("&") : [],
//     item = null,   
//     name = null,
//     value = null,
//     // 在for循环中使用
//         i = 0,
//         len = items.length;
//         // 逐个将每一项添加到args对象中
//     for (i = 0; i < len; i++) {
//         item = items[i].split("=");
//         name = decodeURIComponent(item[0]);
//         value = decodeURIComponent(item[1]);
//         if(name.length) {
//             args[name] = value;
//         }
//     }
//     return args;
// }
// // 实际使用一下上面的操作  假设查询字符串是?q=javascript&num=10
// var args = getQueryStringArgs();
// alert(args["q"]); // "javascript"
// alert(args["num"]); // "10"
//  无重复字符的最长子串
//最初的想法 错误的
// var lengthOfLongestSubstring = function(s) {
//     var num = s.split("");
//     var count = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] !== num[i+1]) 
//             count++;
//     }
//     console.log(count);
// };
//  无重复字符的最长子串
// 思路：使用新数组arr然后每一轮循环都维护max。
// 每一轮判断字符串的下一个元素是否存在于数组arr中，通过用indexOf方法（如果有返回下标，没有返回-1）
// 如果数组arr中存在，那么删掉
// var lengthOfLongestSubstring = function(s) {
//     let arr = [];
//     let max = 0;
//     let index =0;
//     for (let i =0; i< s.length;i++) {
//         index = arr.indexOf(s[i]);
//         if(index !== -1) {
//             arr.splice(0, index+1);
//         }
//         arr.push(s[i]);
//         max = Math.max(arr.length, max);
//     }
//     console.log(max);  
// };
// lengthOfLongestSubstring("pwwkew");
// 求解字符串中不同元素的个数，思路 维护一个新数组，如果里面没有字符串元素，推入
// 如果有结束本轮循环（continue），继续下轮循环判断
// var lengthOfLongestSubstring = function(s) {
//     let arr = [];
//     let max = 0;
//     let index =0;
//     for (let i =0; i< s.length;i++) {
//         index = arr.indexOf(s[i]);
//         if(index !== -1) {
//             continue;
//             // arr.splice(0, index+1);
//         }
//         arr.push(s[i]);
//         max = Math.max(arr.length, max);
//         //max++;
//     }
//     console.log(max);  
// };
// lengthOfLongestSubstring("pwwkew");
// 判断两个字符串是否相等
// var s = "flower";
// var k = "flowkkk";
// for(let i = 0;i < s.length; i++) {
//     if (s.charAt(i) === k.charAt(i))
//     console.log(s.charAt(i));
// }
// // 二维数组元素字符的读取
// var strs = ["flower","flow","flight"];
// console.log(strs[2]);
// console.log(strs[2][2]);
// 最长公共前缀
// 如果输入字符串为空 返回空
// 先取字符串数组中的第一个元素作为最长公共前缀，然后依次和后面的每一个字符串元素进行比较
// 最后获得最大公共前缀
// var longestCommonPrefix = function(strs) {
//     if(strs.length === 0) 
//         return "";
//     let ans = strs[0];
//     for(let i = 1; i < strs.length; i++) {
//         let j = 0;
//         for (;j < ans.length && j < strs[i].length; j++) {
//             if(ans[j] !== strs[i][j])
//             break;
//         }
//         ans = ans.substr(0, j);
//         if (ans === "")
//              return ans;
//     }
//     return ans;
// };
// var strs = [];
// console.log(longestCommonPrefix(strs));
// 字符串的排列
// charCodeAt(index) index指大于零小于字符串长度的数值，该函数返回字符串中字母的Unicode码,a是97
// var checkInclusion = function(s1, s2) {
//       if(typeof s1 !== "string" || typeof s2 !== "string" || s1.length ===0 || s2.length ===0) {return false;} 
//       let dictionary = new Array(26).fill(0);
//       for (let i = 0; i < s1.length; i++) {
//           let code = s1.charCodeAt(i) - 97;
//           dictionary[code]++;
//       }
//       for (let left = 0,right = 0; right < s2.length; right++) {
//         let code = s2.charCodeAt(right)-97;
//         dictionary[code]--;
//         while(dictionary[code] < 0) {
//             dictionary[s2.charCodeAt(left)-97]++;
//             left++;
//         }
//         if (right - left +1 === s1.length) 
//             return true;
//       }
//         return false;
// }
// console.log(checkInclusion("ab","abcv"));
// 字符串相乘
// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。
// var multiply = function(num1, num2) {
//     if(typeof num1 !== "string" || typeof num2 !== "string" || num1.length ===0 || num2.length ===0) {return false;}
//     if(num1 === "0" || num2 === "0") return 0; 
//     const left = '0'.charCodeAt(0);
// // num1Arr 取较短的数字， num2Arr 取较长的数字，短数乘长数速度较快。
//     const num1Arr = (num1.length > num2.length ? num2 : num1).split('').map(item => item.charCodeAt(0) - left);
//     const num2Arr = (num1.length > num2.length ? num1 : num2).split('').map(item => item.charCodeAt(0) - left);
//     let m = num1Arr.length, n = num2Arr.length;
//     // 结果最多为m+n位数
//     let res = new Array(m+n).fill(0);
//     for (let i = m-1; i >= 0; i--)
//         for(let j = n-1; j >= 0; j--) {
//             let mul = num1Arr[i] * num2Arr[j];
//             // 乘积在res对应的索引位置
//             let p1 = i + j, p2 = i + j + 1;
//             // 叠加到res上
//             let sum = mul + res[p2];
//             res[p2] = sum % 10;
//             res[p1] += sum / 10;
//         }
//         // 结果前缀可能存在的0（未使用的位）
//         while (res.length > 1 && res[0] === 0) {
//             res.shift();
//         }
//         // 将计算结果转化为字符串
//         res = res.toString();
//         return res;
// };
// num1 = "123";
// num2 = "456";
// console.log(multiply(num1, num2));
// 字符串数值转化
// console.log("9".charCodeAt(0)-"0".charCodeAt(0));
// console.log([1,2,0].reverse());
// 去除结果前的 0
//   while (res.length > 1 && res[res.length - 1] === 0) {
//     res.pop();
// }
// symbol 作为一个对象或一个Map的键值，他可以保证你的对象或Map键值不重复。
// var privateKey = Symbol();
// var obj = {
//     [privateKey] : 'Hero'
// }
// // 访问时
// console.log(obj[privateKey]); //Hero
// // 数据结构Set，类似于数组，成员的值都是唯一的，没有重复值
// const s = new Set();
// [2,3,5,4,2,2].forEach(x => s.add(x));
// for (let i of s) {
//     console.log(i);
// }
// // 去除数组的重复成员
// [...new Set(Array)]
// const set = new Set([1,2,3,4,4]);
// [...set]
// JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制
// Map 数据结构，各种类型的值（包括对象）都可以当键。
// Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
// const m = new Map();
// const o = {p: 'Hello World'};
// m.set(o, 'content');
// m.get(o); // 'content'
// m.has(o) //true
// m.delete(o)
// m.has(o) // false
// // 在实现一次
// const map = new Map([
//     ['name', '张三'],
//     ['title', 'Author']
// ]);
// map.size // 2
// map.has('name') //true
// map.get('name') // 张三
// map.has('title') //true
// map.get('title') //Author
// 居中
// div使用绝对布局
// 1.设置margin:AudioTrack;并设置top,left,right,bottom的值都相等。
// 2.设置left和top都是50%，然后再用transform(-50%, -50%) 向左平移它的宽度的50%
// // div使用flex布局
// 设置justify-content:center; // 水平居中
// align-items:center; //垂直居中
// // 伪类和伪元素
// 在css3中使用单冒号来表示伪类，用双冒号来表示伪元素。但是为了兼容已有的伪元素的写法，在一些浏览器中也可以使用单冒号
// 来表示伪元素。
// 伪类一般匹配的是元素的一些特殊状态，如hover、link等，而伪元素一般匹配的特殊的位置，比如after、before等
// 选择器
// （1）id选择器（#myid）
// （2）类选择器（.myclassname）
// （3）标签选择器（div,h1,p）
// （4）后代选择器（h1p）
// （5）相邻后代选择器（子）选择器（ul>li）
// （6）兄弟选择器（li~a）
// （7）相邻兄弟选择器（li+a）
// （8）属性选择器（a[rel="external"]）
// （9）伪类选择器（a:hover,li:nth-child）
// （10）伪元素选择器（::before、::after）
// （11）通配符选择器（*）
// div嵌套div ，点击子级div不触发父级div点击事件
// 解决方法： 在子级div上增加一个事件 onClick="event.cancelBubble = true"，这样就可以只触发自身的点击事件了
// 在父div的position为abosulte或是relative的情况下，子级div的position为absolute.
// 此时监听到了父div的缩放，并触发了事件。
// 那么js如何做到去操作子级的left和top，及width和height，随着父div的缩放而自适应呢？
// .a{
//     width: 500px;
//     height: 500px;
//     position:relative;
//     border: 1px solid red;
//   }
//   .b{
//     width: 10%;
//     height: 10%;
//     position: absolute;
//     left: 10%;
//     top: 10%;
//     border: 1px solid green;
//   }
// <div class="a">
//   <div class="b"></div>
// </div>
// 冒泡学习
/*{ <div id="outer">
    <p id="inner">Click me!</p>
</div>
事件冒泡微软提出了名为事件冒泡(event bubbling)的事件流。事件冒泡可以形象地比喻为把一颗石头投入水中，
泡泡会一直从水底冒出水面。也就是说，事件会从最内层的元素开始发生，一直向上传播，直到document对象。
因此上面的例子在事件冒泡的概念下发生click事件的顺序应该是p -> div -> body -> html -> document

// 事件捕获
网景提出另一种事件流名为事件捕获(event capturing)。与事件冒泡相反，事件会从最外层开始发生，直到最具体的元素。

addEventListener方法用来为一个特定的元素绑定一个事件处理函数，是JavaScript中的常用方法。addEventListener有三个参数：
element.addEventListener(event, function, useCapture) // useCapture 设置为 true - 事件句柄在捕获阶段执行（即在事件捕获阶段调用处理函数）
//                                                       false- false- 默认。事件句柄在冒泡阶段执行（即表示在事件冒泡的阶段调用事件处理函数）} */
// cookie和session  cookie通过在客户端记录信息确定用户身份（不可跨域），session通过在服务端记录信息确定用户身份
// http是一种无状态协议，一旦数据交换完毕，客户端和服务端就会断开连接，再次交互数据需要重新建立连接。
// cookie可以解决上面问题，服务器如果需要记录该用户状态，就使用response向客户端设置一个cookie，
// 客户端会把cookie保存起来，需要请求时，将请求网址和cookie一同提交给服务器，服务器进行辨认。
// session相当于在服务器上面建立一份客户档案，客户来访的时候只需要查询客户档案表即可。
// session机制决定了客户只能获取到自己的session，彼此独立，互不可见。
// 提高速度》内存里，客户第一次访问创建，生成后只要用户访问就更新维护。超过超时时间失效。
// 生命周期：session浏览器启动关闭，session消失，而cookie预先设置生存周期，或永久保存到本地文件。
// 箭头函数 将this指向当前环境
// class Json {
//     constructor() {
//         console.log(this);
//         this.a = 12;
//         this.fun = () => {
//             console.log(this);
//         }
//     }
// }
// let json = new Json();
// // json.fun();
// let eData = new Date();
// eData.fun = json.fun;
// eData.fun();
// 作用域链 本质是一个指向变量对象的指针列表，它只引用但不实际包含变量对象。
// 用途：保证对执行环境有权访问的所有变量和函数的有序访问。作用域链的前端始终都是当前执行的代码所在的环境的变量对象。
// 链的由来：如果这个环境是函数，则将其活动对象（activation object）作为变量对象。活动对象在最开始时只包含一个变量，
// 即 arguments 对象（这个对象在全局环境中是不存在的）。作用域链中的下一个变量对象来自包含（外部）环境，而再下一个变量
//对象则来自下一个包含环境。这样，一直延
// 续到全局执行环境；全局执行环境的变量对象始终都是作用域链中的最后一个对象。
// function compare(value1, value2) {
//     if (value1 < value2) {
//         return -1;
//     } else if (value1 > value2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// var result = compare(5 ,10);
// 在创建compare()函数时，会创建一个预先包含全局变量对象的作用域链，这个作用域链被保存到内部的[[Scope]]属性中
// 当调用compare()函数时，会为函数创建执行环境，然后通过赋值函数的[[Scope]]属性中的对象构建起执行环境的作用域链。
// 此后又有活动对象(再次作为变量对象使用)被创建并被推入执行环境作用域链前端。对于compare函数执行环境而言
// 其作用域链中包含两个变量对象：本地活动对象和全局对象
// 总结一下: 当某个函数被调用时，会创建一个执行环境（execution context）及相应的作用域链。
// 然后，使用 arguments 和其他命名参数的值来初始化函数的活动对象（activation object）。但在作用域
// 链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，
// function Chicken(headAndFoot) {
//     var str = headAndFoot.split(",");
//     var head = parseInt(str[0]);
//     var foot = parseInt(str[1]);
//     if(head <= 1) console.log("NODATA");
//     var too = 0;
//     for (let j = 0; j < head; j++) {
//         too = head - j;
//         if(j * 2 + too * 4 === foot) {
//             console.log(j + "," + too);
//         }
//     }
// }
// var k = '20,60';
// Chicken(k);
// function Select_Sort(nums) {
//     var N = nums.length;
//     for (let i = 0; i < N-1; i++) {
//         var min = i;
//         for (let j = i+1; j < N; j++) {
//             if (nums[j] < nums[min]) {
//                 min = j;
//             }
//         }
//         var t = num[i];
//         nums[i] = nums[min];
//         nums[min] = t;
//     }
//     console.log(nums);
// }
// var k = [2,3,1,6,3,9,45,3];
// Select_Sort(k);
// function SingUp(arr) {
//     var arr = ['(','{','[',']','}',')'];
//     var tem = [];
//     var flag = true;
//     for (let i = 0; i < arr.length; i++) {
//         var x =arr[i];
//         switch(x) {
//             case '(' :
//             case '{' :
//             case '[' :
//                 tem.push(x);
//                 break;
//             case ')' :
//             case '}' :
//             case ']' :
//                let topEle = tem.pop();
//                if (topEle === '{' && x === '}' || topEle === '(' && x === ')' || topEle === '[' && x === ']') {
//                    continue;
//                } else {
//                    flag = false;
//                }
//         }
//     }
//     if(flag) {
//         console.log('括号匹配');
//     } else {
//         console.log('括号不匹配');
//     }
// }
// SingUp();
// function IsPrime(N) {
//     var arr = [2,3];
//     for (let i =0; i < N; i++) {
//         var flag = true;
//         for (let j =2; j <= i; j++) {
//             if (i % j) {
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag) {
//             arr.push(i);
//         }
//     }
//     console.log(arr);
// }
// var lengthOfLongestSubstring = function(s) {
//     let arr = [];
//     let max = 0;
//     let index = 0;
//     for (let i = 0; i < s.length; i++) {
//         index = arr.indexOf(s[i]);
//         if( index !== -1) {
//             continue;
//         }
//         arr.push[s[i]];
//         max = Math.max(max, arr.length);
//     }
//     console.log(max);
// }
// function findSum(num, sum) {
//     var right = 0;
//     var left = 0;
//     for (let i =0; i < num.length; i++) {
//         right = i;
//         left = i;
//         var curSum = 0;
//         while(curSum < sum) {
//             curSum += num[right++];
//         }
//         if( curSum === sum) {
//             for (let j = left; j < right; j++) {
//                 console.log(num[j]);
//             }
//             console.log('\n');
//         }
//     }
// }
// var num = [1,222,442,2,4,2,4,2,4,53,3];
// var sum = 7;
// findSum(num,sum);
// 使用hover当鼠标悬停到文字上时改变颜色
// 这种一般是借助hover事件，就是说当鼠标放到文字上时会触发一个事件，此时可以修改文字的样式。
// 另外一种简单的办法就是直接用css的hover属性设置样式。
/////直接用css的hover属性设置样式。保存.css, 在html代码引用！
// {< a href="" class="test">链接内容</a>
// .test {
//     color:#eeffee;
// }
// .test:hover {
//     color:#ff0000;
// } }
// 事件委托
// 事件委托本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到
// 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。
// 使用事件代理我们可以不必要为每一个子元素都绑定一个监听事件，这样减少了内存上的消耗。并且使用事件代理我们还可以实现事件的动态绑定，
// 比如说新增了一个子节点，我们并不需要单独地为它添加一个监听事件，它所发生的事件会交给父元素中的监听函数来处理。
// var p1 = new Promise((resolve,reject) => {
//     console.log('没有resolve');
//     reject('失败了')
// })
// p1.then(data => {
//     console.log('成功');
// }, err => {
//     console.log('失败');
// }).catch(
//     res => {
//         console.log('没进入resolve和reject');
//     }
// )
// .trangle {
//     position: absolute;
//     width: 0;
//     height: 0;
//     border-width: 0 10px 10px 10px;
//     border-style: solid;
//     border-color: transparent transparent white transparent;
// }
// const fn = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let num = Math.ceil(Math.random() * 10);
//         if( num > 5) {
//             resolve(num);
//         } else {
//             resject(num);
//         }
//     }, 2000)
// })
// fn.then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })
// fn.then(res => {
//     console.log(res);
//     return new Promise((resolve, reject) => {
//         if (2 * res > 15) {
//             resolve(2 * res)
//         } else {
//             reject( 2 * res)
//         }
//     })
// }, err => {
//     console.log('失败')
// }).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err);
// })
// Promise.resolve('hello');
// const promise =new Promise(resolve => {
//     resolve('hello');
// })
// function a(numberone) {
//     var count = numberone;
//     return function(numbertwo) {
//         if (numbertwo === undefined) {
//             return count;
//         } else {
//             count += numbertwo;
//             return b;
//         }
//     }
// }
// console.log(a(1)(2)());
// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     },200)
// }
// for (var i = 0; i < 5; i++) {
//     setTimeout(
//             function a() {
//             var temp = i;
//             return function() {
//                 console.log(temp);
//             };
//         }(),200)
// }
// for (var i =0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000)
//     })(i);
// }
// function debounce(fn, delay) {
//     let timer = null; 
//     return function() {
//         if(timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(fn, delay)
//     }
// }
// function showTop() {
//     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log('滚动条的位置'+scrollTop);
// }
// // window.onscroll = debounce(showTop, 1000);
// function throttle(fn, delay) {
//     let valid = true;
//     return function() {
//         if(!valid) {
//             return false;
//         }
//         valid = false;
//         setTimeout(() => {
//             fn();
//             valid =true;
//         }, delay)
//     }
// }
// quick_sort(arr,l,i-1);
// quick_sort(arr,i+1,r);
// class Json {
//     constructor() {
//         console.log(this);
//         this.a = 12;
//         this.fun() {
//             console.log(this);
//         }
//     }
//     height = 2;
// }
// let json = new Json();
// let EData = new Data();
// EData.fun = json.fun;
// EData.fun();
// a.charCodeAt(i) - 97
// 斐波拉切数列求和
// function Fib(n) {
//     if(n<1) {return false;}
//     if(n === 1 || n === 2) return 1;
//     let arr = [1,1];
//     for (let i = 2; i < n; i++) {
//         arr[i] = arr[i-1] + arr[i-2];
//     }
//     var k = arr.pop()
//     return k ;
//  }
// console.log(Fib(20));
// 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);
// 3
// 1 2 3
// 2 1 3
// 3 2 1
// 这道题的思路可以建一个字典，包括a和A通过他们的ascll码编程数组中的0，其他符号一个道理
// 然后判断数组中最大的值，可以是多个，进行输出
// var checkInclusion = function(s1, s2) {
//       if(typeof s1 !== "string" || typeof s2 !== "string" || s1.length ===0 || s2.length ===0) {return false;} 
//       let dictionary = new Array(26).fill(0);
//       for (let i = 0; i < s1.length; i++) {
//           let code = s1.charCodeAt(i) - 97;
//           dictionary[code]++;
//       }
//       for (let left = 0,right = 0; right < s2.length; right++) {
//         let code = s2.charCodeAt(right)-97;
//         dictionary[code]--;
//         while(dictionary[code] < 0) {
//             dictionary[s2.charCodeAt(left)-97]++;
//             left++;
//         }
//         if (right - left +1 === s1.length) 
//             return true;
//       }
//         return false;
// }
// console.log(checkInclusion("ab","abcv"));
// 将字符串翻转
// 立刻想到的是将字符串切割成数组进行翻转然后在转变成字符串
// function reverseString(str) {
//     return str = str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));
// 使用for循环
// function reverseString2(str) {
//     var newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString2("hello"));
// // 去重
// var arr=[2,8,5,0,5,2,6,7,2];
// function unique1(arr){
//   var hash=[];
//   for (var i = 0; i < arr.length; i++) {
//      if(hash.indexOf(arr[i])==-1){
//       hash.push(arr[i]);
//      }
//   }
//   return hash;
// }
// console.log(unique1(arr))
// let [x, , y] = [1, 2, 3];
// console.log(x,'+',y);
// 解构赋值
// 原来是
// let a = 1;
// let b = 2;
// let c = 3;
// 现在是
// let [a, b, c] = [1, 2, 3];
// const set = new Set([1,2,3,4,5,4]);
// console.log([...set]);
// function * helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
// var hw = helloWorldGenerator();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// 异或运算
// console.log(1^1);
// function NumberFind(arr) {
//     var len = arr.length;
//     var res = -1;
//     if (len > 1) {
//         res = arr[0];
//         for (let i = 1; i < len; i++) {
//             res = res ^ arr[i];
//         }
//     }
//     return res;
// }
// arr = [1,1,2,3,2,3,4,4,6,6,7];
// console.log(NumberFind(arr));
// var a = new Object();
// a.value = 1;
// b = a;
// b.value = 2;
// setTimeout(() => {
//     console.log(2);
//   });
// new Promise((resolve, reject) => {
//     console.log(3)
//     resolve(4)
//   }).then((data) => {
//     console.log(data);
//   })
//   var name = 'xx';
//   () => {
//       console.log(this.name)
//   }
// function towNum(r,l) {
//     var arr;
//     for (let i =0; i < r.length; i++) {
//         if(r.indexOf(l[i]) !== -1) {
//            arr.push(l[i]); 
//         }
//     }
//     console.log(arr);    
// }
// Math.max(arr1)-Math.min(arr2);
// ...new Set([])
// k.    k.apply([],arr);
// Function.prototype.bind() {
//     return bind;
// }
// (\d{?={?:\d{3}+\.},","})
// 描述上一行数组所含的数字
// eg: 第四行 1 1 1 2 2 3
// 输出 第五行 3 1 2 2 1 3 三个一 两个二 一个三
// function descirbe(arr) {
//     var count = 1;
//     var res = new Array();
//     for (let i = 0; i < arr.length; i++) {
//         if(arr.length === 1) {console.log(1 + "arr[i]"); break;
//         }
//         if(arr[i] === arr[i+1]){
//            count++;
//           } else {
//               res.push(count);
//               res.push(arr[i]);
//               count = 1;
//           }
//     }
//     console.log(res);
// }
// arr = [1,2,1,1];
// descirbe(arr);
// function Chicken(headAndFoot) {
//     var str = headAndFoot.split(",");
//     var head = parseInt(str[0]);
//     var foot = parseInt(str[1]);
//     if(head <= 1) console.log("NODATA");
//     var too = 0;
//     for (let j = 0; j < head; j++) {
//         too = head - j;
//         if(j * 2 + too * 4 === foot) {
//             console.log(j + "," + too);
//         }
//     }
// }
// function Select_Sort(nums) {
//     var N = nums.length;
//     for (let i = 0; i < N-1; i++) {
//         var min = i;
//         for (let j = i + 1; j < N; j++) {
//             if (nums[j] < nums[min])
//             min = j;
//         }
//     var t = nums[i];
//     nums[i] = nums[min];
//     nums[min] = t;
//     }
//     console.log(nums);
// }
// function reverseString(str) {
//     return str = str.split('').reverse().join('');
// }
// 指定插入到第二个参数之前
// 插入后成为最后一个子节点
// returnedNode = someNode.insertBefore(newNode,null);
// alert(newNode === someNode.lastChild); // true
// 插入后成为第一个子节点
// var returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
// alert(returnedNode === newNode); // true
// alert(newNode === someNode.firstChild); //true
// 插入到最后一个子节点前面
// returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
// alert(newNode === someNode.child[someNode.childNodes.length-2]); //true
// 替换第一个子节点
// var returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
// 替换最后一个子节点
// returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
// 移除第一个子节点
// var formerFirstChild = someNode.removeChild(someNode.firstChild);
// 移除最后一个子节点
// var formerLastChild =someNode.removeChild(someNode.lastChild);
// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000)
//     })(i);
// }
// const test = (name) => {
//     console.log(name);
// }
// test('Jerry');
// const obj = {
//     a: () => {
//         console.log(this)
//     }
// }
// obj.a();
// const obj = {
//     a: function() {console.log(this)}
// }
// obj.a();
// 求最小公倍数从迭代法求最大公约数开始
// function gcd(a,b) {
//     var temp;
//     while(b != 0) {
//         temp = a % b;
//         a = b;
//         b = temp;
//     }
//     return a;
// }
// function scm(a, b) {
//     return (a * b) / gcd(a, b);
// }
// console.log(scm(5,15));
// js实现括号匹配
// function SingUp(arr){
//     arr = arr.split('');
//     var temp =[];
//     var flag=true;
//     var count = 0;
//     for(let i=0;i<arr.length;i++){
//         var x=arr[i];
//         switch(x){
//             case '(' :
//             case '{' :
//             case '[' :
//             temp.push(x);
//             count++;
//             break;
//             case ')' :
//             case '}' :
//             case ']' :
//                 topEle=temp.pop();
//                 if(topEle=='{'&&x=='}'||topEle=='('&&x==')'||topEle=='['&&x==']'){
//                    continue;
//                 }
//                 else{
//                     // console.log('括号不匹配')将标志位置为false;
//                     flag=false;
//                 }
//         }
//     }
//     if(flag){
//         console.log(count);
//     } else {
//         console.log(0);
//     }
// }
//   var arr='{([])}';
// SingUp(arr);
// class qiangGuo {
//     constructor(height, weight) {
//       this.height = '173cm';
//       this.weight = '70kg';
//     }
//     introduction() {
//       return 'He' + 'is' +  this.x + ', ' + this.y + '!';
//     }
//     Sing() {
//         return 'He can sing 阿司匹林 ！'
//     }
//     Swimming() {
//         return 'He can swims 1000m once !'
//     }
//     Work() {
//         return 'javascript + html + css + network'
//     }
//     Vedio() {
//         return 'PR + 小丸工具箱 + LumaFusion'
//     }
//     Eat() {
//         return 'Everthing !'
//     }
//   }
// 绝对定位做居中
// position: absolute;
// top: 0;
// left: 0;
// right: 0;
// bottom: 0;
// margin: auto;
// background: orange;
// 烟火动画
// $color-green: rgb(59, 201, 22);
// $color-pink: rgb(255, 102, 159);
// $color-blue: rgb(74, 171, 255);
// $color-yellow: rgb(255, 198, 102);
// $color-green-transparent: rgba(59, 201, 22, .5);
// $color-pink-transparent: rgba(255, 102, 159, .5);
// $color-blue-transparent: rgba(74, 171, 255, .5);
// $color-yellow-transparent: rgba(255, 198, 102, .5);
// // css中数组使用括号括起来的，前两个是起始位置，第三四个是结束为止（前后一起表示运动轨迹）
// // 烟火动画
// $moves: (
//         (startX: 0, startY: 0, endX: 0, endY: 55, width: 6, height: 6, background: $color-green),
//         (startX: 0, startY: 0, endX: 15, endY: 60, width: 4, height: 4, background: $color-pink-transparent),
//         (startX: 0, startY: 0, endX: 35, endY: 45, width: 4, height: 4, background: $color-blue-transparent),
//         (startX: 0, startY: 0, endX: 50, endY: 25, width: 6, height: 6, background: $color-yellow),
//         (startX: 0, startY: 0, endX: 60, endY: 0, width: 2, height: 2, background: $color-pink-transparent),
//         (startX: 0, startY: 0, endX: 50, endY: -25, width: 6, height: 6, background: $color-blue),
//         (startX: 0, startY: 0, endX: 40, endY: -30, width: 3, height: 3, background: $color-green-transparent),
//         (startX: 0, startY: 0, endX: 20, endY: -55, width: 5, height: 5, background: $color-pink),
//         (startX: 0, startY: 0, endX: 5, endY: -45, width: 4, height: 4, background: $color-green-transparent),
//         (startX: 0, startY: 0, endX: -20, endY: -50, width: 2, height: 2, background: $color-pink-transparent),
//         (startX: 0, startY: 0, endX: -40, endY: -50, width: 2, height: 2, background: $color-green-transparent),
//         (startX: 0, startY: 0, endX: -55, endY: -30, width: 4, height: 4, background: $color-blue),
//         (startX: 0, startY: 0, endX: -55, endY: -10, width: 3, height: 3, background: $color-yellow-transparent),
//         (startX: 0, startY: 0, endX: -55, endY: -5, width: 3, height: 3, background: $color-green-transparent),
//         (startX: 0, startY: 0, endX: -35, endY: -7, width: 2, height: 2, background: $color-pink-transparent),
//         (startX: 0, startY: 0, endX: -45, endY: 10, width: 4, height: 4, background: $color-yellow-transparent),
//         (startX: 0, startY: 0, endX: -50, endY: 25, width: 6, height: 6, background: $color-pink),
//         (startX: 0, startY: 0, endX: -40, endY: 35, width: 4, height: 4, background: $color-green-transparent)
// );
// @mixin move($index) {
//   $item: nth($moves, $index);
//   $keyframesName: "move" + $index;
//   $animationTime: .75s;
//   $animationType: linear;
//   $animationIterator: 1;
//   $width: map-get($item, width);
//   $height: map-get($item, height);
//   $backgroud: map-get($item, background);
//   $startX: map-get($item, startX);
//   $startY: map-get($item, startY);
//   $endX: map-get($item, endX);
//   $endY: map-get($item, endY);
//   width: px2rem($width);
//   height: px2rem($height);
//   background: $backgroud;
//   animation: #{$keyframesName} $animationTime $animationType $animationIterator;
//   @keyframes #{$keyframesName} {
//     0% {
//       transform: translate3d(px2rem($startX), px2rem($startY), 0) scale(0);
//       opacity: 0;
//     }
//     50% {
//       transform: translate3d(px2rem($endX * 0.5), px2rem($endY * 0.5), 0) scale(.5);
//       opacity: 1;
//     }
//     90% {
//       transform: translate3d(px2rem($endX), px2rem($endY), 0) scale(1);
//       opacity: 1;
//     }
//     100% {
//       transform: translate3d(px2rem($endX * 1.05), px2rem($endY * 1.05), 0) scale(1);
//       opacity: 0;
//     }
//   }
// }
// 为了解决浮点数运算不准确的问题，在运算前我们把参加运算的数先升级(10的X的次方)
// 到整数，等运算完后再降级(0.1的X的次方)。
// 先将小数变为字符串再用split以点分割成一个数组，数组中包括两个元素一个是点
// 前面的0，第二个是点后面的字符串一串数字，计算它的长度并把这个长度作为以
// 10为基数，升级的次幂。Math.pow(10,x)。然后用小数乘一下。
// 注意计算出来的指数，要根据两个相加的小数取里面小数点后面多的，也就是指数大的。
// console.log(0.11111.toString().split(".")[1].length)
// 加法为例子
// Number.prototype.add = function(arg){   
//     var r1,r2,m;   
//     try{r1=this.toString().split(".")[1].length}catch(e){r1=0}   
//     try{r2=arg.toString().split(".")[1].length}catch(e){r2=0}   
//     m=Math.pow(10,Math.max(r1,r2))   
//     return (this*m+arg*m)/m   
// }
// Number.prototype.add = function(arg) {
//     var r1, r2, m;
//     try{r1 = this.toString().split(".")[1].length} catch(e) {r1 = 0}
//     try{r2 = arg.toString().split(".")[1].length} catch(e) {r2 = 0}
//     m = Math.pow(10, Math.max(r1, r2))
//     return (this * m + arg * m)
// }  
//  无重复字符的最长子串
// 思路：使用新数组arr然后每一轮循环都维护max。
// 每一轮判断字符串的下一个元素是否存在于数组arr中，通过用indexOf方法（如果有返回下标，没有返回-1）
// // 如果数组arr中存在，那么删掉
// var lengthOfLongestSubstring = function(s) {
//     let arr = [];
//     let max = 0;
//     let index =0;
//     for (let i =0; i< s.length;i++) {
//         index = arr.indexOf(s[i]);
//         if(index !== -1) {
//             arr.splice(0, index+1);
//         }
//         arr.push(s[i]);
//         max = Math.max(arr.length, max);
//     }
//     console.log(max);  
// };
// lengthOfLongestSubstring("pwwkew");
// 事件委托，而不是给每一个标签都添加一个事件，利用冒泡属性，只给最外层的添加一个方法
/* {<ul id="myLinks">
<li id="goSomewhere">Go somewhere</li>
<li id="doSomething">Do something</li>
<li id="sayHi">Say hi</li>
</ul>

var list = document.getElementById("myLinks");
EventUtil.addHandler(list, "click", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
switch(target.id){
case "doSomething":
document.title = "I changed the document's title";
break;
case "goSomewhere":
location.href = "http://www.wrox.com";
break;
case "sayHi":
alert("hi");
break;
}
// }); }*/
// 即用 var 操作符定义的变量将成为定义该变量的作用域中的局部变量。也就是说，
// 如果在函数中使用 var 定义一个变量，那么这个变量在函数退出后就会被销毁
// function test() {
//      message = "hi";
// }
// test();
// console.log(message);
// console.log(typeof s)
// console.log( s)
// var colors = new Array();
// colors.unshift('a','b');
// console.log(colors);
// var num = [1,2,3,4,5];
// console.log(num.reverse());
// console.log(num.sort());
// function compare(value1, value2) {
//     if (value1 < value2) {
//         return -1;
//     } else if (value1 > value2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }
// var values = [0,1,5,10,15];
// console.log(values.sort(compare));
// var colors = ["red", "green", "blue"];
// var colors2 = colors.concat("yellow", ["black", "brown",["mb","kao"]]);
// console.log(colors2);
// filter()函数，它利用指定的函数确定是否在返回的数组中包含某一项。例如，要
// 返回一个所有数值都大于 2 的数组，
// var numbers = [1,2,3,4,5,4,3,2,1];
// var filterRes = numbers.filter((res) => {
//     return (res > 2);
// })
// console.log(filterRes);
//map()也返回一个数组，而这个数组的每一项都是在原始数组中的对应项上运行传入函数的结果。
// var numbers = [1,2,3,4,5,4,3,2,1];
// var mapResult = numbers.map(function(item, index, array){
// return item * 2;
// });
// console.log(mapResult); //[2,4,6,8,10,8,6,4,2]
// reduce()和 reduceRight()。这两个方法都会迭
// 代数组的所有项，然后构建一个最终返回的值。其中， reduce()方法从数组的第一项开始，逐个遍历
// 到最后。而 reduceRight()则从数组的最后一项开始，向前遍历到第一项。
// var val = [1,2,3,4,5];
// var sum = val.reduce((pre, cur) => {
//     return pre + cur;
// })
// console.log(sum);
// var val = [1,2,3,4,5];
// var sum = val.reduceRight((pre, cur) => {
//     return pre + cur;
// })
// console.log(sum);
// // 数据属性
// var person = {};
// Object.defineProperty(person, "name", {
//     writable : false,
//     value : 'Nicholas'
// });
// console.log(person.name);
// person.name = "Gera";
// console.log(person.name);
// 访问器属性
// var book = {
//     _year : 2004,
//     edition : 1
// };
// Object.defineProperty(book,"year", {
//     get: function() {
//         return this._year;
//     },
//     set: function(newYear) {
//         if (newYear > 2004) {
//             this._year = newYear;
//             this.edition += newYear - 2004;
//         }
//     }
// });
// book.year = 2006;
// console.log(book.edition);
// Object.defineProperties()方法。
// var book = {};
// book.year = 2006;
// Object.defineProperties(book, {
//     _year: {
//         value: 2004
//     },
//     edition: {
//         value: 1
//     },
//     year: {
//         get: function() {
//             return this._year;
//         },
//         set: function(newValue) {
//             if (newValue > 2004) {
//                 this._year = newValue;
//                 this.edition += newValue - 2004;
//             }
//         }
//     }
// });
// console.log(book.year);
// console.log(book._year);
// console.log(book.edition);
// 工厂模式
// funciton creatPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function() {
//         console.log(this.name);
//     };
//     return o;
// };
// var person1 = createPerson("Nicholas", 29, "Software Engineer");
// var person2 = createPerson("Greg", 27, "Doctor");
// 构造函数模式
// class Person {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }
//     sayName = function () {
//         console.log(this.name);
//     };
// }
// var person1 = new Person("mike", 20, "Software Engineer");
// var person2 = new Person("max", 18, "doctor");
// console.log(person1.constructor === Person);
// console.log(person2.constructor === Person);
// console.log(person2 instanceof Person);
// console.log(person2 instanceof Object);

/**
 * 写一个XmlHttpRequest请求
 */
// const SERVER_URL = '/server';
// let xhr = new XMLHttpRequest();

// // 创建http请求
// xhr.open('GET', SERVER_URL, true);

// // 设置状态监听函数
// xhr.onreadystatechange = function() {
//     if (this.readyState !==4) return;

//     //当请求成功时
//     if (this.status === 200) {
//         handle(this.response);
//     } else {
//         console.log(this.statusText);
//     }
// };

// // 设置请求失败时的监听函数
// xhr.onerror = function() {
//     console.log(this.statusText);
// };
// // 设置请求头信息
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");

// // 发送http请求
// xhr.send(null);

// /**
//  * 模块开发 commonjs\AMD\CMD\ES6的export和import
//  */
// // CMD 
// define(funciton(require, exports, module) {
//     var a = require("./a");
//     a.doSomething();
//     //此处省略100行
//     var b = require("./b");
//     b.doSomething();
//     // ...
// });
// // AMD 默认推荐
// define(["./a","./b"], function(a, b) {
//     // 依赖必须一开始就写好
//     a.doSomething();
//     // 此处省略100行
//     b.doSomething();
//     // ...
// });


// 用函数来封装以特定的接口创建对象的细节
// function createPerson(name, age ,job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayaName = function() {
//         alert(this.name);
//     }
//     return o;
// }
// var person1 = createPerson("Mike",20,"SoftWare Engineer");
// var person2 = createPerson("nike",28,"doctor");

//构造函数
// function Person(name, age ,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = function() {
//         alert(this.name);
//     };
// }
// var person1 = new Person("Mike", 20, "Engineer");
// var person2 = new Person("Greg", 29, "Doctor");

// 原型对象
// function Person() {

// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 20;
// Person.prototype.job = "Engineer";
// Person.prototype.sayName = function() {
//     console.log(this.name);
// };
// var person1 = new Person();
// person1.sayName();
// var person2 = new Person();
// person2.sayName();

// 组合使用构造函数来创建属性，让实例有自己的属性副本，原型模式俩创建共享的方法，共享西相同的方法引用
// function Person(name, age ,job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.friends = ["Shelby", "Court"];
// }
// Person.prototype = {
//     constructor : Person,
//     sayName : function() {
//         console.log(this.name);
//     }
// }
// var person1 = new Person("Nicholas",20,"software Engineer");
// var person2 = new Person("Greg", 20, "Doctor");
// person1.friends.push("Van");
// console.log(person1.friends);
// console.log(person2.friends);
// console.log(person1.friends === person2.friends);
// console.log(person1.sayName === person2.sayName);
// console.log(person1.sayName());

// 原型链的继承
// function SuperType() {
//     this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//     return this.property;
// };
// function SubType() {
//     this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSuperValue = function() {
//     return this.subproperty;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue());

// 借用构造函数继承
// function SuperType() {
//     this.colors = ["red", "blue", "green"];
// }
// function SubType() {
//     // 继承了SuperType
//     SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors);
// var instance2 = new SubType();
// console.log(instance2.colors);

// 组合继承
// function SuperType(name) {
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
//     console.log(this.name);
// };
// function SubType(name, age) {
//     // 继承属性
//     SuperType.call(this, name);
//     this.age = age;
// }
// // 继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function() {
//     console.log(this.age);
// };

// var instance1 = new SubType("Nicholas",20);
// instance1.colors.push("black");
// console.log(instance1.colors);
// instance1.sayName();
// instance1.sayAge();

// var instance2 = new SubType("HerMan", 18);
// console.log(instance2.colors);
// instance2.sayName();
// instance2.sayAge();

// function debounce(fn, delay) {
//     let timer = null;
//     return function() {
//         if (timer) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(fn,delay)
//     }
     
// }


// function throttle(fn, delay) {
//     let valid = true;
//     return function() {
//         if (!valid) {
//             //状态位为false，表示休息时间
//             return false;
//         }
//         valid = false;
//         setTimeout(() => {
//             fn();
//             valid = true;
//         },delay)
//     }
// }

// 函数柯里化 curry
// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// } 

// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }

// 函数柯里化指一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术，也就是
// 输入一个参数返回一个值
// function curry(fn, args) {
//     // 获取函数需要的参数长度
//     let length = fn.length;
//     args = args || [];
//     return function() {
//         let subArgs = args.slice(0);
//         // 拼接得到现有的所有参数
//         for (let i =0; i< arguments.length; i++) {
//           subArgs.push(arguments[i]);
//         }
//         // 判断参数的长度是否已经满足函数所需要参数对的长度
//         if (subArgs.length >= length) {
//             // 如果满足 则执行
//             return fn.apply(this, subArgs);
//         } else {
//             // 如果不满足，递归返回柯里化函数，等待参数的传入
//             return curry.call(this, fn, subArgs);
//         }
//      };
// }

// function curry(fn, args) {
//     let length = fn.length;
//     args = args || [];
   
//     return function() {
//         let subArgs = args.slice(0);
//         for (let i = 0; i < arguments.length; i++) {
//             subArgs.push(arguments[i]);
//         }
//         if(subArgs.length >= length) {
//             fn.apply(this, subArgs);
//         } else {
//             curry.call(this, fn, subArgs);
//         }
//     }
// }

// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }

// 浅拷贝
// function shallowCopy(object) {
//     // 只拷贝对象
//     if (!object || typeof object !== "object") return;
//     // 根据object的类型判断是新建对象还是数组
//     let newObject = Array.isArray(object) ? [] : {};
//     // 遍历object，并且判断是object的属性才拷贝
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             newObject[key] = object[key];
//         }
//     }
//     return newObject;
// }

// 深拷贝
// function deepCopy(object) {
//     // 只拷贝对象
//     if (!object || typeof object !== "object") return;
//     // 根据object的类型判断是新建对象还是数组
//     let newObject = Array.isArray(object) ? [] : {};
//     // 遍历object，并且判断是object[key]是否是引用类型，是的话继续递归不是的话，直接将属性拷贝
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             newObject[key] = 
//             typeof object[key] === "object" ? 
//             deepCopy(object[key]) : object[key];
//         }
//     }
//     return newObject;
// }

// function shallowCopy(object) {
//     if (!object || typeof object !== "object") return;
//     let newObj = Array.isArray(object) ? [] : {};
//     for ( let key in object) {
//         if (object.hasOwnproperty(key)) {
//             newObj = object[key];
//         }
//     }
//     return newObj;
// }

// function deepCopy(object) {
//     if (!object || typeof object !== "object") return;
//     let newObj = Array.isArray(object) ? [] : {};
//     for ( let key in object) {
//         if (object.hasOwnproperty(key)) {
//             newObj = 
//             typeof object[key] === "object" ?
//             deepCopy(object[key]) : object[key];
//         }
//     }
//     return newObj;
// }


// function shallowCopy(object) {
//     if(!object || typeof object !== "object") return;
//     let newObject = Array.isArray(object) ? [] : {};
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             newObject[key] = object[key];
//         }
//     }
//     return newObject;
// }


// function deepCopy(object) {
//     if(!object || typeof object !== "object") return;
//     let newObject = Array.isArray(object) ? [] : {};
//     for (let key in object) {
//         if (object.hasOwnProperty(key)) {
//             typeof newObject[key] === "object" ?
//             deepCopy(object[key]) : object[key];
//         }
//     }
//     return newObject;
// }

// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : CountQueuingStrategy.bind(null, ...args);
// }

// function curry(fn, args) {
//     let length = fn.length;
//     args = args || [];
//     return function() {
//         let subArgs = args.slice(0);
//         for (let i = 0; i < arguments.length; i++) {
//             subArgs.push(arguments[i]);
//         }
//         if (subArgs.length >= length) {
//             return fn.apply(this. subArgs);
//         } else {
//             return curry.call(this, fn , subArgs);
//         }
//     };
// }
// console.log((0.1+0.2-0.3 )< Number.EPSILON);

// 昨天两个数字相加减去右边的结果如果小于Number.EPSILON也可以判断两遍相等

// let list = [1,2,3,4,5];
// const incrementNumbers = (list) => list.map(number => number + 1);
// console.log(incrementNumbers.length);

// 为什么使用 setTimeout 实现 setInterval？怎么模拟？
// 思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果

// function mySetInterval(fn, timeout) {
//     // 控制器，控制定时器是否继续执行
//     var timer = {
//         flag: true
//     };
//     // 设置递归函数，模拟定时器执行
//     function interval() {
//         if (timer.flag) {
//             fn();
//             setTimeout(interval, timeout);
//         }
//     }
//     // 启动定时器
//     setTimeout(interval, timeout);
//     // 返回控制器
//     return timer;
// }


// 手写一个 Promise
// const PENDING = "peding";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//     // 保存初始化状态
//     var self = this;
//     //初始化状态
//     this.state = PENDING;
//     // 用于保存resolved或者rejected传入的值
//     this.value = null;
//     // 用于保存resolve的回调函数
//     this.resolvedCallbacks = [];
//     //用于保存reject的回调函数
//     this.rejectedCallbacks = [];
//     // 状态转变为resolved方法
//     function resolve(value) {
//         // 判断传入元素是否为Promise值， 如果是，则状态改变必须等待前一个状态改变后在进行改变
//         if (value instanceof MyPromise) {
//             return value.then(resolve, reject);
//         }
//         // 保证代码的执行顺序为本轮事件循环的末尾
//         setTimeout(() => {
//             // 只有状态为pending时才能转变
//             if (self.state === PENDING) {
//                 // 修改状态
//                 self.state = RESOLVED;
//                 // 设置传入的值
//                 self.value = value;
//                 // 执行回调函数
//                 self.resolvedCallbacks.forEach(callback => {
//                     callback(value);
//                 })
//             }
//         }, 0);
//     }
//     // 状态改变为rejected方法
//     function reject(value) {
//         // 保证代码执行顺序为本轮事件循环的末尾
//         setTimeout(() => {
//             // 只有状态为pending时才能转变
//             if (self.state === PENDING) {
//                 // 修改状态
//                 self.state = REJECTED;
//                 // 设置传入的值
//                 self.value = value;
//                 // 执行回调函数
//                 self.rejectedCallbacks.forEach(callback => {
//                     callback(value);
//                 })
//             }
//         }, 0);
//     }
//     // 将两个方法传入函数执行
//     try {
//         fn(resolve, reject);
//     } catch (e) {
//         // 遇到错误时，捕获错误，执行reject函数
//         reject(e);
//     }
// }

// MyPromise.prototype.then = function(onResolved, onREjected) {
//     // 首先判断两个参数是否为函数类型，因为这两个参数时可选参数
//     onResolved =
//     typeof onResolved === "function"
//     ? onResolved
//     : function(value) {
//         return value;
//     };
//     onReject = 
//     typeof Onreject === "function"
//     ? onREjected
//     : function(error) {
//         return error;
//     };
//     // 如果是等待状态，则将函数加入对应列表中
//     if (this.state === PENDING) {
//         this.resolvedCallbacks.push(onResolved);
//         this.rejectedCallbacks.push(onREjected);
//     }
//     // 如果状态已经凝固，则直接执行对应状态的函数
//     if (this.state === RESOLVED) {
//         onResolved(this.value);
//     }
//     if (this.state === REJECTED) {
//         onREjected(this.value);
//     }

// };

// 20200813手写promise
// const PENDING = "pending";
// const RESOLVED = "resolved";
// const rejected = "REJECTED";
// function MyPromise(fn) {
//     // 保存初始状态
//     var self = this;
//     // 初始化状态
//     this.state = PENDING;
//     // 用于保存resolved或rejected传入的值
//     this.value = null;
//     // 用于保存resolve的回调函数
//     this.resolvedCallbacks = [];
//     // 用于保存reject的回调函数
//     this.rejectedCallbacks = [];
//     // 状态转变为resolved方法
//     funciton resolve(value) {
//         // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后在进行改变
//         if (value instanceof MyPromise) {
//             return value.then(resolve, reject);
//         }
//         // 保证代码的执行顺序为本轮事件循环的末尾
//         setTimeout(() => {
//             // 只有状态由pending时才能转变
//             if (self.state === PENDING) {
//                 // 修改状态
//                 self.state = RESOLVED;
//                 // 设置传入的值
//                 self.value = value;
//                 // 执行回调函数
//                 self.resolvedCallbacks.forEach(callback => {
//                     callback(value);
//                 });
//             }
//         }, 0);
//     }
//     // 状态改变为rejected方法
//     funciton reject(value) {
//         // 保证代码的执行顺序为本轮事件循环的末尾
//         setTimeout(() => {
//             // 只有状态由pending时才能转变
//             if (self.state === PENDING) {
//                 // 修改状态
//                 self.state = REJECTED;
//                 // 设置传入的值
//                 self.value = value;
//                 // 执行回调函数
//                 self.rejectedCallbacks.forEach(callback => {
//                     callback(value);
//                 });
//             }
//         }, 0);
//     }
//     // 将两个方法传入函数执行
//     try {
//         fn(resolve, reject);
//     } catch (e) {
//         // 遇到错误的话，捕获错误，执行reject函数
//         reject(e);
//     }

// }

// MyPromise.prototype.then(onResolved, onRejected) {
//     // 首先判断两个参数是否为函数类型，因为这两个参数时可选参数
//     onREsolved = 
//     typeof onREsolved === "function"
//     ? onREsolved 
//     : function(value) {
//         return value;
//     };
//     onRejected = 
//     typeof onRejected === "funciton"
//     ? onRejected
//     : funciton(error) {
//         return error;
//     };
//     // 如果是等待状态，则将函数加入对应列表中
//     if (this.state === PENDING) {
//         this.resolvedCallbacks.push(onResolved);
//         this.rejectedCallbacks.push(onRejected);
//     }
//     // 如果状态已经凝固，则执行对应的状态函数
//     if (this.state === RESOLVED) {
//         onREsolved(this.value);
//     }
//     if (this.state === REJECTED) {
//         onRejected(this.value);
//     }
// };

// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//     // 保存初始化状态
//     var self = this;
//     // 初始化状态
//     this.state = PENDING;
//     // 用于保存resolved或者rejected传入的值
//     this.value = null;
//     // 用于保存resolve的回调函数
//     this.resolveCallbacks = [];
//     // 用于保存reject的回调函数
//     this.rejectCallbacks = [];
//     // 状态转变为resolved方法
//     funciton resolve(value) {
//         // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后在进行改变
//         if (blaue instanceof MyPromise) {
//             return value.then(resolve, reject);
//         }
//         // 保证代码的执行顺序为本轮事件循环结尾
//         setTimeout(() => {
//             // 只有状态为pending时才能转变
//             if (self.state === PENDING) {
//                 // 修改状态
//                 self.state = RESOLVED;
//                 // 设置传入的值
//                 self.value = value;
//                 // 执行回调函数
//                 self.resolvedCallbacks.forEach(callbakc => {
//                     callbakc(value);
//                 });
//             }
//         }, 0);
//     }
//     // 状态转变为rejected方法
//     funciton reject(value) {
//         // 保证代码的执行顺序为本轮事件循环结尾
//         setTimeout(() => {
//             // 只有状态为pending时才能转变
//             if (self.state === PENDING) {
//                 // 修改状态
//                 self.state = REJECTED;
//                 // 设置传入的值
//                 self.value = value;
//                 // 执行回调函数
//                 self.rejectedCallbacks.forEach(callbakc => {
//                     callbakc(value);
//                 });
//             }
//         }, 0);
//     }
//     // 将两个方法传入函数执行
//     try {
//         fn(resolce, reject);
//     } catch (e) {
//         // 遇到错误时，捕获错误，执行reject函数
//         reject(e);
//     }
// }
// MyPromise.prototype.then = funciton(onResolved, onReejcted) {
//     // 首先判断两个参数是否为函数类型，因为这两个参数时可选的
//     onResolved =
//     typeof onResolved === "function"
//     ? onResolved
//     : function(value) {
//         return value;
//     };
//     onRejected = 
//     typeof onRejected === "function"
//     ? onRejected
//     : function(error) {
//         throw error;
//     };
//     // 如果是等待状态，则将函数加入对应列表中
//     if (this.state === PENDING) {
//         this.resolvedCallbakc.push(onResolved);
//         this.rejectedCallbacks.push(onRejected);
//     }
//     // 如果状态已经凝固，则直接执行对应的状态函数
//     if (this.state === RESOLVED) {
//         onResolved(this.value);
//     }
//     if (this.state === REJECTED) {
//         onRejected(this.value);
//     }
// };

// 如何封装一个JavaScript的类型判断函数
// function getType(value) {
//     // 判断数据是null的情况
//     if (value === null) {
//         return value+ "";
//     }
//     // 判断数据是引用类型的情况
//     if (typeof value === "object") {
//         let valieClass = Object.prototype.toString.call(value),
//         type = valueClass.split("")[1].split("");
//         type.pop();
//         return type.join("").toLowerCase();
//     } else {
//         // 判断数据是基本数据类型的情况和函数的情况
//         return typeof value;
//     }
// }

//如何判断一个对象是否为空对象？

// Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
// function checkNullObj(obj) {
//     return Object.keys(obj).length === 0;
// }

// 使用闭包实现每隔一秒打印1234
// for (var i =0; i < 5; i++) {
//     (function(i){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000)
//     })(i)
// }

// for (let i =0 ;i < 5; i++) {
//    setTimeout(() => {
//     console.log(i);
//    }, i * 1000)
// }

// 一道常被人轻视的前端 JS 面试题,
// 包含了变量定义提升、this指针指向、
// 运算符优先级、原型、继承、全局变量污染、对象属性及原型属性优先级等知识，
// function Foo() {
//     getName = function() {
//       alert(1);
//     };
//     return this;
//   }
//   Foo.getName = function() {
//     alert(2);
//   };
//   Foo.prototype.getName = function() {
//     alert(3);
//   };
//   var getName = function() {
//     alert(4);
//   };
//   function getName() {
//     alert(5);
//   }
  
//   //请写出以下输出结果：
//   Foo.getName(); // 2
//   getName(); // 4
//   Foo().getName(); // 1
//   getName(); // 1
//   new Foo.getName(); // 2
//   new Foo().getName(); // 
//   new new Foo().getName(); // 


// vm.$set的原理
// 由于 JavaScript 的限制，Vue 不能检测数组和对象的变化
// Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式 property。
// vm.$set 实例方法是全局 Vue.set 方法的别名
/*
data里的响应式数据都有_ob_的标签
第一步：target类型判断，基本数据类型不行，数组和对象可以
第二步：对于数组的处理其实就是调用了splice方法，之家添加或替换
第三步：对于对象，key存在，直接替换，key不存在对象中
target如果为非响应式对象，直接给target的key赋值，如果是响应式对象，进行依赖收集
*/
/*
function set(target: Array<any> | Object, key: any, val: any): any {
    // isUndef 是判断 target 是不是等于 undefined 或者 null 。
    //isPrimitive 是判断 target 的数据类型是不是 string、number、symbol、boolean 中的一种
    if (process.env.NODE_ENV !== 'production' &&
      (isUndef(target) || isPrimitive(target))
    ) {
      warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
    }
  
    // 数组的处理
    if (Array.isArray(target) && isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key)
      target.splice(key, 1, val)
      return val
    }
  
    // 对象，并且该属性原来已存在于对象中，则直接更新
    if (key in target && !(key in Object.prototype)) {
      target[key] = val
      return val
    }
  
    // vue给响应式对象(比如 data 里定义的对象)都加了一个 __ob__ 属性，
    // 如果一个对象有这个 __ob__ 属性，那么就说明这个对象是响应式对象，我们修改对象已有属性的时候就会触发页面渲染。
    // 非 data 里定义的就不是响应式对象。
    const ob = (target: any).__ob__
  
    if (target._isVue || (ob && ob.vmCount)) {
      process.env.NODE_ENV !== 'production' && warn(
        'Avoid adding reactive properties to a Vue instance or its root $data ' +
        'at runtime - declare it upfront in the data option.'
      )
      return val
    }
  
    // 不是响应式对象
    if (!ob) {
      target[key] = val
      return val
    }
  
    // 是响应式对象，进行依赖收集
    defineReactive(ob.value, key, val)
  
    // 触发更新视图
    ob.dep.notify()
    return val
  }
  */

 // Sass和Less的比较
//CSS 预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为 CSS 增加了一些编程的特性
/*
不同:
1、Less环境较Sass简单

Sass的安装需要安装Ruby环境，Less基于JavaScript，是需要引入Less.js来处理代码输出css到浏览器，
也可以在开发环节使用Less，然后编译成css文件，直接放在项目中。

2、Less使用较Sass简单

LESS 并没有裁剪 CSS 原有的特性，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。只要你了解 CSS 基础就可以很容易上手。

3、从功能出发，Sass较Less强大

①sass有变量和作用域。
- $variable，like php；
- #｛$variable｝like ruby；
- 变量有全局和局部之分，并且有优先级。

②sass有函数的概念；
- @function和@return以及函数参数（还有不定参）可以让你像js开发那样封装你想要的逻辑。
-@mixin类似function但缺少像function的编程逻辑，更多的是提高css代码段的复用性和模块化，这个用的人也是最多的。
-ruby提供了非常丰富的内置原生api。
③进程控制：
-条件：@if @else；
-循环遍历：@for @each @while
-继承：@extend
-引用：@import
④数据结构：
-$list类型=数组；
-$map类型=object；
其余的也有string、number、function等类型

4、Less与Sass处理机制不一样

前者是通过客户端处理的，后者是通过服务端处理，相比较之下前者解析会比后者慢一点

5、关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$。

相同点：

1、混入(Mixins)——class中的class；
2、参数混入——可以传递参数的class，就像函数一样；
3、嵌套规则——Class中嵌套class，从而减少重复的代码；
4、运算——CSS中用上数学；
5、颜色功能——可以编辑颜色；
6、名字空间(namespace)——分组样式，从而可以被调用；
7、作用域——局部修改样式；
8、JavaScript 赋值—— 在CSS中使用JavaScript表达式赋值。 */


// 关于正常流的理解（下面这篇文章讲解的特别清晰）
// 链接：https://juejin.im/post/6844903875552477191

// 关于writing mode的理解
// 连接：https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode

// 关于bidi的理解
// 连接：https://developer.mozilla.org/zh-CN/docs/Glossary/BiDi

// Number.EPSILON
// 浮点数的存储
// JavaScript 如何存储小数。和其它语言如 Java 和 Python 不同，JavaScript 中所有数字包括整数和小数都只有一种类型 — Number。
// 相同点在于他们的实现遵循 IEEE 754 标准，使用 64 位固定长度来表示，也就是标准的 double 双精度浮点数来表示。

// 解决：
// 1.升阶
// 2.左边两数计算与右边结果相减如果小于es6的Number.EPSILON的话，认定两遍相等。

// 大数危机：
// 要想解决大数的问题你可以引用第三方库 bignumber.js，原理是把所有数字当作字符串，重新实现了计算逻辑，缺点是性能比原生的差很多。
// 现在 TC39 已经有一个 Stage 3 的提案 proposal bigint，大数问题有望彻底解决。


// 封装一个AJAX
// 超级简易版本
// funciton ajax(path, method, data, success, fail) {
//   let request = new XMLHttpRequest();
//   request.open(method, path);
//   request.send(data);
//   request.onreadystatechange = () => {
//     if (request.status >= 200 && request.status < 300 || request.status === 304) {
//       success.call(undefined, request.responseText)
//     } else if (request >= 400) {
//       fial.call(undefined, request);
//     }
//   }
// }

// promise版本
// function ajax(options) {
//   let {path, method, data} = options;
//   return new Promise(funciton(resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.open(method, path);
//     requestAnimationFrame.send(data);
//     request.onreadystatechange = () => {
//       if (request.readystate === 4) {
//         if (request.status >= 200 && request.status < 300) {
//           resolce.call(undefined, request.responseText);
//         } else if (request.status >= 400) {
//           reject.call(undefined, request);
//         }
//       }
//     }
//   })
// }

// cosnt SERVER_URL = "/server";
// let xhr = new XMLHttpRequest();
// // 创建Http请求
// xhr.open("GET", SERVER_URL, true);
// // 设置状态监听函数
// XMLHttpRequest.onreadystatechange = function() {
//   if (this.readyState !== 4) return;
//   // 当请求成功时
//   if (this.state === 200) {
//     handle(this.response);
//   } else {
//     console.error(this.statusText);
//   }
// };
// // 设置请求失败时的监听函数
// xhr.onerror = function() {
//   console.error(this.statusText);
// };
// // 设置请求头信息
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");
// // 发送http请求
// xhr.send(null);

// var person = new Object();
// person.name = "Nicholas";
// person.age = 29;
// person.job = "Software Engineer";
// person.sayName = function() {
//   alert(this.name);
// };

// var person = {
//   name:"Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName: function() {
//     alert(this.name);
//   };
// }


// // 在我们为对象扩充属性时，经常会不小心覆盖之前的属性，由于Symbol的唯一性，我们可以用Symbol作为键名使用：
// const name = Symbol();
// const people = {};
// // 务必这样创建属性，如果写为people.name则会把name解析为字符串，相当于people['name']
// people[name] = 'tom';
// console.log(people.name);
// console.log(people[name]);
// function format(number) {
//   return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
// }
// console.log(format(120000000.11));


// const SERVER_URL = "/server";
// let xhr = new XMLHttpRequest();
// // 创建Http请求
// xhr.open("GET", SERVER_URL, true); //第三个参数为是否异步
// // 设置状态监听函数
// xhr.onreadystatechange = funciton() {
//   if (this.readyState !== 4) return;
//   // 当请求成功时
//   if (this.status === 200) {
//     handle(this.resoponse);
//   } else {
//     console.error(this.statusText);
//   }
// };
// // 设置请求失败时的监听函数
// xhr.onerror = funciton() {
//   console.error(this.statusText);
// };
// // 设置请求头信息
// xhr.responseText = "json";
// xhr.setRequestHeader("Accpet", "application/json");
// // 发送Http请求
// xhr.send(null);

// CSS Sprite（CSS雪碧图）
// 原理：截取 大图一部分显示，而这部分就是一个小图标
// 不使用雪碧图， 单纯调用小图片有以下优缺点：
// 优点：调用简单、维护方便； 缺点：请求文件过多、引发性能问题

// cookie free的概念
// 我们知道在做资源请求的时候，浏览器会在同源资源的请求（相同协议、相同域名、相同端口）时，
// 会带上cookie。这些cookie在做业务请求的时候很有用（服务器要根据cookie来获取该请求的session信息，
// 从而识别该业务请求），但是对于静态资源则没有一点用处（服务器不会做处理）。因而如果使用一个二级域名，
// 该资源能够正常请求（通过xml做请求仍然会跨域），而且不会带cookie，另外，由于多了域名，会增加浏览器的
// 资源请求并发上限，从而提高了性能。

// 由此总结，使用cdn技能能够为主业务服务器分压，并能让客户端更快命中资源。而用专属的域名能取消
// cookie请求的开销，另外能提升客户端的请求并发上限。但也不是说客户端用的域名越多越好，因为会提高
// dns解析的开销（可以用过prefetch减少开销）。

// 静态资源好处：①不用带cookie ②增加资源请求并发上限

// 知识点：
// 就是浏览器并发连接数的问题。浏览器对每个域名的并发链接是有限制的，
// 一般现代浏览器都是6个，使用多个独立域名，可以大大拓展这个并发连接数，
// 也就是令浏览器并行下载更多资源，提高站点性能。


// const SERVER_URL = "/server";
// // 创建对象
// let xhr = new XMLHttpRequest();
// // 使用open方法创建Http请求
// xhr.open("GET",SERVER_URL,true);
// // 设置状态监听函数
// xhr.onreadystatechange = function() {
//   if (this.readyState !== 4) return;
//   // 当请求成功判断请求状态
//   if (this.status >= 200 && this.status < 300 || this.status === 304) {
//     handle(this.response);
//   } else {
//     console.error(this.statusText);
//   }
// }
// // 失败函数
// xhr.onerror = function() {
//   console.error(this.statusText);
// }
// // 请求头添加信息
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");

// // 发送
// xhr.send(null);

// const SERVER_URL= "/server";
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "SERVER_URL", true);
// xhr.onreadystatechange = function() {
//   if (this.readyState !== 4) return;
//   if (this.status >=200 && this.status <300 || this.status === 304) {
//     handle(this.response);
//   } else {
//     console.error(this.statusText);
//   }
// }
// xhr.onerror = function() {
//   console.error(this.statusText);
// }
// xhr.responseText("json");
// xhr.setRequestHeader("Accept", "application/json");
// xhr.send(null);

// function getJSON(url) {
//   // 创建一个promise对象
//   let promise = new Promise(funciton(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     // 新建一个http请求
//     xhr.open("GET", url, true);
//     // 设置状态监听函数
//     xhr.onreadystatechange = function() {
//       if (this.readyStae !== 4) return;
//       if (this.status === 200) {
//         resolve(this,response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     // 设置错误监听函数
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }
//     // 设置响应数据类型
//     xhr.responseType = "json";
//     // 设置请求头信息
//     xhr.setRequestType("Accept", "application/json");
//     // 发送http请求
//     xhr.send(null);
//   });
//   return promise;
// }

// function getJSON(url) {
//   // 创建一个promise对象
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     // 新建一个http请求
//     xhr.open("GET", url, true);
//     // 设置状态监听函数
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     // 设置错误监听函数
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     };
//     // 设置响应的数据类型
//     xhr.responseType = "json";
//     // 设置请求头信息
//     xhr.setRequestHeader("Accept", "application/json");
//     // 发送http请求
//     xhr.send(null);
//   })
//   return promise;
// }

// function getJSON(url) {
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       if (this.status === 200) {
//         resolve(this.response);
//       } esle {
//         reject(new Error(this.statusText));
//       };
//     }
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }

//     xhr.responseType = "json";
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.send(null);
//   })
//   return promise;
// }


// 封装ajax 使用Promise
// funciton getJSON(url) {
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = funciton() {
//       if (this.readyState !== 4) return;
//       if (this.status >= 200 %% this.status < 300 || this.status === 304) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     xhr.onerror = function() {
//       reject(new Error(this.statusText))
//     };
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Accept", "application/json");
//   })
//   return promise;
// }

// function debounce(fn, delay) {
//   let timer = null;
//   return function() {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(fn, delay);
//     return timer;
//   }
  
// }

// function throttle(fn, delay) {
//   let valid = true;
//   return function() {
//     if(!valid) {
//       return false;
//     }
//     valid = false;
//     setTimeout(() => {
//       fn();
//       valid = true;
//     }, delay);
//   }
// }

// function shallowCopy(object) {
//   if (!object || typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj = object[key];
//     }
//   }
//   return newObj;
// }

// function deepCopy(object) {
//   if (!objcet || typeof object !== "objcet") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj = 
//       typeof objcet[key] === "objcet"
//       ? deepCopy(object[key])
//       : objcet[key];
//     }
//   }
//   return newObj;
// }

// call函数实现
// Function.prototype.myCall = function(context) {
//   // 判断调用对象
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   // 获取参数
//   let args = [...arguments].slice(1),
//   result = null;
//   // 判断context是否传入，如果未传入则设置为window
//   context = context || window;
//   // 将调用函数设为对象的方法
//   context.fn = this;
//   // 调用函数
//   result = context.fn(...args);
//   // 降属性删除
//   delete context.fn;
//   return result;
// };

// let args = [1,1,2,3,1,6,5,4,2,[9,8]].slice(1);
// console.log(...args);console.log(args);

// Function.prototype.myCall = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   result = null;
//   // 判断context是否传入，没有的话设为window
//   context = context || window;
//   // 将调用函数设为对象的方法
//   context.fn = this;
//   // 执行该方法
//   result = context.fn(...args);
//   // 删除这个执行过的方法
//   delete context.fn;
//   // 返回结果
//   return result;
// }

// Function.prototype.myCall = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   result = null;
//   // 判断是否传入，没有的话指向window
//   context = context || window;
//   // 将调用函数设为对象方法
//   context.fn = this;
//   // 执行这个方法
//   result = context.fn(...args);
//   // 删除这个方法
//   delete context.fn;
//   // 返回结果
//   return result;
// }

// apply函数的实现
// Function.prototype.myApply = function(context) {
//   // 类型判断
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   // 初始化结果
//   let result = null;
//   // 判断context是否存在，不存在指向window
//   context = context || window;
//   // 将函数设为对象的方法
//   context.fn = this;
//   // 执行方法
//   if(arugments[1]){
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   // 将属性删除
//   delete context.fn;
//   // 返回结果
//   return result;
// }

// bind函数的实现
// Function.prototype.myBind = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   fn = this;
//   return function Fn() {
//     // 根据调用方式，传入不同绑定值
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   };
// };

// Function.prototype.myBind = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   fn = this;
//   return function Fn() {
//     // 根据调用方式，传入不同绑定值
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   };
// };

// Function.prototype.myBind = function(context) {
//   if (typeof this !== 'function') {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   fn = this;
//   return function Fn() {
//     // 根据调用方式，传如不同的绑定值
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     ) 
//   }
// }

// Function.prototype.myBind = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     )
//   }
// }


// Function.prototype.myBind = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   };
// };


// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   // 保存初始化状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolve或者rejected传入的值
//   this.value = null;
//   // 用于保存resolve的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存reject的回调函数
//   this.rejectedCallbacks = [];
//   // 状态改变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再执行
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码的执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.resolveCallbacks.forEach(callback => {
//           callback(value);
//         });
//       }
//     }, 0);
//   }
//   // 将两个方法传图函数执行
//   try {
//     fn(resolve, reject);
//   } catch (e) {
//     // 遇到错误，捕获错误，执行reject函数
//     reject(e);
//   }
// }

// MyPromise.prototype.then = function(onResolved, onRejected) {
//   // 首先判断两个参数是否为函数类型，因为这两个参数时可选参数
//   onResolved =
//   typeof onResolved === "funciton"
//   ? onResolved
//   : function(value) {
//     return value;
//   };
//   onRejected =
//   typeof onRejected === "funciton"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   // 如果是等待状态，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   // 如果状态已经凝固，则执行对应状态函数
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
  
// }

// Function.prototype.MyBind = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1),
//   fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   };
// };

// 001
// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";

// function MyPromise(fn) {
//   // 保存初始化状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolved或者rejected传入的值
//   this.value = null;
//   // 用于保存resolve的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存reject的回调函数
//   this.rejectedCallbacks = [];
//   // 状态转变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行改变
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码的执行顺序为本轮事件循环的末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转换
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.resolvedCallbacks.forEach(callbacks => {
//           callbacks(value);
//         });
//       }
//     }, 0);
//   }
//   // 状态变为rejected的犯法
//   function reject(value) {
//     // 保证代码的执行顺序为本轮事件末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = REJECTED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         });
//       }
//     }, 0);
//   }

//   // 将两个方法传入函数执行
//   try {
//     fn(resolve, reject);
//   } catch (e) {
//     // 遇到错误时，捕获错误，执行reject函数
//     reject(e);
//   }
// }

// MyPromise.prototype.then = function(onREsolved, onRejected) {
//   // 首先判断两个参数是否为函数类型，因为这两个参数时可选参数
//   typeof onResolved === "function"
//   ? onResolved
//   : function(value) {
//     return value;
//   };
//   typeof onRejected ==== "function"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   // 如果是等待状态，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onREsolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   // 如果状态已经凝固，则直接执行对应状态的函数
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// };


// 002
// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   // 保存初始化状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolved或者rejected传入的值
//   this.value = null;
//   // 用于保存resolve的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存reject的回调函数
//   this.rejectedCallbacks = [];
//   // 状态转变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行改变
//     if (value instanceof MyPromsie) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码的执行顺序为本轮事件循环的末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.resolveCallbacks.forEach(callback => {
//           callback(value);
//         });
//       }
//     }, 0);
//   }
//   // 将两个方法传入函数执行
//   try {
//     fn(resolve, reject);
//   } catch(e) {
//     // 遇到错误时，捕获错误并执行reject函数
//     reject(e);
//   }
// }
// MyPromise.prototype.then = function(onResolved, onRejected) {
//   // 首先判断两个参数是否为函数类型，因为这两个参数是可选类型
//   onResolved =
//   typeof onResolved === "function"
//   ? onRrsolved
//   : function(value) {
//     return value;
//   };
//   onRejected = 
//   typeof onRejected === "function"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   // 如果是等待状态，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   // 如果状态已经凝固，则执行对应状态的函数
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }

// 003
// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   // 保存初始化状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolved或者rejected传入的值
//   this.value = null;
//   // 用于保存resolve的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存reject的回调函数
//   this.rejectedCallbacks = [];
//   // 状态转变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后在进行改变
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   // 状态转变为rejected方法
//   function reject(value) {
//     // 包装袋吗执行的顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = REJECTED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         });
//       }
//     }, 0);
//   }
//   // 将两个方法传入函数执行
//   try {
//     fn(resolve, reject);
//   } catch (e) {
//     // 遇到错误捕获并执行rejec函数
//     reject(e);
//   }
// }
// MyPromise.prototype.then = function(onResolved, onRejected) {
//   // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
//   onResolved = 
//   typeof onResolved === "function"
//   ? onResolved
//   : function(value) {
//     return value;
//   };
//   onRejected = 
//   typeof onRejected === "function"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   // 如果等待状态，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   // 如果状态已经凝固，则直接执行对应状态函数
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }


// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   var self = this;
//   this.state = PENDING;
//   this.value = null;
//   this.resolvedCallbacks = [];
//   this.rejectedCallbacks = [];
//   function resolve(value) {
//     if (value instanceof MyPromise) {
//       return value.then(resolve,reject);
//     }
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = RESOLVED;
//         self.value = value;
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   function reject(value) {
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = REJECTED;
//         self.value = value;
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   try {
//     fn(resolve, reject);
//   } catch (e) {
//     reject(e);
//   }
// }
// MyPromise.prototype.then = function(onResolved, onRejected) {
//   onResolved = 
//     typeof onResolved === "function"
//     ? onResolved
//     : function(value) {
//       return value;
//     };
//     onRejected = 
//       typeof onRejected === "function"
//       ? onRejected
//       : function(error) {
//         throw error;
//       };
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }


// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromsie(fn) {
//   // 保存初始状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolve的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存reject的回调函数
//   this.rejectedCallbacks = [];
//   // 状态改变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码执行顺序为本轮事件循环结尾
//     setTimeout(() => {
//       // 只有状态变为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVEd;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value);
//         });
//       }
//     }, 0);
//   }
//   // 状态变为rejected方法
//   function reject(value) {
//     // 保证代码执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态变为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = REJECTED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.rejectedCallbacks.forEach(()=> {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   // 将两个方法传入函数执行
//   try {
//     fn(resolve, reject);
//   } catch (e) {
//     // 遇到错误时，捕获错误，执行reject函数
//     reject(e);
//   }
// }

// MyPromsie.prototype.then = function(onResolved, onRejected) {
//   // 首先判断两个参数是否为函数类型，因为两个参数是可选参数
//   onResolved = 
//     typeof onResolved === "function"
//     ? onResolved
//     : function(value) {
//       return value;
//       };
//   onRejected = 
//   typeof onRejected === "function"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   // 如果是等待状态，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   // 如果状态已经凝固，则执行对应状态的函数
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// };



// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   // 保存初始化状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolved或rejected传入的值
//   this.value = value;
//   // 用于保存resolve的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存reject的回调函数
//   this.rejectedCallbacks = [];
//   // 状态转变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为Promise值，如果是，则状态改变必须等待前一个状态改变后再进行改变
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码的执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVED;
//         // 修改传入的值
//         self.value = value;
//         // 执行对应的回调函数
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   // 状态转变为reject方法
//   function reject(value) {
//     // 保证代码的执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = REJECTED;
//         // 设置传入的值
//         self.value = value;
//         // 执行对应的回调函数
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   } 
//   // 将两个方法传入函数执行
//   try {
//     fn(resolve, reject);
//   } catch (e) {
//     // 捕获错误并执行reject
//     reject(e);
//   }
// }

// MyPromise.prototype.then = function(onResolved, onRejected) {
//   // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
//   onResolved = 
//   typeof onResolved === "function"
//   ? onResolved
//   : function(value) {
//     return value;
//   };
//   onRejcted = 
//   typeof onRejected === "funciton"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   // 如果是等待状态在，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(pnRejected);
//   }
//   // 如果状态已经凝固，则直接执行对应状态的函数
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }

// class MyCalss {
//   constructor() {}
//   get prop() {
//     return 'getter';
//   }
//   set pro(value) {
//     console.log('setter:'+"value");
//   }
// }

// let inst = new MyCalss();
// console.log(inst.prop = 123);
// console.log(inst.prop);

// leetcode 001 两数之和
// function twoSum(nums, target) {
//   // 构造哈希表
//   const map = new Map(); // 存储方式为{值，下标}即{value, index}
//   // 遍历数组
//   for (let i = 0; i < nums.length; i++) {
//       let temp = target - nums[i];   
//       if (map.has(temp)) {
//          return [map.get(temp), i]; 
//       } else {
//         map.set(nums[i], i );
//       }
//   }
//   console.error("no two sum solution");
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// leetcode 002 两数之和
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// function addTwoNumbers(l1, l2) {
//   let node = new ListNode('head');
//   let temp = node; // 临时结点
//   let carry = 0; // 进位
//   let sum = 0; // 新链表当前未取余的值=链表1的值+链表2的值+carry
//   // 遍历，直到最长的链表为空
//   while (l1 || l2) {
//     sum = (l1? l1.val : 0) + (l2? l2.val : 0) + carry;
//     temp.next = new ListNode(sum % 10); // 取余后为新链表的值
//     temp = temp.next;
//     carry = sum >=10 ? 1 : 0;
//     l1 && (l1 = l1.next); // l1下一个结点不为空的话继续往下走
//     l2 && (l2 = l2.next);
//   } 
//   carry && (temp.next = new ListNode(carry));
//   return node.next;
// }

// leetcode53 最大子序列和（连续子数组
// function maxSubArray(nums) {
//   let res = nums[0];
//   let sum = 0;
//   for (let num in nums) {
//     if (sum > 0) {
//       sum += nums[num];
//     } else {
//       sum = nums[num];
//     }
//     res = Math.max(res, sum);
//   }
//   return res;
// }
// let nums = [-2,1,-3,4,-1,2,1,-5,-4];
// console.log(maxSubArray(nums));


// leetcode 136 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 异或运算来解决
// function NumberFind(arr) {
//   let res = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     res = res ^ arr[i];
//   }
//   console.log(res);
// }

// arr = [1,1,2,3,2,3,4,4,6,6,7];
// NumberFind(arr);

// 斐波那契数列（递归解法）
// function fib(N) {
//   if (N ===0 || N === 1) return N;
//   return fib(N-1) + fib(N-2);
// }
// console.log(fib(10)); // 55

// function Fib(n) {
//   if(n<1) {return false;}
//   if(n === 1 || n === 2) return n;
//   // 建立数组
//   let arr = [1,1];
//   for (let i = 2; i <= n; i++) {
//       arr[i] = arr[i-1] + arr[i-2];
//   }
//   // var k = arr.pop()
//   return arr[n-1]; // 数组的最后一项即为值
// }

// console.log(Fib(11)); // 89


// function fib(N) {
//   if (N ===1 || N ===0) return N;
//   return fib(N-1)+fib(N-2);
// }

// console.log(fib(10));

// 找出数组中最大的元素
// var list = [1,2,3,4,5,6,15];
// console.log(Math.max.apply(null,list));

// function _addTwoNumbers(l1, l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   let stack1 = [];
//   let stack2 = [];
//   while(l1 !== null) {
//     stack1.push(l1.val);
//     l1 = l1.next;
//   }
//   while(l2 !== null) {
//     stack2.push(l2.val);
//     l2 = l2.next;
//   }
//   let carry = 0;
//   let head = new ListNode();
//   while(stack1.length > 0 || stack2.length > 0 || caryy > 0) {
//     let sum = carry;
//     sum += stack1.length > 0 ? stack1.pop() : 0;
//     sum += stack2.length > 0 ? stack2.pop() : 0;
//     let node = new ListNode(sum % 10);
//     node.next = head; // 头插法
//     head = node;
//     carry = sum / 10;
//     return head;
//   }
// }


// 相交链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  **/
// function getIntersectionNode(headA, headB) {
//   let l1 = headA;
//   let l2 = headB;
//   while(l1 !== l2) {
//     l1 = l1 === null ? headB : l1.next;
//     l2 = l2 === null ? headA : l2.next;
//   }
//   return l1;
// }


// 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
 
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// 迭代法
// var reverseList = function(head) {
//   let new_head = null;
//   while(head !== null){
//   let temp = head;   
//   head = head.next;
//   temp.next = new_head;
//   new_head = temp;
//   }
//   return new_head;
// };

// 归并两个有序链表

// 递归解法
// function mergeTwoLists(l1 ,l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l2.next, l1);
//     return l2;
//   }
// }

// 迭代解法(用到一个新链表)
// function mergeTwoLists(l1, l2) {
//   const prehead = new ListNode(-1);
//   let prev = prehead;
//   while(l1 !== null && l2 !==null) {
//     if (l1.val <= l2.val) {
//       prev.next = l1;
//       l1 = l1.next;
//     } else {
//       prev.next = l2;
//       l2 = l2.next;
//     }
//     prev = prev.next;
//   }
//   // 合并后l1和l2最多只有一个还未被合并完，我们直接将链表尾部指向未合并完的链表即可
//   prev.next = l1 === null ? l2 : l1;
//   return prehead.next;
// }

// 删除排序链表中的重复元素
// 迭代，跟后面的结点进行比较，相同的话，丢弃并跳过后面的结点
// function deleteDuplicates(head) {
//   let cur = head;
//   while(cur && cur.next) {
//     if (cur.val === cur.next.val) {
//       cur.next = cur.next.next;
//     } else {
      
//       cur = cur.next;
//     }
//   }
//   return head;
// }

// 递归
// function deleteDuplicates(head) {
//   if (head == null || head.next == null) return head;
//   head.next = deleteDuplicates(head.next);
//   return head.val == head.next.val ? head.next : head;
// }

// 删除链表的倒数第N个节点
// function removeNthFromEnd(head, n) {
//   let [fast, slow] = [head, head];
//   // fast先走n步
//   while(--n) {
//     fast = fast.next;
//   }
//   if (!fast.next) return head.next; // 如果fast此时是尾结点即fast.next ===null, 则删除头结点
//   fast = fast.next; // fast再向前走一步
//   // 接下来fast\slow一起前进
//   while(fast && fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;
//   return head;
// }

// 6. 交换链表中的相邻结点

// function swapPairs(head) {
//     if (head === null || head.next === null) return head;
//     let next = head.next;
//     head.next = swapPairs(next.next);
//     next.next = head;
//     return next;
// }

// [445] Add Two Numbers II
// function addTwoNumbers(l1 ,l2) {
//   const stack1 = [];
//   const stack2 = [];
//   const stack = [];
  
//   let [cur1, cur2, carry] = [l1, l2, 0];
  
//   while(cur1) {
//     stack1.push(cur1.val);
//     cur1 = cur1.next;
//   }
//   while(cur2) {
//     stack2.push(cur2.val);
//     cur2 = cur2.next;
//   }

//   let [a,  b] = [null, null];
  
//   while(stack1.length > 0 || stack2.length > 0) {
//     a = Number(stack1.pop()) || 0;
//     b = Number(stack2.pop()) || 0;
//     stack.push((a + b + carry) % 10); // 入栈（从最底下往上，位数升高，这个操作时取个位）
//     if (a + b + carry >= 10) {
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//   }
//   if (carry === 1) {
//     stack.push(1);
//   }
//   const dummy = {};
//   let current = dummy;
//   while (stack.length > 0) {
//     current.next = {
//       val : stack.pop(),
//       next : null
//     };
//    current = current.next;
//   }
//   return dummy.next;
// };

// // leetcode 回文
// function isPalindrome(head) {
//   let low = head;
//   let fast = head;
//   if (!head || !head.next) return true;
//   const values = [];
//   // 通过快慢指针找到链表中点
//   while (fast && fast.next) {
//     values.push(low.val);
//     fast = fast.next.next;
//     low = low.next;
//   }
//   // 处理链表长度只有1的情况
//   if (!values.length) {
//     return true;
//   }
//   // 处理奇偶链表的差异
//   if (fast) {
//     low = low.next;
//   }
//   // 通过比较后半段链表的值和前半段链表的值是否相等从而判断是否为回文链表
//   while(low) {
//     let curVal = values.pop();
//     if (curVal !== low.val) {
//       return false;
//     }
//     low = low.next;
//   }
//   return true;
// }

// function getIntersectionNode(headA, headB) {
//   let l1 = headA;
//   let l2 = headB;
//   while (l1 !== l2) {
//     l1 = l1 === null ? headB : l1.next;
//     l2 = l2 === null ? headA : l2.next;
//   }
//   return l1;
// }


// function reverseList(head) {
//   let new_head = null; 
//   while (head !== null) {
//     let temp = head;
//     head = head.next;
//     temp.next = new_head;
//     new_head = temp;
//   }
//   return new_head;
// }

// function reverse(pre, cur) {
//   if (!cur) return pre;
//   let tmp = cur.next;
//   cur.next = pre;
//   return reverse(cur, tmp);
// }
// function reverse(pre, cur) {
//   if (!cur) return pre;
//   let tmp = cur.next;
//   cur.next = pre;
//   return reverse(cur, tmp);
// }
// function reverseList(head) {
//   return reverse(null, head);
// }

// function mergeTwoLists(l1, l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   if (l1.val < l2.val) {
//     l1 = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2 = mergeTwoLists(l2.next, l1);
//     return l2;
//   }
// }

// function mergeTwoLists(l1, l2) {
//   const prehead = new ListNode(-1);
//   let prev = prehead;
//   while(l1 !== null && l2 !== null) {
//     if (l1.val <= l2.val) {
//       prev.next = l1;
//       l1 = l1.next;
//     } else {
//       prev.next = l2;
//       l2 = l2.next;
//     }
//     prev = prev.next; // 下一个结点赋值
//   }
//   // 合并后两个链表最多只有一个还没有被合并，直接连接到新链表尾部即可
//   prev.next = l1 === null ? l2 : l1;
//   return prehead.next;
// }

// function deleteDuplicates(head) {
//   if (head === null || head.next === null) return head;
//   head.next = deleteDuplicates(head.next);
//   return head.val === head.next.val ? head.next : head; // 相等的话向右移动，丢弃本身
// }

// function deleteDuplicates(head) {
//   let cur = head;
//   while (cur && cur.next) {
//     if (cur.val === cur.next.val) {
//       cur.next = cur.next.next;
//     } else {
//       cur = cur.next;
//     }
//   }
//   return head;
// }

// function removeNthFromEnd(head, n) {
//   let [fast, slow] = [head, head];
//   // fast先走n步
//   while(--n) {
//     fast = fast.next;
//   }
//   if (!fast.next) return head.next;
//   fast = fast.next;
//   while(fast && fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;
//   return head;
// }

// function swapPairs(head) {
//   if (head === null || head.next === null) return head;
//   let next = head.next;
//   head.next = swapPairs(next.next);
//   next.next = head;
//   return next;
// }


// function addTwoNumbers(l1, l2) {
//   const [stack1, stack2, stack] = [[], [], []];
//   let [cur1, cur2, carry] = [l1, l2, 0];
//   while (cur1) {
//     stack1.push(cur1.val);
//     cur1 = cur1.next;
//   }
//   while(cur2) {
//     stack2.push(cur2.val);
//     cur2 = cur2.next;
//   }
//   let [a, b] = [null, null];
//   while(stack1.length > 0 || stack2.length > 0) {
//     a = Number(stack1.pop()) || 0;
//     b = Number(stack2.pop()) || 0;
//     stack.push((a + b + carry) % 10);
//     if (a + b + carry >= 10) {
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//   }
//   if (carry === 1) {
//     stack.push(carry);
//   }
//   const dummy = {}; // 新建链表，把stack中的数据拿出来，组成新链表
//   let current = dummy;
//   while(stack.length > 0) {
//     current.next = {
//       cval :stack.pop(),
//       next : null
//     };
//     current = current.next;
//   }
//   return dummy.next;
// };


// function isPalindrome(head) {
//   let [fast, slow] = [head, head];
//   if (!head || !head.next) return true;
//   const values = [];
//   // 通过快慢指针查找链表中点
//   while (fast && fast.next) {
//     values.push(low.val);
//     fast = fast.next.next;
//     low = low.next;
//   }
//   // 处理链表长度只有1的情况
//   if (!values.length) {
//     return true;
//   }
//   // 处理奇偶链表差异
//   if (fast) {
//     low = low.next;
//   }
//   // 通过比较后半段链表的值和前半段链表的值是否相等判断是否为回文链表
//   while (low) {
//     let curVal = values.pop();
//     if (curVal !== low.val) {
//       return false;
//     }
//     low = low.next;
//   }
//   return true;
// }

// var str = "abc";
// console.log(str.indexOf("a"));

// var str ="Visit Microsoft!";
// console.log(str.replace(/Microsoft/,"W3School"));

// function moveZeros(nums) {
//   let index = 0;
//   for (let num in nums) {
//     if (num !=0) {
//       nums[index++] = num;
//     }
//   }
//   while (index < nums.length) {
//     nums[index++] = 0;
//   }
// }

// var nums = [0,1,0,3,12];
// console.log(moveZeros(nums));


// flat()数组降维
// nums = [[1,2,[8,9]],[11,22],[3,4]];
//   console.log(nums.flat(1));

//   找出数组中最长的连续 1
// function findMaxConsecutiveOnes(nums) {
//   let timer = 0, max = 0;
//   for (let num of nums) {
//     if (num !== 0) {
//       timer++;
//       max = Math.max(max, timer);
//     } else {
//       timer = 0;
//     }
//   }
//   return max;
// }
// console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));

// 搜索二维矩阵||
// function searchMatrix(nums, target) {
//   if (nums === null || nums.length === 0 || nums[0].length === 0) return false;
//   let m = nums.length, n = nums[0].length;
//   let row = 0, col = n - 1;
//   while (row < m && col >=0) {
//     if (target === nums[row][col]) return true;
//     else if (target < nums[row][col]) col--;
//     else row++;
//   }
//   return false;
// }
// console.log(searchMatrix([
//   [ 1,  5,  9],
//   [10, 11, 13],
//   [12, 13, 15]
// ],15))  // true

// // 有序矩阵的Kth  
// const countInMatrix = (matrix, midVal) => {
//   const n = matrix.length; // 方阵n行n列
//   let count = 0;
//   let row = 0; // 第一行
//   let col = n - 1; // 最后一列
//   while (row < n && col >= 0) {
//     if (midVal >= matrix[row][col]) { // 如果中间值大于等于当前行最后则把改行所有元素计数，并向下一行移动
//       count += col + 1; // 不大于它的数增加col+1
//       row++; // 比较下一行
//     } else { // 比当前行最后元素小
//       col--; // 留在当前行并向左比较
//     }
//   }
//   return count;
// }

// const kthSmallest = (matrix, k) => {
//   const n = matrix.length;
//   let low = matrix[0][0];
//   let high = matrix[n-1][n-1];
//   while(low <= high) {
//     // 无符号右移运算符>>>（防止溢出）为什么使用low + (high - low) / 2而不使用(high + low) / 2呢？目的是防止溢出！
//     let midVal = low + ((high - low) >>> 1); //获取中间值
//     let count = countInMatrix(matrix, midVal); // 矩阵中小于等于它的个数
//     if (count < k) { //中间值小了，二分查找向右
//       low = midVal + 1;
//     } else {
//       high = midVal - 1;
//     }
//   }
//   return low;
// }
//  let matrix = [
//   [ 1,  5,  9],
//   [10, 11, 13],
//   [12, 13, 15]
// ],
// k = 8;
// console.log(kthSmallest(matrix, k)); // 13

// // 错误的集合
// function findErrorNums(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] != i + 1 && nums[nums[i] - 1] != nums[i]) {
//       swap(nums, i, nums[i] - 1);
//     }
//   }
//   // 遍历数组找出重复数，不符合条件即重复
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != i + 1) {
//       return [nums[i], i + 1];
//     }
//   }
//   return null;
// }
// function swap(nums, i, j) {
//   let tmp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = tmp;
// }

// console.log(findErrorNums([1,2,2,4]))

// // 寻找重复数
// function findDuplicate(nums) {
//   let low = 1, high = nums.length - 1; // 数组想的范围1到n
//   while (low < high) { // 在循环中缩小区间，区间闭合循环结束
//     let mid = (low + high) >> 1 // 求中间值
//     let count = 0;
//     for (let i =0; i < nums.length; i++) {
//       if (nums[i] <= mid) count++; // 统计小于等于mid的数
//     }
//     // 重复数落在[1, mid]
//     if (count > mid) {
//       high = mid; // 区间收缩
//     } else {
//       low = mid + 1;
//     }
//   } 
//   return low;
// }

// function findDuplicate(nums) {
//   let slow = 0, fast = 0; // slow跳一步，fast跳两步
//   while (true) {
//     slow = nums[slow]; // 以新项作为索引
//     fast = nums[nums[fast]] // 以新项作为索引而得到的新新项作为索引
//     if (slow === fast) {// 指针首次相遇
//       fast = 0; 让快指针回到起点
//       while (true) { // 开启新循环
//         if (slow === fast) { // 如果再次相遇，就肯定是入口处
//           return slow; // 返回入口，即重复的数
//         }
//         slow = nums[slow]; // 两个指针每次都进一步
//         fast = nums[fast];
//       }
//     } 
//   }
// }

// function constructor(n, k) {
//   let i = k;
//   let result = [1];
//   let num = 1;
//   let flag = true; // true为正，false为负
//   while(result.length <= k) {
//     if (flag) {
//       num = num + i;
//     } else {
//       num = num - i;
//     }
//     result.push(num);
//     i--;
//     flag = !flag;
//   }
//   // 基数已经准备好，进行剩余部分填充
//   num = result.length + 1;
//   while(num <= n) {
//     result.push(num++);
//   }
//   return result;

// }

// function findShortestSubArray(nums) {
//   // 先找到出现次数最多的元素的总次数
//   let map = new Map(),size = 1, distacne = nums.length;
//   for (let n of nums) {
//     map.set(n, map.has(n) ? map.get(n) + 1 : 1);
//     size = Math.max(size, map.get(n));
//   }
//   let h = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let cur = nums[i];
//     h.set(cur, h.has(cur) ? h.get(cur) + 1 : 1);
//     if (h.get(cur) === size) {
//       let start = nums.indexOf(cur);
//       distacne = Math.min(distance, i - start + 1);
//     }
//   }
//   return distance;
// }

// function isToeplitzMatrix(nums) {
//   let groups = new Map();
//   for (let r = 0; r < nums.length; r++) {
//     for (let c =0; c < nums[0].length; c++) {
//       if (!groups.has(r-c))
//         groups.set(r-c, nums[r][c]);
//         else if (groups.get(r-c) !== nums[r][c])
//         return false;
//     }
//   }
//   return true;
// }

// function arrayNesting(nums) {
//   let ans = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let start = i;
//     let count = 0;
//     while(nums[start] !== -1) {
//       count++;
//       let tmp = start;
//       start = nums[start];
//       nums[tmp] = -1;
//     }
//     ans = Math.max(ans, count);
//   }
//   return ans;
// }


// function maxChunksToSorted(nums) {
//   // 当遍历到第i个位置时，如果可以切分为块，那前i个位置的最大值一定等于i
//   // 否则，一定有比i小的数划分到后面的块，那块排序后，一定不满足升序。
// //  前N个数字最大的肯定是N，那么当遍历到i位置时： i==前N个最大的数字，即为一个集合。
//   let res = 0, max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     max = Math.max(max, nums[i]); // 统计前i个位置的最大元素
//     if (max === i) res++;
//   }
//   return res;
// }

// 用两个栈实现队列（后进先出实现先进先出）
// class MyQueue {
//   constructor() {
//     this.pushArr = [];
//     this.popArr = [];
//   }
//   // 讲一个元素放入队列尾部
//   push(value) {
//     this.pushArr.push(value);
//   }
//   // 从队列首部移出元素
//   pop() {
//     if (!this.popArr.length) {
//       while(this.pushArr.length) {
//         this.popArr.push(this.pushArr.pop());
//       }
//     }
//     return this.popArr.pop();
//   }
//   // 返回队列首部元素
//   peek() {
//     if (!this.popArr.length) {
//       while(this.pushArr.length) {
//         this.popArr.push(this.pushArr.pop());
//       }
//     }
//     return this.popArr[this.popArr.length - 1];
//   }
//   // 返回队列是否为空
//   empty() {
//     return !this.pushArr.length && !this.popArr.length;
//   }
// }

// // 用队列实现栈
// function MyStack() {
//   this.queue = [];
// }
// MyStack.prototype.push = function(x) {
//   this.queue.push(x);
// }
// MyStack.prototype.pop = function() {
//   let res = [];
//   for (let i = 0; i < this.queue.length - 1; i++) {
//     res.push(this.queue[i]);
//   }
//   let r = this.queue[this.queue.length - 1];
//   this.queue = res;
//   return r;
// }
// MyStack.prototype.top = function() {
//   if (this.queue.length === 0) {
//     return null;
//   }
//   return this.queue[this.queue.length - 1];
// }
// MyStack.prototype.empty = function() {
//   return this.queue.length === 0;
// }

// 借用一个迷你辅助栈原理，跟正常栈一一对应，每次弹出的时候也降辅助栈中元素弹出，这样保证最小值保存在迷你栈中
// var MinStack = function() {
//  this.stack = [];
//  this.min_stack = [Infinity];   
// }
// MinStack.prototype.push = function(x) {
//   this.stack.push(x);
//   this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
// }
// MinStack.prototype.pop = function() {
//   this.stack.pop();
//   this.min_stack.pop();
// }
// MinStack.prototype.top = function() {
//   return this.stack[this.stack.length - 1];
// }
// MinStack.prototype.getMin = function() {
//   return this.min_stack[this.min_stack.length - 1];
// }

// 有点错误 改进中 20200907
// function isValid(arr) {
//   let temp = [];
//   let num = 0;
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == '(' || arr[i] == '[' || arr[i] == '{') 
//       num++;
//     if (arr[i] == ')' || arr[i] == ']' || arr[i] == '}'){
//       if (num == 0) {
//         return false;
//       } else if(arr[i] == ')'&& arr[i-1] == '(' || arr[i] == ']' && arr[i-1] == '[' 
//       || arr[i] == '}'&& arr[i-1] == '{') {
//         num--;
//       }
//     }
//   }
//   if (num == 0)
//   return true;
//   else 
//   return false;
 
// }
// console.log(isValid('{[]}'));


// function dailyTemperatures(T) {
//   let stack = [];
//   let res = new Array(T.length).fill(0);
//   for (let i = 0; i < T.length; i++) {
//     while(stack.length && T[i] > T[stack[stack.length - 1]]) {
//       let topIdx = stack.pop(); //数组即将要入栈的元素大于栈顶元素，则栈顶弹出
//       res[topIdx] = i - topIdx;
//     }
//     stack.push(i);
//   }
//   return res;
// }
// let T =  [73, 74, 75, 71, 69, 72, 76, 73];
// console.log(dailyTemperatures(T));

// 获取长度技巧
// let nums = [1,2,3];
// const doubleNums = [...nums, ...nums];
// const {length} = doubleNums;
// console.log(doubleNums);
// console.log(length);

// function nextGreaterElements(nums) {
//   const doubleNums = [...nums, ...nums];
//   const {length} = doubleNums;
//   if (length === 0 ) return doubleNums;
//   let stack = [];
//   let res = new Array(length).fill(-1);
//   for (let i = 0; i < length; i++) {
//     //如果要压入栈的元素大于栈顶元素 
//     while(stack.length && doubleNums[i] > doubleNums[stack[stack.length - 1]]) {
//       let index = stack.pop();
//       res[index] = doubleNums[i]; // 这个index上对应的第一个比他大的数就是doubleNums[i]
//     }
//     stack.push(i);
//   }
//   return res.slice(0,(res.length / 2));
// }
// console.log(nextGreaterElements([1,2,1]));

// function isIn(s1, s2) {
//   let tmp = s1+s1;
//   if (tmp.indexOf(s2) !== -1) {
//     return true;
//   }
//   else
//    return false;
// }
// console.log(isIn('AABCD','CDAA'))

// 封装ajax
// const SERVER_URL = '/server';
// let xhr = new XMLHttpRequest();
// // 创建http请求
// xhr.open('GET', SERVER_URL, true);
// // 设置状态监听函数
// xhr.onreadystatechange = function() {
//   if (this.state !== 4) return;
//   // 当请求成功时
//   if (this.state === 200) {
//     handle(this.response);
//   } else {
//     console.error(this.stateText);
//   }
// };
// // 设置请求失败监听函数
// xhr.onerror = function() {
//   console.error(this.stateText);
// };

// // 设置请求头信息
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");
// // 发送http请求
// xhr.send(null);

// promsie封装ajax请求
// function getJSON(url) {
//   // 创建一个promise 对象
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     // 新建一个http请求
//     xhr.open("GET", url, true);
//     // 设置状态监听函数
//     xhr.onreadystatechange = function() {
//       if (this.readyState !==4) return;
//       // 当请求成功时，查看请求状态
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     // 设置错误监听函数
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     };
//     // 设置相应的数据类型
//     xhr.responseType = "Json";
//     // 设置请求头信息
//     xhr.setRequestHeader("Accept", "application/json");
//     // 发送http请求
//     xhr.send(null);
//   });
//   return promise;
// }


// function shallowCopy(object) {
//   // 只拷贝对象
//   if (!object || typeof object !== "objcet") return;
//   // 根据object类型判断新建数组还是对象
//   let newObj = Array.isArray(object) ? [] : {};
//   // 遍历object，并且判断是object的属性才拷贝
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj[key] = object[key];
//     }
//   }
//   return newObj;
// }

// function deepCopy(object) {
//   // 只拷贝对象
//   if (!object || typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj[key] = 
//       typeof object[key] === 'object' 
//       ? deepCopy(object[key])
//       : object[key];
//     }
//   }
//   return newObj;
// }

// function debounce(fn, delay) {
//   let timer = null;
//   return function() {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(fn,delay);
//   }
// }

// function throttle(fn, delay) {
//   let valid = true;
//   return function() {
//     if (!valid) {
//       return false;
//     }
//     valid = false;
//     setTimeout(() => {
//       fn();
//       valid =true;
//     }, delay)
//   }
// }

// Function.prototype.myCall = function(context) {
//   // 判断调用对象
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   // 获取参数
//   let args = [...arguments].slice(1);
//   result = null;
//   context = context || window;
//   context.fn = this;
//   result = context.fn(...args);
//   delete context.fn;
//   return result;
// }

// Function.prototype.myApply = function(context) {
//   if (typeof this !== "function") {
//     throw new TypeError("Error");
//   }
//   let result = null;
//   context = context || window;
//   context.fn = this;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1])
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// }

// Function.prototype.myBind = function() {
//   if (typeof this !== "function") {
//     throw new TypeError("error");
//   }
//   var args = [...arguments].slice(1);
//   fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? this : AudioContext,
//       args.concat(...arguments)
//     );
//   };
// };

// 手写promise
// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromsie(fn) {
//   // 保存初始化状态
//   var self = this;
//   // 初始化状态
//   this.state = PENDING;
//   // 用于保存resolved或rejected传入的值
//   this.value = null;
//   // 用于保存resolved的回调函数
//   this.resolvedCallbacks = [];
//   // 用于保存rejectd的回调函数
//   this.rejectedCallbacks = [];
//   // 状态变为resolved方法
//   function resolve(value) {
//     // 判断传入元素是否为promise值，如果是，则状态改变必须等待前一个状态改变后再进行
//     if (value instanceof MyPromsie) {
//       return value.then(resolve, reject);
//     }
//     // 保证代码的执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       // 只有状态为pending时才能转变
//       if (self.state === PENDING) {
//         // 修改状态
//         self.state = RESOLVED;
//         // 设置传入的值
//         self.value = value;
//         // 执行回调函数
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value);
//         });
//       }
//     }, 0);
//   }
//   // 状态变为rejected的方法
//   function reject(value) {
//     // 保证代码执行顺序为本轮事件循环末尾
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = REJECTED;
//         self.value = value;
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   try {
//     fn(resolve, reject)
//   } catch(e) {
//     reject(e);
//   }
// }
// MyPromsie.prototype.then = function(onResolved, onRejected) {
//   // 首先判断两个参数是否为函数，因为这两个参数是可选参数
//   onResolved = 
//   typeof onResolved === "function"
//   ? onResolved
//   : function(value) {
//     return value;
//   };
//   onRejected = 
//   typeof onRejected === "function"
//   ? onRejected
//   :function(error) {
//     throw error;
//   };
//   // 如果是等待状态，则将函数加入对应列表中
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   if (this.state = RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state = REJECTED) {
//     onRejected(this.value);
//   }
// }
// clip : rect(0 100px 100px 0);

// function containDuplicate(nums) {
//   let set = new Set();
//   for (let num of nums) {
//     set.add(num);
//   }
//   return set.size < nums.length;
// }
// console.log(containDuplicate([1,2,3]))

// function LHS(nums) {
//   let sum = 0;
//   let map = new Map();
//   for (let i in nums) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   for (let key of map.keys()) {
//     if (map.has(key+1)) {
//       let t = map.get(key) + map.get(key+1);
//       sum = Math.max(sum, t);
//     }
//   }
//   return sum;
// }

// 最长连续子序列
// function longestConsecutive(nums) {
//   let set = new Set();
//   for (let num of nums) {
//     set.add(num);
//   }
//   let longest = 0;
//   for (let num of nums) {
//     if (set.delete(num)) {
//       // 向当前元素的左边搜索，eg：当前元素为100，则向左搜索：99,98,97，...
//       let currentLongest = 1;
//       let current = num;
//       while(set.delete(current - 1)) current--;
//       currentLongest += num - current;
//       // 向当前元素的右边搜索，eg: 当前为100，则向右搜索：101,102,103，...
//       current = num;
//       while(set.delete(current + 1)) current++;
//       currentLongest += current - num;
//       // 搜索完后更新longest
//       longest = Math.max(longest, currentLongest);
//     }
//   }
//   return longest;
// }


// function isBipartite(graph) {
//   // bfs+染色法
//   const len = grap.length;
//   const colors = new Array(len).fill(0); //用于存储染色信息的数组，0表示未染色，1表示染成红色，2表示绿色
//   for (let i = 0; i < len; i++) {
//     if (!colors[i]) { //判断是否染色，如已染色说明此处已被遍历过了，跳过（为什么不判断是否雨需要染得颜色相同，不同的话直接false）
//       let que = [i]; // 用队列存储需要被染色的节点下表
//       colors[i] = 1;// 初始化第一个的颜色为红色
//       while(que.length) { //通过队列的长度来判断是否结束循环
//         const key = que.shift();
//         const color = colors[key] === 1 ? 2 : 1; // 记录下该节点的下个节点应该为什么颜色
//         for (const item of graph[key]) { // 遍历该节点所有与之相连的结点
//           if (colors[item]) { // 如果该节点已经被染色，则判断该颜色是否与记录下的颜色一样，不一样则返回false
//             if (colors[item] !== color) return false;
//           } else { // 如果未被染色，则将其染色，并将其添加进队列中
//               colors[item] = color;
//               que.push(item);
//           }

//         }
//       }
//     }
//   }
//   return true;
// }

// /**
//  * @param {number[][]} graph
//  * @return {boolean}
//  */
// var isBipartite = function (graph) {
//   /* dfs + 染色法 */
//   const colors = new Array(graph.length).fill(0); // 用于存储染色信息的数组，0 表示未染色，1 表示染成红色，2 表示染成绿色
//   return colors.every((value, index) => value === 0 ? dfs(index, graph, colors, 1) : true); // 如果已经被染色就不必在递归了
// };

// const dfs = (i, graph, colors, color) => {
//   if (colors[i]) { // 递归出口，如果已被染色，则判断是否与要被染色的颜色一致
//     if (colors[i] !== color) return false; // 不一致 return false
//     return true; // 一致 return true
//   }
//   colors[i] = color; // 未被染色，则将其染色
//   return graph[i].every(value => dfs(value, graph, colors, color === 1 ? 2 : 1));
// };



// const SERVER_URL = '/server';
// let xhr = new XMLHttpRequest();
// xhr.open("GET", SERVER_URL, true);
// xhr.onreadystatechange = function() {
//   if (this.readyState !== 4) return;
//   if (this.status === 200) {
//     handle(this.response);
//   } else {
//     console.error(this.statusText);
//   }
// };
// xhr.onerror = function() {
//   console.error(this.statusText);
// };
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");
// xhr.send(null);

// function getJSON(url) {
//   let promise = new Promise(function(resolve,reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     };
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Accept", "applicaiton/json");
//     xhr.send(null);
//   });
//   return promise;
// }

// 原型式继承
// function  object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }

// [] == ![] => [] == false => [] == toNumber(false) => [] == 0 => toPrimitive([]) == 0 => '' == 0 => toNumber('') == 0 => true;

// 原型链继承
// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//   return this.prototype;
// }
// function SubType() {
//   this.subproperty = false;
// }
// // 继承了SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue());

// 构造函数继承
// function SuperType() {
//   this.colors = ["red", "blue", "green"];
// }
// function SubType() {
//   SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors);
// var instance2 = new SubType();
// console.log(instance2.colors);
// function SuperType(name) {
//   this.name = name;
// }
// function SubType() {
//   SuperType.call(this, "Nicholas");
//   this.age = 29;
// }
// var instance = new SubType();
// console.log(instance.age);
// console.log(instance.name);

// 组合继承
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }
// function SubType(name, age) {
//   SuperType.call(this,name);
//   this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }
// var instance1 = new SubType("Nike", 29);
// instance1.colors.push("black");
// console.log(instance1.colors);
// instance1.sayAge();
// instance1.sayName();
// var instance2 = new SubType("Greg", 18);
// console.log(instance2.colors);
// instance2.sayName();
// instance1.sayAge();

// 原型式继承（浅复制）
// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// var person = {
//   nname: "nike",
//   friends: ["S","co", "van"]
// };
// var anotherPerson = object(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("rio");
// var yetAntherPerson = object(person);
// yetAntherPerson.name = "Linda";
// yetAntherPerson.friends.push("Bar");
// console.log(person.friends);

// es6的原型式继承  不需要自己定义object了，直接使用Object.create(第一个参数，第二个参数) 第一个参数是要当做原型的对象，第二个是自定义的新属性
// var person = {
//   name: "Nicholas",
//   friends: ["She","Cout","Van"]
// };
// var anotherPerson = Object.create(person, {
//   name: {
//     value: "Greg"
//   }
// });
// console.log(anotherPerson.name);

// 寄生式继承，和原型式继承差不多，多了一个函数，封装了一下继承过程
// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// 封装
// function createAnother(original) {
//   var clone = object(original);
// 对象增强
//   clone.sayHi = function() {
//     console.log("hi");
//   };
//   return clone;
// }
// var person = {
//   name:'nike',
//   friends:  ["s","b","s"]
// };
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi();


// 寄生组合式继承 用到了构造函数继承和寄生式继承
// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// function inheritPrototype(subType, superType) {
//   var prototype = object(superType.prototype); // 创建对象
//   prototype.constructor = subType;
//   subType.prototype = prototype;
// }
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }

// // AMD
// define(['./a', './b'], function(a, b) {
//   // 依赖必须一开始就写好
//   a.doSomething();
//   // 此处省略100行
//   b.doSomething();
//   // ...
// })

// // CMD
// define(function(require, exports, module) {
//   var a = require('./a');
//   a.doSomething();
//   // 省略n行
//   var b = require('./b');
//   b.doSomething();
// })

// define(function(require, exports, module) {
//   // 就近依赖
//   var a = require('./a');
//   a.doSomething();
//   var b = require('./b');
//   b.doSomething();
// })
// define(['./a', './b'], function(a, b) {
//   // 依赖前置
//   a.doSomething();
//   b.doSomething();
// })

//（1+2）*3-4
// var result = subtract(multiply(add(1,2),3),4);
// // 等价于
// add(1,2).multiply(3).subtract(4);

// var p1 = new Promise((resolve,reject) => {
//   console.log('没有resolve')
//   // throw new Error('手动返回错误')
//   reject('失败了')
// })
// p1.then(data => {
//   console.log('data=',data);
// },err => {
//   console.log('err=',err)
// }).catch(
//   res => {
//       console.log('catch data=',data)
//   }
// )


// function sky() {
//   what is the tommor is a good day  i  thik
// }

// function MyInstanceof(left, right) {
//   // 获取对象的原型和获取构造函数的原型
//   let proto = Object.getPrototypeOf(left);
//   let prototype = right.prototype;
//   // 判断构造函数的prototype对象是否出现在了对象的原型链上
//   while(true) {
//     if (!proto) return false;
//     if (proto === prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   } 
// }

// function objectFactory() {
//   let newObject = null,
//   constructor = Array.prototype.call(arguments),
//   result = null;
//   // 参数判断
//   if (typeof constructor !== 'function') {
//     console.log("type error");
//     return;
//   }
//   // 新建空对象，并且把空对象的原型设置为构造函数的prototype对象
//   newObject = Object.create(constructor.prototype);
//   // 将this指向新对象，并且执行函数
//   result = constructor.apply(newObject, arguments);
//   // 判断新建对象类型并返回
//   let flag =
//   result && (typeof result === 'object' || typeof result === 'function');
//   // 判断返回结果(如果是值类型，返回创建的对象；如果是引用类型，就返回这个引用类型的对象)
//   return flag ? result : newObject;
// }
// 使用方法
// objectFactory(构造函数， 初始化参数)


// const SEVER_URL = "/sever";
// let xhr = new XMLHttpRequest();
// // 创建http请求
// xhr.open("GET", SEVER_URL, true);
// // 设置状态监听函数
// xhr.onreadystatechange = function() {
//   if (this.readyState !== 4) return;
//   // 当请求成功时
//   if (this.status === 200) {
//     hanle(this.response);
//   } else {
//     console.error(this.statusTExt);
//   }
// };
// // 设置请求失败监听函数
// xhr.onerror = function() {
//   console.error(this.statusText);
// }
// // 设置请求头信息
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");
// // 发送http请求
// xhr.send(null);

// function getJson(url) {
//   // 创建一个promise对象
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     // 新建一个http请求
//     xhr.open("GET", url, true);
//     // 设置状态的监听函数
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       // 当请求成功或失败时，改变promise的状态
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }
//     // 设置响应的数据类型
//     xhr.responseType = "json";
//     // 设置请求头信息
//     xhr.setRequestHeader("Accept", "application/json");
//     // 发送http请求
//     xhr.send(null);
//   });
//   return promise;
// }

// class Modal {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Modal.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Modal(name);
//     }
//     return instance;
//   }
// })()
// let a = Modal.create('aaa');
// let b = Modal.create('bbb');
// // 因为是单利，所以两个实例是相等的
// console.log(a, b);
// console.log(a === b);

// 第一遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//  let instance = null;
//  return function(name) {
//    if (!instance) {
//     instance = new Model(name);
//    }
//    return instance;
//  }
// })();
// let a = Model.create('aaa');
// console.log(a);

// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaaa");

// 第二遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaa");
// let b = Model.create("bbb");

// 第三遍
// 一个类只有一个实例对象并且提供了访问该实例的全局访问点
// class Model {
//   constrcutor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaa");

// 第四遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       insntance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaa");

// 第五遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create('aaa');

// 第六遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = Model.create(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaaa");

// 第七遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaa");

// 第八遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function(){
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaa");

// 第九遍
// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create("aaa");

// 第十遍

// class Model {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Model.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Model(name);
//     }
//     return instance;
//   }
// })();
// let a = Model.create('aaa');
// let b = Model.create('bbb');
// console.log(a === b);
// console.log(a.getName());

// const list = {
//   'A' : 100,
//   'B' : 70,
//   'C' : 50
// }
// const obj = new Proxy(list, {
//   get(target, key) {
//     if (target[key] > 60) {
//       console.log('考试及格');
//       console.log(target[key]);
//     } else {
//       console.log('不及格成绩无法公示');
//     }
//   },
//   set(target, key, newVal) {
//     if (newVal - target[key] > 10) {
//       target[key] = newVal;
//       console.log('修改成绩成功');
//       console.log(target[key]);

//     } else {
//       console.log('修改成绩失败');
//     }
//   }
// })
// obj.A;
// obj.C;
// obj.C = 111;

// const list = { 
//   'A' : 100,
//   'B' : 80,
//   'C' : 50
// }
// const obj = new Proxy(list, {
//   get(target, key) {
//     if (target[key] > 60) {
//       console.log('成绩及格');
//       console.log(target[key]);
//     } else {
//       console.log('成绩不及格，不予公示');
//     }
//   },
//   set(target,key, newVal) {
//     if (newVal - target[key] > 10) {
//       target[key] = newVal;
//       console.log('修改成功');
//       console.log(target[key]);
//     } else {
//       console.log("修改失败");
//     }
//   }
// })
// obj.A;
// obj.C;
// obj.C = 110;

// const list = {
//   'A' : 100,
//   'B' : 80,
//   'C' : 50
// }
// const obj = new Proxy(list, {
//   get(target, key) {
//     if (target[key] > 60) {
//       console.log("查询成功");
//       console.log(target[key]);
//     } else {
//       console.log("成绩不合格，不予公示");
//     }
//   },
//   set(target, key, newVal) {
//     if (newVal - target[key] > 10) {
//       target[key] = newVal;
//       console.log("修改成功,修改后成绩为:",target[key]);
//     } else {
//       console.log("修改失败");
//     }
//   }
// })
// obj.A;
// obj.C;
// obj.C = 110;

// const createImage = (function() {
//   const img = document.createElement('img');
//   document.body.appendChild(img);
//   return function(src) {
//     img.src = src;
//   }
// })();
// const proxyImage = function(fn) {
//   const image = new Image();
//   const defaultImg = 'https://rs.vip.miui.com/vip-resource/prod/mio/v136/static/media/lazyLoad.a10ffbd7.png';
//   return function(src) {
//     fn(defaultImg);
//     // 加一个延迟，可以看到图片替换的过程
//     setTimeout(function() {
//       image.src = src;
//       image.onload = function() {
//         fn(src);
//       };
//     }, 2000);
//   }
// }
// const proxy = proxyImage(createImage);
// proxy('https://pic1.zhimg.com/80/v2-ec33fcec249a9cabab61b14436432bf0_r.jpg');

// const createImage = (function() {
//   const img = document.createElement('img');
//   document.body.appendChild(img);
//   return function(src) {
//     img.src = src;
//   }
// })
// const proxyImage = function(fn) {
//   const image = new Image();
//   const defaultImage = "url1";
//   return function(src) {
//     fn(defaultImage);
//     // 加一个延迟，展示懒加载的过程
//     setTimeout(function() {
//       image.src = src;
//       image.onload = function() {
//         fn(src);
//       }
//     }, 2000);
//   }
// }
// const proxy = proxyImage(createImage);
// proxy('url2');

// 先建立立即执行函数添加新img节点
// 再建立proxyImage对象实现懒加载
// const createImage = (function() {
//   const img = document.createElement('img');
//   document.body.appendChild(img);
//   return function(src) {
//     img.src = src;
//   }
// })();
// const proxyImage = function(fn) {
//   const image = new Image();
//   const defaultImage = 'https://rs.vip.miui.com/vip-resource/prod/mio/v136/static/media/lazyLoad.a10ffbd7.png';
//   return function(src) {
//     fn(defaultImage);
//     // 延迟，懒加载效果
//     setTimeout(function() {
//       image.src = src;
//       image.onload = function() {
//         fn(src);
//       }
//     }, 2000)
//   }
// }
// const proxy = proxyImage(createImage);
// proxy("https://pic1.zhimg.com/80/v2-ec33fcec249a9cabab61b14436432bf0_r.jpg");

// 先创建一个立即执行函数来新建img节点并添加图片路径
// 懒加载过程，立即执行函数作为参数传入
// const createImage = (function() {
//   const img = document.createElement('img');
//   document.body.appendChild(img);
//   return function(src) {
//     img.src = src;
//   }
// })(); 
// const proxyImage = function(fn) {
//   const image = new Image();
//   const defaultImage = 'url1';
//   return function(src) {
//     fn(defaultImage);

//   // 懒加载效果
//     setTimeout(function() {
//       image.src = src;
//       image.onload = function() {
//         fn(src);
//       }
//     }, 2000);
//   }
// }
// const proxy = new proxyImage();
// proxy('url2');

// 创建一个主题，保存状态，状态变化之后触发所有观察者对象：添加订阅对象、获取信息、设置信息、发布通知
// 观察者：自动更新
// class Subject {
//   constructor() {
//     this.message = '暂无通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update());
//   }
//   attach(observer) {
//     this.observers.push(observer);
//   }
// }

// class Observer {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attach(this);
//   }
//   update() {
//     console.log(`${this.name}收到通知：${this.message.getMessage()}`);
//   }
// }
// let message = new Subject();
// let a = new Observer('张三', message);
// let b = new Observer("李四", message);
// let c = new Observer('王五', message);

// message.setMessage("明天开家长会");
// message.setMessage("在家也要好好学习");
// message.setMessage('明天开运动会');


// class Subject {
//   constructor() {
//     this.message = '暂无通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update())
//   }
//   attach(observer) {
//     this.observers.push(observer);
//   }
// }
// class Observer {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attach(this);
//   }
//   update() {
//     console.log(`${this.name}收到通知:${this.message.getMessage()}`)
//   }
// }
// let message = new Subject();
// let a = new Observer('张三', message);
// let b = new Observer('王五', message);
// message.setMessage("明天不上学");
// message.setMessage('在家好好学习');

// class Subject {
//   constructor() {
//     this.message = '暂无通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update())
//   }
//   attach(observer) {
//     this.observers.push(observer);
//   }
// }
// class Observer {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attach(this);
//   }
//   update() {
//     console.log(`${this.name}收到通知:${this.message.getMessage()}`);
//   }
// }
// let message = new Subject();
// let a = new Observer('张三', message);
// message.setMessage('干你丫的')

// class Modal {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Modal.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Modal(name);
//     }
//     return instance;
//   }
// })();
// let a = Modal.create('aaa');
// let b = Modal.create('bbb');

// 构造函数里面要初始化信息和缓存订阅者、获取信息、设置信息、发布通知、添加订阅者
// class Subject {
//   constructor() {
//     this.message = '暂无通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update());
//   }
//   attach(observer) {
//     this.observers.push(observer);
//   }
// }

// 绑定
// 更新
// class Observer {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attach(this);
//   }
//   update() {
//     console.log(`${this.name}收到通知：${this.message.getMessage()}`);
//   }
// }

// let message = new Subject();
// let a = new Observer('张三', message);
// let b = new Observer('李四', message);
// let c = new Observer('王五', message);

// message.setMessage("明天开学");
// message.setMessage("今天提前放假");
// message.setMessage("在家记得踢足球");

// 立即执行函数迎来添加img结点并显示src路径的图片
// 代理图片函数用来执行立即执行函数并添加定时器来定时替换原路径照片达到懒加载的效果
// const createImage = (function() {
//   const img = document.createElement('img');
//   document.body.appendChild(img);
//   return function(src) {
//     img.src = src;
//   }
// })();

// const proxyImage = function(fn) {
//   const image = new Image();
//   const defaultImage = 'url';
//   return function(src) {
//     fn(defaultImage);
//     setTimeout(function() {
//       image.src= src;
//       image.onload = function() {
//         fn(src);
//       }
//     }, 2000);
//   }
// }
// const proxy = proxyImage(createImage);
// proxy("url");

// const list = {
//   'A' :100,
//   'B' : 80,
//   'C' : 40
// }
// const obj = new Proxy(list, {
//   get(target, key) {
//     if (target[key] > 60) {
//       console.log('考试及格');
//       return target[key];
//     } else {
//       console.log('不及格，成绩不予公示');
//     }
//   },
//   set(target, key, newVal) {
//     if (newVal - target[key] > 10) {
//       target[key] = newVal;
//       console.log('修改后成绩为：', target[key]);
//     } else {
//       console.log('修改成绩失败');
//     }
//   }
// })

// obj.A;
// obj.B;
// obj.C;
// obj.A = 111;
// obj.C = 45;


// 二叉树的层次遍历 II

// function levelOrderBottom(root) {
//   if (!root) return [];
//   let queue = [root];
//   let res = [];
//   while(queue.length) {
//     let temp = [];
//     const levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       temp.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     res.push(temp);
//   }
//   return res.reverse();
// }


// 二叉树的右视图
// 判断是否遍历到每一层的最后的元素，如果是则直接放入result数组，最后返回result即可

// function rightSideView(root) {
//   if (!root) return [];
//   let queue = [root];
//   let res = [];
//   while(queue.length) {
//     const levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       if (i === levelSize - 1) res.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return res;
// }

// 二叉树的层平均值
// 将每层结点相加并除每层的节点数，然后推入数组并返回
// function averageOfLevels(root) {
//   let queue = [root];
//   let res = [];
//   while(queue.length) {
//     let levelSum = 0;
//     const levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       levelSum += node.val;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     res.push(levelSum / levelSize);
//   }
//   return res;
// }

// 429. N叉树的层序遍历
// 遍历每层结点时，针对每个结点判断是否含有子节点，有的话将其加入队列
// function levelOrder (root) {
//   if (!root) return [];
//   let queue = [root];
//   let res = [];
//   while(queue.length) {
//     let temp = [];
//     const levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       temp.push(node.val);
//       for (let j = 0; j < node.children.length; j++) {
//         if (node.children[j]) queue.push(node.children[j]);
//       }
//     }
//     res.push(temp);
//   }
//   return res;
// }

/*
function test() {
  return 1
  +3 // 在这里自动添加分号因为不符合规则1并且符合规则3，即return 1后面的+3符合语法，所以分号插入到+3后面，代码块结束处
}
console.log(test()); // 4
*/

// var mySymbol = Symbol('my symboy');
// function sleep(duration) {
//    return new Promise(function(resolve) {
//      setTimeout(resolve, duration);
//    })
// }
// async function changeColor(duration, color) {
//   document.getElementById("traffic-light").style.background = color;
//   await sleep(duration);
// }
// async function main() {
//   while(true) {
//     await changeColor(3000, 'green');
//     await changeColor(1000, 'yellow');
//     await changeColor(2000, 'red');
//   }
// }
// main();

// 工厂模式
// function createPerson(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     console.log(this.name);
//   };
//   return o;
// }
// var person1 = createPerson('Nicholas', 29, 'softwate Engineer');
// var person2 = createPerson('Greg', 18, 'doctor');


// 构造函数模式
// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   };
// }
// var person1 = new Person('Nicholas', 29, 'software Engineer');
// var person2 = new Person('Greg', 20, 'doctor');

/*
new 操作符实际上经历了四个步骤：
1.创建一个新对象
2.将构造函数的作用域赋给新对象（因此this就指向了这个新对象
3.执行构造函数中的代码（为这个新对象添加属性
4.返回新对象
*/

// 原型模式
// function Person() {}
// Person.prototype.name = 'Nicholas';
// Person.prototype.age = 20;
// Person.prototype.job = 'doctor';
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// var person1 = new Person();
// person1.sayName();
// var person2 = new Person();
// person2.sayName();

// 1.自顶向下比较左右子树最大深度差，如果每个结点的左右子树最大深度差小于等于一，即所有子树都是平衡的，那么整个子树都是平衡的
// function isBalanced(root) {
//   if (!root) return true;
//   return Math.abs(depth(root.left)-depth(root.right)) <= 1 
//   && isBalanced(root.left) 
//   && isBalanced(root.right);
// }
// function depth(node) {
//   if (!node) return -1;
//   return Math.max(depth(node.left), depth(node.right)) + 1;
// }

// 自底向上，判定每个子树是否为平衡树，如果平衡则是用他们的高度判断父节点是否平衡，并计算父节点高度，如果不平衡返回-1
// 遍历比较二叉树每个结点的左右子树深度：
// 1.比较左右子树深度，若差值大于1则返回标记-1，表示当前子树不平衡
// 2.左右子树有一个不平衡，或左右子树差值大一1，则二叉树不平衡
// 3.若左右子树平衡，返回当前树的深度（左右子树深度最大值+1
// function isBalanced(root) {
//   return balanced(root) !== -1;
// }
// function balanced(node) {
//   if (!node) return 0;
//   const left = balanced(node.left);
//   const right = balanced(node.right);
//   if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
//     return -1;
//   }
//   return Math.max(left, right) +1;
// }


// function diameterOfBinaryTree(root) {
//   let ans = 1; //默认为1是因为默认了根节点自身的路径长度
//   depth(root);
//   function depth(node) {
//     if (!node) return 0;
//     let left = depth(node.left);
//     let right = depth(node.right);
//     ans = Math.max(ans, left+right+1); // 每到一个节点更新一次最大值
//     return Math.max(left, right) + 1; // 返回该节点为根的子树的深度(每一个结点都有左右两颗子树，返回最深的，肯定要+1即算上该节点本身)
//   }
//   return ans-1;
// }

// // 后序遍历：将「对节点的处理操作」放到了「递归右子树」之后。
// function invertTree(root) {
//   if (!root) return root;
//   // 递归压栈压到底
//   invertTree(root.left);
//   invertTree(root.right);
//   // 执行交换
//   const temp = root.left;
//   root.left = root.right;
//   root.right = temp;
//   return root;
// }

// // 前序遍历：将「对节点的处理操作」放到了「递归左子树」之前。
// function invertTree(root) {
//   if (!root) return root;
//   // 交换
//   const temp = root.left;
//   root.left = root.right;
//   root.right = temp;
//   // 内部的翻转交给递归去做
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// }

// 层序遍历，BFS
// function invertTree(root) {
//   if (!root) return root;
//   let queue = [root];
//   while(queue.length) {
//     let node = queue.shift(); // 出列的结点
//     const temp = node.left; // 交换出列结点的左右子树
//     node.left = node.right;
//     node.right = temp;
//     // 入列考察，因为要继续翻转他们
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return root;
// }

    /**
        对于任意一个节点, 如果最大和路径包含该节点, 那么只可能是两种情况:
        1. 其左右子树中所构成的和路径值较大的那个加上该节点的值后向父节点回溯构成最大路径
        2. 左右子树都在最大路径中, 加上该节点的值构成了最终的最大路径
        **/
// function maxPathSum(root) {
//   let max = Number.MIN_SAFE_INTEGER; 
//   depth(root);
//   function depth(node) {
//     if (!node) return 0;
//     let leftSum = Math.max(0, depth(node.left)); // 如果子树路径和为负则应当置0表示最大路径不包含子树
//     let rightSum = Math.max(0, depth(node.right));
//     max = Math.max(max, leftSum+rightSum+node.val); // 每到一个节点更新一次最大值(判断在该节点包含左右子树的路径和是否大于当前最大路径和)
//     return Math.max(leftSum, rightSum) + node.val; // 返回该节点为中心的最大路径和(每一个结点都有左右两颗子树，返回左右中最长的路径+root.val根节点的值)
//   }
//   return max;
// }


// function longestUnivaluePath(root) {
//   let max = 0;
//   if (!root) return 0;
//   depth(root);
//   function depth(node) {
//     if (!node) return 0;
//     const left = depth(node.left);
//     const right = depth(node.right);
//     let leftSize = 0, rightSize = 0;
//     if (node.left && node.left.val === node.val) leftSize = left + 1;
//     if (node.right && node.right.val === node.val) rightSize = right + 1;
//     max = Math.max(max, leftSize+rightSize); // 每到一个节点更新一次最大值
//     return Math.max(leftSize, rightSize); 
//   }
//   return max;
// }

// function mergeTrees(r1, r2) {
//   if (r1 === null || r2 === null) {
//     return r1 === null ? r2 : r1;
//   }
//   return dfs(r1, r2);
//   function dfs(t1, t2) {
//     // 如果 t1和t2中，只要有一个是null，函数就直接返回
//     if (t1 === null || t2 === null) {
//       return t1 === null ? t2 : t1;
//     }
//     // 让t1的值 等于t1和t2的值累加，再递归计算两棵树的左节点、右节点
//     t1.val += t2.val;
//     t1.left = dfs(t1.left, t2.left);
//     t1.right = dfs(t1.right, t2.right);
//     return t1;
//   }
// }

// 广度优先搜索即层序遍历解法
/*
只要两颗树的左节点都不为 null，就把将他们放入队列中；同理只要两棵树的右节点都不为 null 了，也将他们放入队列中。
然后我们不断的从队列中取出节点，把他们相加。
如果出现 树 1 的 left 节点为 null，树 2 的 left 不为 null，直接将树 2 的 left 赋给树 1 就可以了；同理如果树 1 的 right 节点为 null，树 2 的不为 null，将树 2 的 right 节点赋给树 1。
*/
// function mergeTrees(r1, r2) {
//   // 如果两个结点有一个是null直接返回另一个即可
//   if (r1 === null || r2 === null) {
//     return r1 === null ? r2 : r1;
//   }
//   let queue = [];
//   queue.push(r1);
//   queue.push(r2);
//   while(queue.length) {
//     let t1 = queue.shift();
//     let t2 = queue.shift();
//     t1.val += t2.val;
//     // 如果t1和t2左子树都不为空就放到队列中
//     // 如果t1左子树为空，就把t2的左子树挂到t1的左子树上
//     if (t1.left !== null && t2.left !== null) {
//       queue.push(t1.left);
//       queue.push(t2.left);
//     } else if (t1.left === null) {
//       t1.left = t2.left;
//     }
//     // 对于右子树也是一样的
//     if (t1.right !== null && t2.right !== null) {
//       queue.push(t1.right);
//       queue.push(t2.right);
//     } else if (t1.right === null) {
//       t1.right = t2.right;
//     }
     
//   }
//   return r1;
// }


/* 
sum —— 从根节点到叶子节点的路径上的节点值相加的目标和
递归。转为判断：左、右子树中能否找出和为 sum - root.val 的路径
每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，已经没有子节点了，如果 sum - 当前叶子节点值 == 0 ，就是找到了从根节点到叶子节点的和为 sum 的路径
时间复杂度：O(n)，每个节点被遍历一次
*/

// function hasPathSum(root, sum) {
//   if (root === null) return false;
//   // 遍历到叶子节点如果满足sum - root.val === 0则为true
//   if (root.left === null && root.right === null) {
//     return sum-root.val === 0;
//   }
//   return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val); // 大问题转为两个子树的问题
// }


// 利用两个递归，咋一看很复杂，其实两个递归是各司其职，界限分明。

//一个递归求从任意一个节点开始有多少条满足条件的路径。
//一个递归是遍历整棵树，求各个节点开始各有多少满足条件的路径数，各路径数相加即可得出符合条件的总路径数

// function pathSum(root, sum) {
//   if (!root) return 0;
//   let page = findDown(root, sum); //从根节点开始有多少满足条件的路径数，findDown函数是求从单个节点开始满足条件的路径数
//   let sum1 = pathSum(root.left, sum);//遍历左子树求符合条件的路径数，
//   let sum2 = pathSum(root.right, sum);//遍历右子树求符合条件的路径数
//   return page + sum1 + sum2;//得出总路径数
// }
// // 求从单个节点开始满足条件的路径数，tNode为当前节点，sum为规定的路径权值和
// //若节点为空，返回0
//  // 当前节点权值刚好等于sum则算为1，否则为0
//  //剩下的权值要子树来凑，先看左子树能不能凑出来
//   //再看右子树是否能凑出来
//   // 返回符合条件的路径数
// function findDown(node, sum) {
//   if (!node) return 0;
//   let ret = node.val === sum ? 1 : 0;
//   let leftSum = pathSumStartWithRoot(node.left, sum - node.val);
//   let rightSum = pathSumStartWithRoot(node.right, sum - node.val);
  
//   return ret + leftSum + rightSum;
// }

// 是不是子树
// 两个树同为null相同，一个为null一个不是的话不同，都不为null判断左右子树是否相同
// 1.两个树相同
// 2.和另一个树的左子树相同
// 3.和另一个树的右子树相同

// function isSubtree(s, t) {
//   if (s === null) return false;
//   if (isSameTree(s, t)) return true;
//   return isSubtree(s.left, t) || isSubtree(s.right, t);
// }
// function isSameTree(s, t) {
//   if (s === null && t === null) return true;
//   if (s === null || t === null) return false;
//   return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
// }

// function isSymmetric(root) {
//   if (root === null) return true;
//   return isSymmetric(root.left, root.right);
// }
// function isSymmetric(t1, t2) {
//   if (t1 === null && t2 === null) return true;
//   if (t1 === null || t2 === null) return false;
//   if (t1.val !== t2.val) return false;
//   return isSymmetric(t1.left, t2.right) && isSymmetric(t1.right, t2.left);
// }


// // 如果根节点的左或右子树为空的话是构不成子树的。而最小深度是要求从根节点到子树的。当左或右子树为空时，不符合要求。
// function minDepth(root) {
//   if (!root) return 0;
//   // null结点不参与比较
//   if (root.left === null && root.right !== null) {
//     return 1+ minDepth(root.right);
//   }
//   if (root.left !== null && root.right === null) {
//     return 1 + minDepth(root.left);
//   }
//   return 1 + Math.min(minDepth(root.left), minDepth(root.right));
// }

// function sumOfLeftLeaves (root) {
//   // 设置结果
//   let sum = 0;
//   function dfs(root) {
//     // 终止条件
//     if (!root) return;
//     // 如果有左子树，才进行添加
//     if (root.left && !root.left.left && !root.left.right) {
//       sum += root.left.val;
//     }
//     // 依序遍历左子树和右子树之道没有为止
//     dfs(root.left);
//     dfs(root.right);
//   }
//   dfs(root);
//   return sum;
  
// }

// function sumOfLeftLeaves(root) {
//   if (!root) return 0;
//   let res = 0;
//   let nowRoot = [root];
//   while(nowRoot.length) {
//     let nextRoot = [];
//     for (let i = 0; i < nowRoot.length; i++) {
//       //  如果满足条件，那么添加左子树
//       if (nowRoot[i].left && !nowRoot[i].left.left && !nowRoot[i].left.right) {
//         res += nowRoot[i].left.val;
//       }
//       if (nowRoot[i].left) {
//         nextRoot.push(nowRoot[i].left);
//       }
//       if (nowRoot[i].right) {
//         nextRoot.push(nowRoot[i].right);
//       }
//     }
//     nowRoot = nextRoot;
//   }
//   return res;
// }

// 从根节点开始偷或者从子节点开始偷两种情况比较最大数
// 首先来定义这个问题的状态
// 爷爷节点获取到最大的偷取的钱数呢

// 首先要明确相邻的节点不能偷，也就是爷爷选择偷，儿子就不能偷了，但是孙子可以偷
// 二叉树只有左右两个孩子，一个爷爷最多 2 个儿子，4 个孙子
// 根据以上条件，我们可以得出单个节点的钱该怎么算
// 4 个孙子偷的钱 + 爷爷的钱 VS 两个儿子偷的钱 哪个组合钱多，就当做当前节点能偷的最大钱数。这就是动态规划里面的最优子结构

// function rob(root) {
//   if (!root) return 0;
//   let val1 = root.val;
//   if (root.left) val1 += rob(root.left.left) + rob(root.left.right);
//   if (root.right) val1 += rob(root.right.left) + rob(root.right.right);
//   let val2 = rob(root.left) + rob(root.right);
//   return Math.max(val1, val2);
// }

// 先将根节点放入栈中，只要栈不空，就弹出元素并判断是否有值，有的话推入结果集
// 继续将结点的左右孩子压入栈中，因为是先序遍历所以先压入右孩子
// function preorderTraversal(root) {
//   let res = [];
//   let stack = [root];
//   while(stack.length) {
//     let node = stack.pop();
//     if (node === null) continue;
//     res.push(node.val);
//     stack.push(node.right);
//     stack.push(node.left);
//   }
//   return res;
// }

// function preorderTraversal(root) {
//   let res = [];
//   function preOrderTraversal(node) {
//     if (node) {
//       res.push(node.val);
//       preOrderTraversal(node.left);
//       preOrderTraversal(node.right);
//     }
//   }
//   preOrderTraversal(root);
//   return res;
// }

//前序遍历为 root -> left -> right，后序遍历为 left -> right -> root。
// 可以修改前序遍历成为 root -> right -> left，那么这个顺序就和后序遍历正好相反。

// function postorderTraversal(root) {
//   let res = [];
//   let stack = [root];
//   while(stack.length) {
//     let node = stack.pop();
//     if (node === null) continue;
//     res.push(node.val);
//     stack.push(node.left);
//     stack.push(node.right);
//   }
//   return res.reverse();
// }

// function postorderTraversal(root) {
//   let res = [];
//   function postOrderTraversal(node) {
//     if (node) {
//       postOrderTraversal(node.left);
//       postOrderTraversal(node.right);
//       res.push(node.val);
//     }
//   }
//   postOrderTraversal(root);
//   return res;
// }

// 现将根节点和左右左孩子压入栈中在逐一弹出，将值压入结果集，然后在右子树进行同样的操作
// function inorderTraversal (root) {
//   let res = [];
//   let stack = [];
//   while(root || stack.length) {
//     while(root) {
//       stack.push(root);
//       root = root.left;
//     }
//     root = stack.pop();
//     res.push(root.val);
//     root = root.right;
//   }
//   return res;
// }

// function trimBST(root, l , r) {
//   if (!root) return null;
//   //下面两个if相当于删除不满足要求的节点
//   if (root.val > r) return trimBST(root.left, l, r);//返回修剪过的右子树。抱有一丝丝期望，希望右子树能够满足要求，因为右子树的值大于当前根节点的值
//   if (root.val < l) return trimBST(root.right, l , r);//返回修剪过的左子树，抱有一丝丝期望，希望左子树能够满足要求，因为左子树的值小于当前根节点的值
//   //处理正常的节点
//   root.left = trimBST(root.left, l, r);
//   root.right = trimBST(root.right, l, r);
//   return root;
// }

// 思路：看到二叉搜索树，应该会立刻想到它的一个性质，它的中序遍历输出的是一个升序数组。
// 知道了这个，这道题就很简单了，只需要把中序遍历的第 k 个元素返回即可。
// function kthSmallest(root, k) {
//   let [num, res] = [0, 0];
//   function inorderTraversal(node, k) {
//     if (!node) return;
//     inorderTraversal(node.left, k);
//     num++; // 每遍历一次num++
//     if (num === k) return res = node.val;
//     inorderTraversal(node.right, k);
//   }
//   inorderTraversal(root, k);
//   return res;
// }

// 迭代
// function kthSmallest(root, k) {
//   let stack = [];
//   let node = root;
//   while(node || stack.length) {
//     // 遍历左子树
//     while(node) {
//       stack.push(node);
//       node = node.left;
//     }
//     node = stack.pop();
//     if (--k === 0) {
//       return node.val;
//     }
//     node = node.right;
//   }
//   return null;
// }

// BST的中序遍历就是从小到大,那么反过来就是从大到小,然后累加就好了.
// 以右->根->左的顺序遍历二叉树，将遍历顺序的前一个结点的累加值记录起来，和当前结点相加，得到当前结点的累加值。

  // 遍历右子树,结点值累加给sum并把累加的结果赋给root.val
  // 遍历顶点
  // 遍历左子树
// function convertBST(root) {
//   let sum = 0;
//   function inOrder(node) {
//     if (node == null) {  // 遍历到null节点，开始返回
//       return;
//     }
//     inOrder(node.right);
//     sum += node.val;
//     node.val = sum;
//     inOrder(node.left);
//   }
//   inOrder(root);
//   return root;
// }

// function convertBST(root) {
//   let sum = 0;
//   let stack = [];
//   let cur = root;
//   // 右子节点，不断压入
//    while (cur) {
//      stack.push(cur);
//      cur = cur.right;
//    }
//   // 清空栈，位于栈顶的结点出栈并累加，找左子节点，存在的话压入栈
//   while(stack.length) {
//     cur = stack.pop();
//    sum += cur.val;
//    cur.val = sum;
//    cur = cur.left;
//    while (cur) {
//      stack.push(cur);
//      cur = cur.right;
//    }
//  }
//  return root; 
// }
/*
只要不是 p 和 q 的值都大于（小于）root.val，即，不同处在 root 的一个子树中，就只有这三种情况：

p 和 q 分居 root 的左右子树。
root 就是 p，q 在 p 的子树中。
root 就是 q，p 在 q 的子树中
这三种情况，p 和 q 的公共祖先都是 root。
*/
// function lowestCommonAncestor(root, p, q) {
//   if (root.val < p.val && root.val < q.val) {
//     return lowestCommonAncestor(root.right, p, q);
//   }
//   if (root.val > p.val && root.val < q.val) {
//     return lowestCommonAncestor(root.left, p, q);
//   }
//   return root;
// }

// 迭代
// 只要不符合都大于或者都小于即当前root就是满足条件的root
// function lowestCommonAncestor(root, p, q) {
//   while(root) {
//     if (root.val < p.val && root.val < q.val) {
//       root = root.right;
//     } else if (root.val > p.val && root.val >q.val) {
//       root = root.left;
//     } else {
//       break;
//     }
//   }
//   return root;
// }


/*
成为最近公共祖先有以下几种情况
1.p和q在root的子树中，且分列两侧
2.p===root，且q在root的子树中
3.q===root，且p在root的子树中
思路：
如果当前遍历的节点 root，不是 p 或 q 或 null，则我们要递归搜寻左右子树：
如果左右子树递归调用，都有结果，说明 p 和 q 分居 root 的左右子树，返回 root。
如果只是其中一个子树递归调用有结果，说明 p 和 q 都在这个子树，则返回该子树递归调用的结果。
如果两个子树递归调用的结果都为 null，说明 p 和 q 都不在这俩子树中，返回 null。
*/
// function lowestCommonAncestor(root, p, q) {
//   if (root === null) return null;
//   if (root === q || root === p) return root;
//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);
//   if (left && right) return root;
//   if (left === null) return right;
//   return left; 
// }


// 实现二叉树的平衡，其实很简单，就每次把一组数最中间的位置，作为树的头拎起来，剩下部分平均分两份就行，
// 要是出多来一个数就分配给左脚or右脚
// 选择指针：l,r，分别代表参与构建BST的数组的开头索引和结尾索引
// function sortedArrayToBST(nums) {
//   if (nums.length === 0) return null;
//   function buildTree(l, r) {
//     if (l > r) return null;
//     let mid = Math.floor((l+r)/2);
//     let root = new TreeNode(nums[mid]);
//     root.left = buildTree(l, mid-1);
//     root.right = buildTree(mid+1, r);
//     return root;
//   }
//   return buildTree(0, nums.length - 1);
// }

// function sortedListToBST(head) {
//   let nums = [];
//   while(head) {
//     nums.push(head.val);
//     head = head.next;
//   }
//   if (nums.length === 0) return null;
//   function buildTree(l, r) {
//     if (l > r) return null;
//     let mid = Math.floor((l+r)/2);
//     let root = new TreeNode(nums[mid]);
//     root.left = buildTree(l, mid-1);
//     root.right = buildTree(mid+1, r);
//     return root;
//   }
//   return buildTree(0, nums.length - 1);
// }

// 寻找链表的中间点，有个小技巧：
// 快、慢指针指向头结点，快指针一次走两步，慢指针一次走一步，当快指针走到尾节点时，慢指针正好走到链表的中间。然后断成两个链表，分而治之。
// 为了断开，我们需要一个变量，保存慢指针的前一个节点，因为单向链表的节点没有前驱指针。
// function sortedListToBST (head) {
//   if (!head) return null;
//   let slow = head;
//   let fast = head;
//   let preSlow; // 保存slow的前一个节点
//   while(fast && fast.next) {
//     preSlow = slow;
//     slow =slow.next;
//     fast = fast.next.next;
//   }
//   const root = new TreeNode(slow.val);
//   if (preSlow != null) {
//     preSlow.next = null; //preSlow有值，slow不是指向head，切断，左边用来构建左子树
//     root.left = sortedListToBST(head);
//   }
//   root.right = sortedListToBST(slow.next);
//   return root;
// }

// 将二叉查找树转换成数组然后左右指针在数组中查找

// function findTarget(root, k) {
//   let nums = [];
//   function inOrder(root, nums) {
//     if (root == null) return;
//     inOrder(root.left, nums);
//     nums.push(root.val);
//     inOrder(root.right, nums);
//   }
//   inOrder(root, nums);
//   let i =0, j = nums.length - 1;
//   while (i < j) {
//     let sum = nums[i] + nums[j];
//     if (sum == k) return true;
//     if (sum < k) i++;
//     else j--;
//   }
//   return false;
// }

// 利用中序遍历有序的特点，求相邻两个数的差值，找出最小的

// const getMinimumDifference = (root) => {
//   let diff = Number.MAX_SAFE_INTEGER;
//   let preVal;

//   const inOrder = (root) => {
//     if (root == null) {
//       return;
//     }
//     inOrder(root.left);
//     if (preVal !== undefined && root.val - preVal < diff) {
//       diff = root.val - preVal;
//     }
//     preVal = root.val;
//     inOrder(root.right);
//   };

//   inOrder(root);
//   return diff;
// };

/*
我们可以顺序扫描中序遍历序列，用 \rm basebase 记录当前的数字，用 \rm countcount 记录当前数字重复的次数，用 \rm maxCountmaxCount 来维护已经扫描过的数当中出现最多的那个数字的出现次数，用 \rm answeranswer 数组记录出现的众数。每次扫描到一个新的元素：

首先更新 \rm basebase 和 \rm countcount:
如果该元素和 \rm basebase 相等，那么 \rm countcount 自增 11
否则将 \rm basebase 更新为当前数字，\rm countcount 复位为 11
然后更新 \rm maxCountmaxCount：
如果 \rm count = maxCountcount=maxCount，那么说明当前的这个数字（\rm basebase）出现的次数等于当前众数出现的次数，将 \rm basebase 加入 \rm answeranswer 数组
如果 \rm count > maxCountcount>maxCount，那么说明当前的这个数字（\rm basebase）出现的次数大于当前众数出现的次数，因此，我们需要将 \rm maxCountmaxCount 更新为 \rm countcount，清空 \rm answeranswer 数组后将 \rm basebase 加入 \rm answeranswer 数组
*/

// function findMode(root) {
//   let base = 0, count = 0, maxCount = 0;
//   let ans = [];
//   function update(x) {
//     if (x === base) {
//       count++;
//     } else {
//       count = 1;
//       base = x;
//     }
//     if (count === maxCount) {
//       ans.push(base);
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       ans = [base];
//     }
//   }
//   function inOrder(root) {
//     if (root === null) return;
//     inOrder(root.left);
//     update(root.val);
//     inOrder(root.right);
//   }
//   inOrder(root);
//   return ans;
// }

// function createPerson(name,age ,job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     console.log(this.name);
//   };
//   return o;
// }
// var person1 = createPerson('Nicholas', 29, "Software Engineer");
// var person2 = createPerson("Greg", 27, "Doctor");

// function Person(name,age ,job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   };
// }
// var person1 = new Person('Nicholas', 29, "Software Engineer");
// var person2 = new Person("Greg", 27, "Doctor");

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// var person1 = new Person();
// person1.sayName();
// var person2 = new Person();
// person2.sayName();

// function Person(name,age ,job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.friends = ["A","B"];
// }
// Person.prototype = {
//   constructor: Person,
//   syaName: function() {
//     console.log(this.name);
//   }
// }

// function SpecialArray() {
//   var values = new Array();
//   values.push.apply(vlaues, arguments);
//   vlaues.toPipedString = function() {
//     return this.join("|");
//   };
//   return values;
// }
// var colors = new SpecialArray("red", "blue", "green");
// console.log(colors.toPipedString());

// function Person(name, age, job) {
//   var o = new Object();
//   // 定义一些私有变量和函数
//   o.sayName = function() {
//     console.log(name);
//   }
//   return o;
// }
// var friend = Person("Nicholas", 20, "software Engineer");
// friend.sayName();

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// }
// function SubType() {
//   this.subproperty = false;
// }
// // 通过实例继承
// SubType.prototype = new SuperType();
// // 减价新方法
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }
// //重新父类方法
// SubType.prototype.getSuperValue = function( ){
//   return false;
// }

// var instance = new SubType();
// console.log(instance.getSuperValue());

// function SuperType(name) {
//   this.name = name;
// }
// function SubType() {
//   // 继承SuperType同时传参
//   SuperType.call(this, "Nicholas");
//   // 实例属性
//   this.age = 29;
// }
// var instance = new SubType();
// console.log(insatnce.name);
// console.log(instance.age);

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "green", "blue"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }
// function SubType(name, age) {
//   // 继承属性
//   SuperType.call(this, name);
//   this.age = age;
// }
// // 继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// }

// var instance1 = new SubType("Nichloas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors);
// instance1.sayName();
// instance1.sayAge();

// var instance1 = new SubType("jack", 29);
// console.log(instance1.colors);
// instance1.sayName();
// instance1.sayAge();

// var person = {
//   name: "Nicholas",
//   friends: ["shel", "court", "Van"]
// }
// var anthoerPerson = Object.create(person, {
//   name: {
//     value: "Greg"
//   }
// });
// console.log(anthoerPerson.name);

//Object.create(x)一个参数的时候等同于下面
// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }

// function createAnother(original) {
//   var clone = ojbect(original);
//   clone.sayHi = function() {
//     console.log("hi");
//   };
//   return clone;
// }
// var person = {
//   name: "Nicholas",
//   friends: ["shel", "court", "Van"]
// }
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi();

// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// function inheritPrototype(subType, superType) {
//   var prototype = object(superType.prototype);
//   prototype.constructor = subType;
//   subType.prototype = prototype;
// }
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "green", "blue"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }
// function SubType(name, age) {
//   // 继承属性
//   SuperType.call(this, name);
//   this.age = age;
// }
// // 继承方法
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// }


// var p1 = new Promise((resolve,reject) => {
//   console.log('没有resolve')
//   // throw new Error('手动返回错误')
//   reject('失败了')
// })
// p1.then(data => {
//   console.log('data=',data);
// },err => {
//   console.log('err=',err)
// }).catch(
//   res => {
//       console.log('catch data=',data)
//   }
// )

// .triangle {
//   position： absolute;
//   width: 0;
//   height: 0;
//   border-width: 0 10px 10px 10px;
//   border-style: solid;
//   border-color: transparent transparent white transparent;
// }

// function shallowCopy(object) {
//   // 只拷贝对象属性
//   if (!object || typeof object !== "object") return;
//   // 根据object类型创建一个数组或者对象
//   let newObj = Array.isArray(object) ? [] : {};
//   // 遍历object，并且判断是object的属性才拷贝
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj[key] = object[key];
//     }
//   }
//   return newObj;
// }
// // 只拷贝对象属性
// // 根据参数类型创建数组或对象
// // 遍历对象，并判断是对象的属性在拷贝//
// // 遇到引用类型，新建一个引用类型并赋值
// function deepCopy(object) {
//   if (!object || typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj = typeof object[key] === "objecct"
//       ? deepCopy(object[key])
//       : object[key];
//     }
//   }
//   return newObj;
// }

// Number.EPSILON

// for( let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, i*1000)
// }

// for (var i =0; i < 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000)
//   })(i);
// }

// function a(numberOne) {
//   var count = numberOne;
//   return function b(numberTwo) {
//     if (numberTwo === undefined) {
//       return count;
//     } else {
//       count += numberTwo;
//       return b;
//     }
//   }
// }
// console.log(a(1)(12)())

// const SERVER_URL = "/server";
// let xhr = new XMLHttpRequest();
// xhr.upen("GET", SERVER_URL, true);
// xhr.onreadystatechange = function() {
//   if (this.readyState !== 4) return;
//   if (this.status === 200) {
//     handle(this.response);
//   } else {
//     console.error(this.statusText);
//   }
// };
// xhr.onerror = function() {
//   console.error(this.statusText);
// };
// xhr.responseType = "json";
// xhr.setRequestHeader("Accept", "application/json");
// xhr.send(null);

// function getJson(url) {
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.send(null);
//   });
//   return promise;
// }

// function shallowCopy(object) {
//   if (!object || typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj = object[key];
//     }
//   }
//   return newObj;
// }

// function deepCopy(object) {
//   if (!object || typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       newObj = typeof object[key] === "object"
//       ? deepCopy(object)
//       : object[key];
//     }
//   }
//   return newObj;
// }

// function debounce(fn, delay) {
//   let timer = null;
//   return function() {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(fn, delay);
//   }
// }

// function throttle(fn, delay) {
//   let valid = true;
//   return function() {
//     if (!valid) return false;
//     valid = fasle;
//     setTimeout(() => {
//       fn();
//       valid = true;
//     }, delay)
//   }
// }

// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   var self = this;
//   this.state = PENDING;
//   this.value = null;
//   this.resolvedCallbacks = [];
//   this.rejectedCallbacks = [];
//   function resolve(value) {
//     if (value instanceof MyPromise) {
//       return value.then(resolve, reject);
//     }
//     setTimeout(() => {
//       if (self.state === PENDING) {
//           self.state = RESOLVED;
//           self.value = value;
//           self.resolvedCallbacks.forEach(callbacks => {
//             callbacks(value);
//           })
//       }
//     }, 0);
//   }
//   function reject(value) {
//     setTimeous(() => {
//       if (self.state === PENDING) {
//         self.state = REJECTED;
//         self.value = value;
//         self.rejectedCallbacks.forEach(callbacks => {
//           callback(value);
//         })
//       }
//     }, 0)
//   }
//   try {
//     fn(resolve, reject)
//   } catch(e) {
//     reject(e);
//   }
// }
// MyPromise.prototype.then = function(onResolved, onRejected) {
//   onREsolved = 
//   typeof onResolved === "function"
//   ? onResolved
//   : function(value) {
//     return value;
//   };
//   onRejected = 
//   typeof onRejected === "function"
//   ? onRejected
//   : function(error) {
//     throw error;
//   };
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }

// Array.prototype.MyMap = function(fn, callbackThis) {
//   let res = [];
//   let CBThis = callbackThis || null;
//   this.reduce((before, after, idx, arr) => {
//     res.push(fn.call(CBThis, after, idx, arr));
//   },null);
//   return res;
// }


// Function.prototype.myCall = function(context) {
//   if (typeof this !== "function") {
//     console.error("type error");
//   }
//   let args = [...arguments].slice(1);
//   result = null;
//   context = context || null;
//   context.fn = this;
//   result = context.fn(...args);
//   delete context.fn;
//   return result;
// }

// Function.prototype.myApply = function(context) {
//   if (typeof this !== "function") {
//     throw new TypeError;
//   }
//   let result = null;
//   context = context || window;
//   context.fn = this;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// }

// Function.prototype.myBind(context) = function() {
//   if (typeof this !== "function") {
//       throw new TypeError;
//   }
//   var args = [...arguments].slice(1);
//   fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? this : context,
//       args.concat(...arguments)
//     );
//   }

// }

// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

// function add() {
//     // 第一次执行时，定义一个数组专门用来存储所有的参数
//     var _args = Array.prototype.slice.call(arguments);

//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var _adder = function() {
//         _args.push(...arguments);
//         return _adder;
//     };

//     // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//     _adder.toString = function () {
//         return _args.reduce(function (a, b) {
//             return a + b;
//         });
//     }
//     return _adder;
// }

// add(1)(2)(3)                // 6
// add(1, 2, 3)(4)             // 10
// add(1)(2)(3)(4)(5)          // 15
// add(2, 6)(1)                // 9


// function createPerson(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     console.log(this.name);
//   };
//   return o;
// }
// var person1 = createPerson("Nicholas", 29, "SoftWare Engineer");
// var person2 = createPerson("Jack", 20, "Doctor");



// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   };
// }

// var person1 = new PerformanceResourceTiming("Nicholas", 29, "Doctor");



// function Person() {
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "SoftWare Enginner";
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// var person1 = new Person();
// person1.sayName();

// function Person(name, age, job) {
//   this.name = name;
//   this.age =age;
//   this.job = job;
//   this.friens = ['a', 'b', 'c'];
// }
// Person.prototype = {
//   constructor: Person,
//   sayName: function() {
//     console.log(this.name);
//   }
// }
// var person1 = new Person("Nicholas", 29, "software engineer");

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   if (typeof this.sayName !== "function") {
//     Person.prototype.sayName = function() {
//       console.log(this.name);
//       }
//   }
// }
// var friend = new Person("Nicholas", 29, "SoftWare Enginner");

// function Person(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function() {
//     console.log(name);
//   };
//   return o;
// }
// var person1 = Person("Nicholas", 29, "SoftWare Engineer");

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// }
// function SubType() {
//   this.subproperty = false;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }
// var isntance = new SubType();
// console.log(instance.getSuperValue());

// function SuperType() {
//   this.colors = ['red', 'green', 'blue'];
// }
// function SubType() {
//   SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors);

// function SuperType(name) {
//   this.name = name;
// }
// function SubType() {
//   SuperType.call(this, "Nicholas");
//   this.age = 29;
// }
// function SuperType(name) {
//   this.name = name;
//   this.colors = ['red', 'green', 'blue'];
// }

// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }
// var instance1 = new SubType("Nicholas", 29);

// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// var person = {
//   name: "Nicholas",
//   friends: ['a', 'b', 'c']
// }
// var person1 = object(person);
// person1.name = "Greg";
// person1.friends.push("Rob");
// var person2 = object(person);
// person2.friends.push("Bar");
// console.log(person.friends);

// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// function CreateAnother(original) {
//   var clone = object(original);
//   clone.sayHi = function() {
//     console.log('hi');
//   };
//   return clone;
// }
// var person = {
//   name: "Nicholas",
//   friends: ["a", "b", "c"]
// }
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi();

// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// function inheritPrototype(subType, superType) {
//   var prototype = object(superType.prototype);
//   prototype.constructor = subType;
//   subType.prototype = prototype;
// }

// function SuperType(name) {
//   this.name = name;
//   this.colors = ['red', 'green', 'blue'];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age =age;
// }
// inheritPrototype(SubtYpe, SuperType);
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }

// console.log(Math.pow(1.2, 20));

// function randomSort(a, b) {
//   return Math.random() > 0.5 ? -1 : 1;
// }

// function randomSort(arr) {
//   var res = [];
//   while(arr.length > 0) {
//     var randomIndex = Math.floor(Math.random() * arr.length);
//     res.push(arr[randomIndex]);
//     arr.splice(randomIndex, 1);
//   }
//   return res;
// }

// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }
// function inheritPrototype(subType, SuperType) {
//   var prototype = SuperType.prototype;
//   prototype.constructor = subType;
//   subType.prototype = prototype;
// }
// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
//   console.log(this.name);
// }
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// inheritPrototype(subType, SuperType);
// subType.prototype.sayAge = function() {
//   console.log(this.age);
// }

// function myInstanceof(duixiang, gouzao) {
//   let proto = Object.getPrototypeOf(duixiang);
//   let prototype = gouzao.prototype;
//   while(true) {
//     if(!proto) return false;
//     if (proto === prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   }
// }

// function objectFactory() {
//   let newObject = null,
//     constructor = Array.prototype.shift.call(arguments),// 取得第一个参数即构造函数
//     result = null;

//   // 参数判断
//   if (typeof constructor !== "function") {
//     console.error("type error");
//     return;
//   }

//   // 新建一个空对象，对象的原型为构造函数的 prototype 对象
//   newObject = Object.create(constructor.prototype);

//   // 将 this 指向新建对象，并执行函数
//   result = constructor.apply(newObject, arguments);

//   // 判断返回对象
//   let flag =
//     result && (typeof result === "object" || typeof result === "function");

//   // 判断返回结果
//   return flag ? result : newObject;
// }

// // 使用方法
// // objectFactory(构造函数, 初始化参数);
// function objectFactory() {
//   let newObj = null,
//   Constructor = Array.prototype.shift.call(arguments),
//   result = null;
//   // 参数判断
//   if(typeof Constructor !== "function") return false;
//   // 新建一个空对象，对象的原型指向构造函数的原型
//   newObj = Object.create(Constructor.prototype);
//   // 将this指向新建对象并执行构造函数代码
//   result = Constructor.apply(newObj, arguments);
//   // 判断返回对象
//   let flag = result && (typeof result === "object" || typeof result === "function");
//   return flag ? result : newObj;
// }
// // 使用方法
// // objectFactory(构造函数， 初始化参数)

// 1.新建一个空对象
// 2.将空对象的prototype指向构造函数的原型
// 3.将构造函数的this指向新对象并执行构造函数代码初始化新对象
// 4.如果是引用类型直接返回，否则返回新对象
// function objectFactory() {
//   let newObj = null,
//   Constructor = Array.prototype.shift.call(arguments),
//   res = null;
//   if (typeof Constructor !== "function") return false;
//   newObj = Object.create(Constructor.prototype);
//   res = Constructor.apply(newObj, arguments);
//   return res && (typeof res === "object" || typeof res === "function") ? res : newObj;
// }

// function objectFactory() {
//   let newObj = null,
//   Constructor = Array.prototype.shift.call(arguments),
//   res = null;
//   if (typeof Constructor !== "function") return false;
//   newObj = Object.create(Constructor.prototype);
//   res = Constructor.apply(newObj, arguments);
//   return res && (typeof res === "object" || typeof res === "function") ? res : newObj;
// }
// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return new F();
// }



// function getJson(url) {
//   let promise = new Promise(function (resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.send(null);
//   })
//   return promise;
// }

// function getJson(url) {
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return false;
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }
//     xhr.response = "json";
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.send(null);
//   })
//   return promise;
// }

// define(function(require, exports, module) {
//   var a = require("./a");
//   a.doSomething();
//   // xxx
//   var b = require("./b");
//   b/doSomething();
// })

// define(["./a", "./b"], function(a, b) {
//   a.doSomething();
//   b.doSomething();
// })


// function debounce(fn ,delay) {
//   let timer = null;
//   return function() {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(fn, delay);
//   }
// }

// function throttle(fn, delay) {
//   let valid = true;
//   return function() {
//     if (!valid) {
//       return false;
//     }
//     valid = false;
//     setTimeout(() => {
//       fn();
//       valid = true;
//     }, delay)
//   }
// }


// function shallowCopy(object) {
//   if (!object ||typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnproperty(key)) {
//       newObj[key] = object[key];
//     }
//   }
//   return newObj;
// }

// function deepCopy(object) {
//   if (!object ||typeof object !== "object") return;
//   let newObj = Array.isArray(object) ? [] : {};
//   for (let key in object) {
//     if (object.hasOwnproperty(key)) {
//       typeof newObj[key] === "object"
//       ? deepCopy(newObj[key])
//       : object[key]
//     }
//   }
//   return newObj;
// }

// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";

// function MyPromsie(fn) {
//   var self = this;
//   this.state = PENDING;
//   this.value = null;
//   this.resolvedCallbacks = [];
//   this.rejectedCallbacks = [];
//   function resolve(value) {
//     if (vlaue instanceof MyPromsie) {
//       return value.then(resolve, reject);
//     }
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = RESOLVED;
//         self.value = value;
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0)
//   }
//   function reject(value) {
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = REJECTED;
//         self.value = value;
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0)
//   }
//   try {
//     fn(resolve, reject)
//   } catch(e) {
//     reject(e);
//   }
// }
// MyPromsie.prototype.then = function(onResolved, onRejected) {
//   onResolved = 
//    typeof onResolved === "function"
//    ? onResolved
//    : function(value) {
//      return value;
//    }
//    onRejected = 
//    typeof onRejected === "function"
//    ? onRejected
//    : function(error) {
//      throw error;
//    }
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   } 
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// } 


// for (var i = 0; i < 5; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }


// class Modal {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Modal.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Modal(name);
//     }
//     return instance;
//   }
// })()
// let a = Modal.create('aaa')
// let b = Modal.create('bbb');

// class Modal {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
  
// }
// Modal.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Modal(name);
//     }
//     return instance;
//   }
// })();
// let a = Modal.create('aaa');
// let b = Modal.create('bbb');

// console.log(a,b)

// class Subject {
//   constructor() {
//     this.message = '暂未通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update())
//   }
//   attch(observer) {
//     this.observers.push(observer);
//   }
// }
// class Observer {
//   constructor (name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attch(this);
//   }
//   update() {
//     console.log(`${this.name}收到通知：${this.message.getMessage()}`);
//   }
// }

// let message = new Subject();
// let a = new Observer("zhangsan", message);
// let b = new Observer("lisi", message);
// message.setMessage("明天上班");
// message.setMessage("后天加班");


// var reserverList = function(headA) {
//   let new_head = null;
//   while(headA) {
//     let temp = headA;
//     headA = headA.next;
//     temp.next = new_head;
//     new_head = temp;
//   }
//   return new_head;
// }

// function getIntersectionNode(headA, headB) {
//   let l1 = headA;
//   let l2 = headB;
//   while(l1 !== l2) {
//     l1 = l1 === null ? headB : l1.next;
//     l2 = l2 === null ? headA : l2.next;
//   }
//   return l1;
// }
// function mergeTwoLists(l1, l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l2.next, l1);
//     return l2;
//   }
// }

// function mergeTwoLists(l1, l2) {
//   const prehead = new ListNode(-1);
//   let prev = prehead;
//   while(l1 !== null && l2 !== null) {
//     if (l1.val <= l2.val) {
//       prev.next = l1;
//       l1 = l1.next;
//     } else {
//       prev.next = l1;
//       l2 = l2.next;
//     }
//     prev = prev.next;
//   }
//   prev.next = l1 === null ? l2 : l1;
//   return prehead.next;
// }

// function hasCycle(head) {
//   if (!head || !head.next) return false;
//   let slow = head;
//   let fast = head.next;
//   while(slow !== fast) {
//     if (!fast || !fast.next) return false;
//     slow = slow.next;
//     fast = fast.next;
//   }
//   return true;
// }

// function deleteDuplicates(head) {
//   let cur = head;
//   while(cur && cur.next) {
//     if (cur.val === cur.next.val) {
//       cur.next = cur.next.next;
//     } else {
//       cur = cur.next;
//     }
//   }
//   return head;
// }

// function removeNthFromEnd(head, n) {
//   let [fast, slow] = [head, head];
//   while(--n) {
//     fast = fast.next;
//   }
//   if (!fast.next) return head.next;
//   fast = fast.next;
//   while(fast && fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }
//   slow.next = slow.next.next;
//   return head;
// }
// function swapPairs(head) {
//   if (!head || !head.next) {
//     return head;
//   }
//   let newHead = head.next;
//   head.next = swapPairs(newHead.next);
//   newHead.next = head;
//   return newHead;
// }

// function addTwoNumbers(l1, l2) {
//   const stack1 = [];
//   const stack2 = [];
//   const stack = [];
//   let [cur1, cu2, carry] = [l1, l2, 0];
//   while(cur1) {
//     stack1.push(cur1.val);
//     cur1 = cur1.next;
//   }
//   while(cur2) {
//     stack2.push(cur2.val);
//     cur2 = cu2.next;
//   }
//   let [a, b] = [null, null];
//   while( stack1.length || stack2.length) {
//     a = Number(stack1.pop()) || 0;
//     b = Number(stack2.pop()) || 0;
//     stack.push((a + b + carry) % 10);
//     if ((a + b + carry) > 10) {
//       carry = 1;
//     } else {
//       carry = 0;
//     }
//   }
//   if (carry === 1) {
//     stack.push(carry);
//   }
//   const dummy = {};
//   let current = dummy;
//   while(stack.length) {
//     current.next = {
//       val : stack.pop(),
//       next: null
//     }
//     current = current.next;
//   }
//   return dummy.next;
// }

// function isPalindrome(head) {
//   let [low, fast] = [head, head];
//   if (!head || !head.next) return true;
//   let values = [];
//   while(fast && fast.next) {
//     values.push(low.val);
//     fast = fast.next.next;
//     low = low.next;
//   }
//   if (fast) {
//     low = low.next;
//   }
//   while(low) {
//     let curVal = values.pop();
//     if (curVal !== low.val) {
//       return false;
//     }
//     low = low.next;
//   }
//   return true;
// }

// function moveZeros(nums) {
//   let index = 0;
//   for (let num in nums) {
//     if (nums[num] !== 0) {
//       nums[index++] = nums[num];
//     }
//   }
//   while(index < nums.length) {
//     nums[index++] = 0;
//   }
//   return nums;
// }

// function matrixReshape(nums, r, c) {
//   let m = nums.length, n = nums[0].length;
//   if (m * n !== R * c) {
//     return nums;
//   }
//   let res = [];
//   let arr = [];
//   for (let num of nums) {
//     arr.push(...num);
//   }
//   for (let i = 0; i < r; i++) {
//     res.push(arr.splice(0, c));
//   }
//   return res;
// }

// function quick_sort(arr, l ,r) {
//   let i =l, j =r;
//   if (l >= r) return;
//   let key = arr[i];
//   while(i < j) {
//     while(i < j && arr[j] >= key) {
//       j--;
//     }
//     if (i < j) {
//       arr[i] = arr[j];
//     }
//     while(i < j && arr[i] <= key) {
//       i++;
//     }
//     if (i < j) {
//       arr[j] = arr[i];
//     }
//   }
//   arr[i] = key;
//   quick_sort(arr, l, i-1);
//   quick_sort(arr, i+1, r);
// }


// function createPerson(name, age, job) {
//   var o = new Object();
//   o.name = name;
//   o.age = age;
//   o. job = job;
//   o.sayName = function() {
//     console.log(this.name);
//   }
//   return o;
// }
// var person1 = createPerson("Greg", 27, "docotor");

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function() {
//     console.log(this.name);
//   }
// }
// var person2 = new Person("Nicholas", 29, "SoftWare Engineer");

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function() {
//   console.log(this.name);
// }
// var person1 = new Person();
// person1.sayName();


// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.friends = ["a", "b"];
// }
// Person.prototype.sayName = function() {
//   console.log(this.name);
// }

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   if (typeof this.sayName != "function") {
//     Person.prototype.sayName = function() {
//       console.log(this.name);
//     }
//   }
// }

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// }
// function SubType() {
//   this.subproperty = false;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue());


// function SuperType() {
//   this.colors = ["a", "b"];
// }
// function SubType() {
//   SuperType.call(this);
// }
// var instance = new SubType();
// instance.colors.push("black");


// function SuperType(name) {
//   this.name =name;
//   this.colors = ["a","b"];
// }
// SuperType.prototype.sayName = funciton() {
//   console.log(this.name);
// }
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function() {
//   console.log(this.age);
// }

// function object(o) {
//   function F() {};
//   F.prototype = o;
//   return  new F();
// }

// var person = {
//   name: "Nick",
//   Firends: ["a", "b"]
// }
// var anotherPerson = object(person);

// function inheritPrototype(subType, superType) {
//   var prototype = object(superType.property);
//   prototype.constructor = subType;
//   subType.prototype = prototype;
// }

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//   return this.property;
// }
// function SubType() {
//   this.subproperty = false;
// }
// inheritPrototype(SubType, SuperType);
// SubType.prototype.getSubValue = function() {
//   return this.subproperty;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue());

// class Modal {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Modal.create =(function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       instance = new Modal(name);
//     }
//     return instance;
//   }
// })();
// let a = Modal.create('aaa')
// let b = Modal.create('bbb')



// class Modal {
//   constructor(name) {
//     this.name = name;
//     this.getName();
//   }
//   getName() {
//     return this.name;
//   }
// }
// Modal.create = (function() {
//   let instance = null;
//   return function(name) {
//     if (!instance) {
//       isntance = new Modal(name);
//     }
//     return isntance;
//   }
// })();

// let a = Modal.create('aaa');
// let b = Modal.create('bbb');


// class Subject {
//   constructor() {
//     this.message = '暂无通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update())
//   }
//   attach(observer) {
//     this.observers.push(observer);
//   }
// }
// class Observer {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attch(this);
//   }
//   update() {
//     console.log(`${this.name}:收到通知${this.message.getMessage()}`)
//   }
// }

// let message = new Subject();
// let a = new Observer("zhang", message);
// let b = new Observer('wang', message);




// class Subject {
//   constructor() {
//     this.message = '暂无通知';
//     this.observers = [];
//   }
//   getMessage() {
//     return this.message;
//   }
//   setMessage(message) {
//     this.message = message;
//     this.notifyAllObservers();
//   }
//   notifyAllObservers() {
//     this.observers.forEach(observer => observer.update())
//   }
//   attach(observer) {
//     this.observers.push(observer)
//   }
// }
// class Observer {
//   constructor(name, message) {
//     this.name = name;
//     this.message = message;
//     this.message.attach(this);
//   }
//   update() {
//     console.log(`${this.name}收到通知：${this.message.getMessage()}`)
//   }
// }

// let subject = new Subject();
// let a = new Observer('张三', subject);
// let b = new Observer('李四', subject);
// subject.setMessage('明天加班')


// function getJson(url) {
//   let promise = new Promise(function(resolve, reject) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = function() {
//       if (this.readyState !== 4) return;
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText))
//       }
//     }
//     xhr.onerror = function() {
//       reject(new Error(this.statusText));
//     }
//     xhr.responseType = "json";
//     xhr.setRequestHeader("Accept", "applicaiton/json")
//     xhr.send(null);
//   })
//   return promise;
// }


// function shallowCopy(object) {
//   if (!object || typeof object !== 'function') return false;
//   let newObj = Array.isArray(object) ? [] : [];
//   for (let key in  object) {
//     if (object.hasOwnproperty(object[key])) {
//       newObj[key] = object[key]
//     }
//   }
//   return newObj;
// }

// function deepCopy(object) {
//   if (!object || typeof object !== 'function') return false;
//   let newObj = Array.isArray(object) ? [] : [];
//   for (let key in  object) {
//     if (object.hasOwnproperty(object[key])) {
//       typeof newObj[key] === "object"
//       ? deepCopy(object[key])
//       : object[key]
//     }
//   }
//   return newObj;
// }

// function debounce(fn, delay) {
//   let timer = null;
//   return function() {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(fn, delay);

//   }
// }

// function throttle(fn, delay) {
//   let valid = true;
//   return function() {
//     if (!valid) {
//       return false;
//     }
//     valid = false;
//     setTimeout(() => {
//       fn();
//       valid = false;
//     }, delay)
//   }
// }
// 裁剪到1以后的
// var str = [1,2,3];
// console.log(str.slice(1));

// Function.prototype.myCall = funciton(context) {
//   if (typeof this !== 'function') {
//     console.log("type error");
//   }
//   let args = [...arguments].slice(1);
//   result = null;
//   context = context || window;
//   context.fn = this;
//   result = context.fn(...args);
//   delete context.fn;
//   return result;
// }

// const PENDING = "pending";
// const RESOLVED = "resolved";
// const REJECTED = "rejected";
// function MyPromise(fn) {
//   var self = this;
//   this.state = PENDING;
//   this.value = null;
//   this.resolvedCallbacks = [];
//   this.rejectedCallbacks = [];
//   function resolve(value) {
//     if (typeof value === "MyPromise") {
//       return value.then(resolve, reject)
//     }
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = RESOLVED;
//         self.value = value;
//         self.resolvedCallbacks.forEach(callback => {
//           callback(value)
//         })
//       }
//     }, 0);
//   }
//   function reject(value) {
//     setTimeout(() => {
//       if (self.state === PENDING) {
//         self.state = REJECTED;
//         self.value = value;
//         self.rejectedCallbacks.forEach(callback => {
//           callback(value);
//         })
//       }
//     }, 0);
//   }
//   try {
//     fn(resolve, reject);
//   } catch(e) {
//     reject(e);
//   }
// }

// MyPromise.then = function(onResolved, onRejected) {
//   onResolved = 
//   typeof onResolved === "function"
//   ? onResolved
//   : function(value) {
//     return value;
//   }
//   onRejected =
//   typeof onRejected === "function"
//   ? onRejected
//   : function(error) {
//     throw error;
//   }
//   if (this.state === PENDING) {
//     this.resolvedCallbacks.push(onResolved);
//     this.rejectedCallbacks.push(onRejected);
//   }
//   if (this.state === RESOLVED) {
//     onResolved(this.value);
//   }
//   if (this.state === REJECTED) {
//     onRejected(this.value);
//   }
// }

// 数组flat()方法的实现，展开在递归下去，知道最底层，然后逐一向上连接
// function flatten() {
//   return [].concate(Array.map(item => [].concat(item, ...flatten(item.subitems))))
// }

// function quick_sort(arr, l ,r) {
//   let i = l, j =r;
//   let key = arr[i];
//   if (l > r) return;
//   while(i < j) {
//     while(i < j && arr[j] > key) {
//       j--;
//     }
//     if (i < j) {
//       arr[i] = arr[j];
//     }
//     while(i < j && arr[i] <= key) {
//       arr[j] = arr[i];
//     }
//   }
//   arr[i] = key;
//   quick_sort(arr, l, i-1);
//   quick_sort(arr, i+1, r);
// }

/*20201030滴滴耻辱史
/* 
/**
* 实现一个 useRetryable 方法
* @param {Function} fn 任意一个 JavaScript 函数
* @param {number} n 可重试的次数
* @return {Function} 带有重试功能的新函数
*/

/**
* 当调用 retryableFn 时，它的调用方式要与原始函数（即fn）保持一致。同时还具备重试功能：
* 1、如果 n 次内执行失败，进行重试；
* 2、一旦执行成功，就不再执行多余的次数了；
* 3、如果 n 次全部失败，抛出最后一次的异常。
*/
// function useRetryable(fn, n) {
  
//   return function(n) {
//    let i =n;
//   while(i) {
//   try {
  	
   
//   } catch(e) {
//   	i--
//     if (i === 0) {
//     throw Error
//     }
//   }
  
//  }
//   }
 
// }
// const retryableFn = useRetryable(fn, 3)


// fn = (a,b) => a+b
/**
* 当调用 retryableFn 时，它的调用方式要与原始函数（即fn）保持一致。同时还具备重试功能：
* 1、如果 n 次内执行失败，进行重试；
* 2、一旦执行成功，就不再执行多余的次数了；
* 3、如果 n 次全部失败，抛出最后一次的异常。
*/
// 3 = retryableFn(1, 2)

//  function (1,2) {
// 	let n = 1;
// return  function(n) {
//   	x+y
//   }
  
// function add1(m, n) {
//   let i = m, j = n;
//   return function() {
//      i+j;
//   }
// }

/*

class Emitter {
  constructor() {
  	this.callbacks = {}
  }
  
  on(name, callback) {	
    let callbacks = this.callbacks[name]
    if (!callbacks) {
      callbacks = []
    }
    callbacks.push(callback)
  	this.callbacks[name] = callbacks
    return () => {
      let callbacks = this.callbacks[name]
      const index = callbacks.indexOf(callback)
      callbacks.splice(index, 1)
    }
  }
  
  fire(name, data) {
  	const callbacks = this.callbacks[name]
    if (callbacks) {
      for (let callback in callbacks) {
        callback(data)
      }
    }
  }
  
}

const emitter = new Emitter()
const dispose = emitter.on('click', (data) => console.log(data)) // {a: 1}
emitter.fire('click', { a: 1})
dispose()
  
class Subject() {
constructor() {
	this.message = '暂无通知'
  this.observers = []
}
  
  setMessage(message) {
  	this.message = message;
    this.notifyAllObservers();
  }
  
  getMessage() {
  	return this.message;
  }
  
  notifyAllObserver() {
  	this.observers.forEach(observer => observer.update())
  }
  
  attach(observer) {
  	this.observers.push(observer)
  }
  
}

class Observer {
	constructor(name, message) {
  	this.name = name;
    this.message.attach(this)
    
  }
  update() {
  	console.log(`${this.name}收到通知${this.message.getMessage()}`)
  }
}

let subject = new Subject()


function SuperType() {

}

SuperType.prototype  = {
	friends: ['a', 'b']
}

function SubType() {}
SubType.prototype = new SuperType()

const sub = SubType()
sub.prototype.friends.push('c')


function SuperType(name) {
	this.name = name;
}

function SubType() {
	SubperType.call(this, name);
}


*/

// node --v8-options | grap harmony
// node --v8-options | findstr harmony

// Input.map(item => item + 1)

// imput.map(function(item) {
//   return item + 1;
// })

// npm install --save-dev @babel/core

// npm install --save-dev @babel/preset-env
// npm install --save-dev @babel/preset-react

// {
//   "preset" : [
//     "@babel/env",
//     "@babel/react"
//   ],
//   "plugins" : []
// }

// npm isntall --save-dev @babel/cli
// npx babel example.js
// npx babel example.js --out-file compiled.js
// npx babel example.js -o compiled.js
// npx babel src --out-dir lib
// npx babel src -d lib
// npx babel src -d lib -s

// npm install --save-dev @babel/node
// npx babel-node
// > (x => x* 2)(1)

// es6.js里面
// console.log((x => x* 2)(1))
// npx babel-node es6.js

// npm isntall --save-dev @babel/register
// // index.js
// require('@babel/register')
// require('./es6.js')
// node index.js

// npm install --save-dev core.js regenerator-runtime
// import 'core.js'
// import 'regenerator-runtime/runtime'
// // 或者
// require('core-js')
// require('regenerator-runtime/runtime')


