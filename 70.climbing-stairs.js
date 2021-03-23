/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */

// 递归
var climbStairs1 = function(n) {
  let memo = new Array(n + 1)
  return climbStairsMemo(n, memo)
};

function climbStairsMemo(n, memo) {
  if(memo[n] > 0){
    return memo[n]
  }
  if(n === 1){
    memo[n] = 1
  }
  else if( n === 2){
    memo[n] = 2
  }
  else {
    memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo)
  }
  return  memo[n]
}

// 动态规划

var climbStairs2 = function(n) {
  if(n === 1){
    return 1
  }
  let arr = new Array(n + 1)
  arr[1] = 1
  arr[2] = 2
  for(let i = 3;i<n;i++){
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
};

// 滚动数组（节省空间）

var climbStairs3 = function(n) {
  if(n === 1){
    return 1
  }
  let a = 1
  let b = 2
  for(let i = 3;i<n;i++){
    let c = a + b
    a = b
    b = c
  }
  return b
};
