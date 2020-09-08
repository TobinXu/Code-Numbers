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
// function isIn(s1, s2) {
//     let tmp = s1+s1;
//     if (tmp.indexOf(s2) !== -1) {
//       return true;
//     }
//     else
//      return false;
//   }
//   console.log(isIn('AABCD','CDAA'))


// function reverse(s, k) {
//     let tmp1 = s.slice(-k).split("").reverse().join("");
//     console.log(tmp1);
//     let tmp2 =s.slice(0,s.length - k).split("").reverse().join("");
//     console.log(tmp2);
//     let tmp3 = tmp2 + tmp1;
//     return  tmp3.split("").reverse().join("");
// }

// console.log(reverse('abcd123', 3));

// // 给字符串中的单词翻转
// function reverse(s) {
//     let tmp1 = s.split(" ").reverse().join(" ");
//     console.log(tmp1);
  
//     //return  tmp3.split("").reverse().join("");
// }



// let num1 = [1,2,3],num2 = [2,3,4];
// console.log(num1 === num2);
// var str = "aHELLOWORLD";
// console.log(str.charCodeAt(0) - 97);

// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;
//     let counter = new Array(26).fill(0);
//     for (let i = 0; i < s.length; i++) {
//         counter[s.charCodeAt(i) - 97]++;
//         counter[t.charCodeAt(i) - 97]--;
//     }
//     for (let count of counter) {
//         if (count !== 0 )
//             return false;
//     }
//     return true;
// }
// let s = "rat", t = "car";
// console.log(isAnagram(s,t));
// 最长回文数
// function longestPalindrome(s) {
//     let temp = new Set();
//     let sum = 0;
//     s.split("").forEach(c => {
//         if (temp.has(c)) {
//             temp.delete(c);
//             sum += 2;
//         } else {
//             temp.add(c);
//         }
//     })
//     return sum + (temp.size > 0 ? 1 : 0);
// }
// console.log(longestPalindrome('abccccdd'));

// function isIsomorphicHelper(s, t) {
//     let n = s.length;
//     let map = new Map();
//     for (let i = 0; i < n; i++) {
//         let c1 = s.charAt(i);
//         let c2 = t.charAt(i);
//         if (map.has(c1)) {
//             if (map.get(c1) !== c2) {
//                 return  false;
//             }
//         } else {
//             map.set(c1, c2);
//         }
//     }
//     return true;
// }

// function isIsomorphic(s, t) {
//     return isIsomorphicHelper(s, t) && isIsomorphicHelper(t, s);
// }

/*
function isPalindrome (x) {
      // 特殊情况：
    // 如上所述，当 x < 0 时，x 不是回文数。
    // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
    // 则其第一位数字也应该是 0
    // 只有 0 满足这一属性
    if (x < 0 || (x % 10 === 0 && x !==0)) {
        return false;
    }
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
     // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}*/

// function countBinarySubstrings (s) {
//     const counts = [];
//     let ptr = 0, n = s.length;
//     while(ptr < n) {
//         const c = s.charAt(ptr);
//         let count = 0;
//         // 如果连续几个值都相同就不断count++
//         while(ptr < n && s.charAt(ptr) === c) {
//             ++ptr;
//             ++count;
//         }
//         counts.push(count); // 将对应下标的count推入
//     }
//     let ans = 0;
//     for (let i = 1; i < counts.length; i++) {
//         ans += Math.min(counts[i], counts[i - 1]);
//     }
//     return ans;
// }