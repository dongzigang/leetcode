/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 是我太菜了
// var searchInsert = function(nums, target) {
//   for(let i=0;i<nums.length;i++){
//     if(nums[i] >= target){
//       return i
//     }
//   }
//   return nums.length
// };

// 二分查找法
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length
  while (left < right){
    let mid = left + parseInt((right - left) / 2)
    if(nums[mid] >= target){
      right = mid
    }
    else {
      left = mid + 1
    }
  }
  return left;
};



const arr = [1,3,5,6]
const target = 7

console.log(searchInsert(arr,target))
