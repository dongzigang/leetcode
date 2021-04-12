/**
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
  let result = false
  for(let i = 0;i<astr.length;i++){
    for(let j = 0;j<astr.length;j++){
      if(i !== j && astr[i] === astr[j]){
        return  false
      }
    }
  }
  return true
};

var isUnique = function(astr) {
  let set = new Set()
  for(let i = 0;i<astr.length;i++){
    set.add(astr[i])
    if(set.size < i + 1){
      return false
    }
  }
  return true
};
