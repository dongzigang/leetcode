/**
 * https://leetcode-cn.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let jArr = jewels.split("")
  let count = 0
  for(let i=0;i<stones.length;i++){
    if(jArr.includes(stones[i])){
      count++
    }
  }
  return count
};
