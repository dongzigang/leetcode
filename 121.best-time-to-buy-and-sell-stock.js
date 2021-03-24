/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
// 会超时
// var maxProfit = function(prices) {
//   let max = 0
//   prices.forEach((item,index)=>{
//     prices.forEach((item2,index2)=>{
//       if(index2 > index){
//         if(max < (item2 - item)){
//           max = item2 - item
//         }
//       }
//     })
//   })
//   return max
// };
var maxProfit = function(prices) {
  let minprice = Number.MAX_SAFE_INTEGER
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minprice) {
      minprice = prices[i];
    } else if (prices[i] - minprice > maxprofit) {
      maxprofit = prices[i] - minprice;
    }
  }
  return maxprofit;
};
let prices = [7,1,5,3,6,4]
maxProfit(prices)
















