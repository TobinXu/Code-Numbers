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

function twoSum(nums, target) {
  // 构造哈希表
  const map = new Map(); // 存储方式为{值，下标}即{value, index}
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
      let temp = target - nums[i];   
      if (map.has(temp)) {
         return [map.get(temp), i]; 
      } else {
        map.set(nums[i], i );
      }
  }
  console.error("no two sum solution");
};

console.log(twoSum([2, 7, 11, 15], 9));