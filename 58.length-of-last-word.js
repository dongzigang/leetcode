/**
 * https://leetcode-cn.com/problems/length-of-last-word/submissions/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(s === '') return 0
  let p1 = 0
  let start = false
  for(let i = s.length -1;i>= 0;i--){
    if(s[i] === ' '){
      if(start){
        return p1
      }
    }
    else {
      start = true
      p1 ++
    }
  }
  return p1
};

let s = 'a'
console.log(lengthOfLastWord(s))
