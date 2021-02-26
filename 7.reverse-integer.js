/**
 * https://leetcode-cn.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(typeof x !== "number"){
        return
    }
    const flag = x > 0? '':'-'
    const max = Math.pow(2,31) - 1
    const min = Math.pow(-2,31)
    let result = ''
    let _x = Math.abs(x).toString()
    let _xArr = []
    let _xArr_reverse = []
    for(let i = 0;i<_x.length;i++){
        _xArr.push(_x[i])
    }
    _xArr_reverse = _xArr.reverse()
    result = Number(flag + _xArr_reverse.join(''))
    if(result < min || result > max){
        result = 0
    }
    return result
};

let a = -123
console.log(reverse(a))
