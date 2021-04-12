/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  if(s1.length !== s2.length) return false
  for(let i = 0;i<s1.length;i++){
    for(let j = s2.length;j >= 0;j--){
      if(s1[i] === s2[j]){
        let re = new RegExp(s2[j])
        s2 = s2.replace(re,'')
        console.log(s2)
        break
      }
    }
  }

  return !s2.length
};

console.log(CheckPermutation('abb','aab'))
