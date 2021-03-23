/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
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

console.log(climbStairs(4))
