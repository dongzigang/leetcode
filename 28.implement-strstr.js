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
    for(let i = 0, b = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[b]) {
            b++;
        } else {
            i -= b;
            b = 0;
        }

        if(b === needle.length) {
            return  i - b + 1;
        }
    }
    return -1;
}

let str = "mississippi"
let needle = "issip"
console.log(strStr(str,needle))
