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
// cookie可以解决上面问题，服务器如果徐涛记录该用户状态，就使用response向客户端办法一个cookie，
// 当客户端会把cookie保存起来，需要请求时，将请求网址和cookie一同提交给服务器，服务器进行辨认。

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

function NumberFind(arr) {
    var len = arr.length;
    var res = -1;
    if (len > 1) {
        res = arr[0];
        for (let i = 0; i < len; i++) {
            res = res ^ arr[i];
        }
    }
    return res;
}

arr = [1,1,2,3,2,3,4,4,6];
console.log(NumberFind(arr));