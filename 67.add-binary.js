/**
 * https://leetcode-cn.com/problems/add-binary/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let length = Math.max(a.length,b.length)
    if(a.length < length){
        let _length = length - a.length
        for(let i = 0;i <_length;i++){
           a = '0' + a
        }
    }
    if(b.length < length){
        let _length = length - b.length
        for(let i = 0;i < _length;i++){
            b = '0' + b
        }
    }
    let resultArr = []
    let plus = false
    for(let i = length - 1;i >= 0;i-- ){
        let _value = (a[i] ? Number(a[i]) : 0) + (b[i] ? Number(b[i]) : 0)
        if(plus){
            _value ++
        }
        if( _value > 1 ){
            plus = true
            resultArr.unshift(_value % 2)
        }
        else {
            plus = false
            resultArr.unshift(_value)
        }
    }
    if(plus){
        resultArr.unshift(1)
    }
    return  resultArr.join('')
};
console.log(addBinary('1','111'))
