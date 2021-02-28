/**
 * https://leetcode-cn.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 这就没意思了
// var strStr = function(haystack, needle) {
//   return haystack.indexOf(needle)
// };

function strStr(haystack, needle) {
    if(needle === ''){
        return 0
    }
    if(haystack.length < needle.length) return  -1
    let index = -1
    let count = 0
    for(let i=0;i<haystack.length;i++){
        debugger
        if(haystack[i] === needle[count]){
            if(count === 0){
                index = i
            }
            if(count === needle.length-1){
                break
            }
            count ++
        }
        else {
            index = -1
            count = 0
        }
    }

    return index
}

let str = "mississippi"
let needle = "issip"
console.log(strStr(str,needle))
