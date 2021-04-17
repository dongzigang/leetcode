/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let length = 0
  let prev = head
  while (prev && prev.val !== null){
    length ++
    prev = prev.next
  }
  prev = head
  let index = length - k
  for(let i = 0;i< index; i++){
    prev = prev.next
  }
  return prev
};

// 快慢指针
var getKthFromEnd2 = function(head, k) {
  let count = 0
  let fast = head
  let slow = head
  while (fast && fast.val !== null){
    fast = fast.next
    if(count >= k){
      slow = slow.next
    }
    count ++
  }
  return slow
};
