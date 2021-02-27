/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for(let j = 1; j < nums.length; j++ ){
        if(nums[j] !== nums[i]){
            nums[++i] = nums[j]
        }
    }
    return i+1;
};

let arr = [1,1,2,5,5,6,6,8]
removeDuplicates(arr)
console.log(arr)