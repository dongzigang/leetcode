/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false
    let result = true
    let str = x.toString()
    let len = str.length
    for(let i = 0;i<len;i++){
        if(i > len - 1) break
        if(str[i] !== str[len - 1 - i]){
            result = false
            break
        }
    }
    return result
};

console.log(isPalindrome(-121))