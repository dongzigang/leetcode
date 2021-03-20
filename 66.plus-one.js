/**
 * https://leetcode-cn.com/problems/plus-one/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let plus = true
    for(let i = digits.length - 1;i >= 0;i--){
        if(plus){
            digits[i] ++
        }
        if(digits[i] > 9){
            plus = true
            digits[i] = digits[i] % 10
        }
        else {
            plus = false
            break
        }
    }
    if(plus){
        digits.unshift(1)
    }
    return digits
};


let digits = [9]
plusOne(digits)
console.log(digits)