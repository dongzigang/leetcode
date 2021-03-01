/**
 * https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let resultList = [1]
  for(let i = 1; i < n; i++){
    let item = itemHandle(resultList[i-1].toString())
    resultList.push(item)
  }
  return resultList[resultList.length-1].toString()
};
function itemHandle(item){
  let count = 0 //个数
  let value = 0 // 值
  let valueIndex = 0 //下标
  let result = ''
  for(let i = 0; i < item.length; i++){
    if(item[valueIndex] === item[i]){
      value = item[valueIndex]
      count ++
    }
    else {
      result += ''+count+value
      count = 1
      value = item[i]
      valueIndex = i
    }
  }
  result += ''+count+value

  return result
}



countAndSay(4)
