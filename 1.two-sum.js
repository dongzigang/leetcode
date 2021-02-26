/**
 * https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   for(let i = 0;i<nums.length;i++){
//     for(let j = 0;j<nums.length;j++){
//       if(nums[i]+nums[j] === target && i !== j){
//         return [i,j]
//       }
//     }
//   }
// };
var twoSum = function(nums, target) {
  let obj = {}
  nums.forEach((item,index)=>{
    obj[item] = index
  })
  for(let i = 0;i<nums.length;i++){
    if(obj[target - nums[i]] && obj[target - nums[i]] !== i){
        return [i,obj[target - nums[i]]]
    }
  }
};

let nums = [2,7,11,15], target = 9

let result = twoSum(nums,target)

console.log(result)
