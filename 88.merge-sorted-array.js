/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.length=m;
  nums2.length=n;
  nums1.push(...nums2);
  let arr=nums1.sort((a,b)=>{
    return a-b;
  })
  return arr
};