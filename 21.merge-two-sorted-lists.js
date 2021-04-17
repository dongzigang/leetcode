/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // 使用带头结点的链表解决问题
  // 待输出链表的头部
  let head = new ListNode();

  // 待输出链表的 last 结点
  let last = head;
  while(l1 != null && l2 != null) {
    if(l1.val > l2.val) {
      last.next = l2;
      l2 = l2.next;
    }else{
      last.next = l1;
      l1 = l1.next;
    }
    last = last.next;
  }

  // l1 或 l2 可能还有剩余结点没有合并，
  // 由于从上面的 while 循环中退出， 那么链表 l1 和 l2 至少有一个已经遍历结束
  if(l1 != null) last.next = l1;
  if(l2 != null) last.next = l2;

  return head.next;
};
