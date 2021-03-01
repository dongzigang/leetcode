/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs[0]) return ''
    let prefix = ''
    let flag = true
    let num = 1
    while(flag){
        if(num === strs[0].length) flag = false
        prefix = strs[0].substring(0,num)
        for(let i = 0;i<strs.length;i++){
            if(!strs[i].startsWith(prefix)){
                flag = false
                prefix = prefix.substring(0,prefix.length-1)
                break
            }
        }
        num += 1
    }
    return prefix
};

let str = ['a']

console.log(longestCommonPrefix(str))
