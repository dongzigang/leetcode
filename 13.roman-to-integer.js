/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const data = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
    let result = 0
    for(let i=0;i<s.length;i++){
        let index = s[i]
        if(data[index] >= (data[s[i+1]]? data[s[i+1]] : 0 )){
            result += data[index]
        }
        else {
            result -= data[index]
        }
    }
    return result
};

console.log(romanToInt('MCMXCIV'))