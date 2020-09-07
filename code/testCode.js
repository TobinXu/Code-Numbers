// function twoSum(nums, target) {
//     const map = {};
//     for (let i =0; i < nums.length; i++) {
//       if (map[target - nums[i]] >= 0) {
//         return [map[target - nums[i]], i];
//       }
//       map[nums[i]] = i;
//     }
//   }
  
//   console.log(twoSum([2,7,11,12], 9));
//   console.log('twoSum([2,7,11,12], 9)');

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

// function NumberFind(arr) {
//   let res =-1;
//   if (arr.length >= 1) {
//     for (let i = 1; i < arr.length; i++) {
//       res = res ^ arr[i];
//     }
//   }
//   console.log(res);
// }

// arr = [1,1,2,3,2,3,4,4,6,6,7];
// NumberFind(arr);

// function chicken(headAndfoot) {
//   let str = headAndfoot.split(',');
//   let head = parseInt(str[0]);
//   let foot = parseInt(str[1]);
//   if (head <=1) return false;
//   let too = 0;
//   for (let j = 0; j < head; j++) {
//     too = head - j;
//     if (too * 4 + j * 2 === foot) {
//       console.log(j + ',' + too);
//     }
//   }
// }

// function Fib(n) {
//   if(n<1) {return false;}
//   if(n === 1 || n === 2) return n;
//   // 建立数组
//   let arr = [1,1];
//   for (let i = 2; i < n; i++) {
//       arr[i] = arr[i-1] + arr[i-2];
//   }
//   var k = arr.pop()
//   return k ;
// }

// console.log(Fib(20));



// var moveZeros = function(nums) {
//   let index = 0;
//   for (let num in nums) {
//     if (nums[num] !=0) {
//       nums[index++] = nums[num];
//     }
//   }
//   while (index < nums.length) {
//     nums[index++] = 0;
//   }
//   return nums;
// }

// var nums = [0,1,0,3,12];
// console.log(moveZeros(nums));

// function matrixReshape(nums,r,c) {
//   let m = nums.length, n = nums[0].length;// m行 n列
//   // 判断能否转换
//   if (m * n != r * c) {
//     return nums;
//   }
//   let res = [];
//   let arr = []; 
//   // 先对二维数组降维处理
//   for (let num of nums) {
//     arr.push(...num);
//   }
//   for (let i = 0; i <r; i++) { // r行
//     res.push(arr.splice(0, c)); // 对于处理后的数组arr进行切割，每一项(即每一行)从头切割c列
//   }
//   return res;
// }
// let nums =
// [[1,2],
//  [3,4]],
// r = 1, c = 4;
// console.log(
//   matrixReshape(nums,r,c)); //[ [ 1, 2, 3, 4 ] ]
// function dailyTemperatures(T) {
//     let stack = [];
//     let res = new Array(T.length).fill(0);
//     for (let i = 0; i < T.length; i++) {
//       while(stack.length && T[i] > T[stack[stack.length - 1]]) {
//         let topIdx = stack.pop(); //数组即将要入栈的元素大于栈顶元素，则栈顶弹出
//         res[topIdx] = i - topIdx;
//       }
//       stack.push(i);
//     }
//     return res;
//   }
//   let T =  [73, 74, 75, 71, 69, 72, 76, 73];
//   console.log(dailyTemperatures(T));

