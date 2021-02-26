/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''
    let flag = true
    let num = 0
    while(flag){

        for(let i = 0;i<strs.length;i++){
            
        }

        strs.forEach((item)=>{
            if(prefix){
                if(item.startsWith(prefix)){

                }
                else {

                }
            }
            else {
                prefix = item[num]
            }
        })
        num += 1
    }
};