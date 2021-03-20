/**
 * https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0
    let right = x
    let result = 0
    while(left < right){
        let  mid = left + parseInt((right - left) / 2) || 1
        if(mid * mid === x){
            result = mid
            break
        }
        else if(mid * mid > x ){
            right = mid
        }
        else {
            result = mid
            left = mid + 1
        }
    }
    return result
};

console.log(mySqrt(8))