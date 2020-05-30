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
// 然后：如果200ms内没有再次触发，不执行；再次触发，重新计时
// 效果：如果短时间内大量触发，只执行一次
// 实现：既然要有计时，肯定需要setTimeOut函数，还需要一个变量保存计时，考虑维护全局纯净，可以借助闭包实现

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
