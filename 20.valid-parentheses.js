/**
 * https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let _enum = {
        '(':')',
        '[':']',
        '{':'}'
    }
    let stack = []
    for(let i=0;i<s.length;i++){
        let index = s[i]
        if(_enum[index]){
            stack.push(index)
        }
        else {
            if(!stack[0]) return false
            if(_enum[stack[stack.length-1]] === index){
                stack.splice(stack.length-1,1)
            }
            else {
                return false
            }
        }
    }
    return !!!stack[0]
};

let a = "(])"
console.log(isValid(a))