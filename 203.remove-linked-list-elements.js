function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function(head, val) {
  while(head !== null && head.val === val){
    // head = head.next
    let delNode = head
    head = head.next
    delNode.next = null
  }
  if(head === null) return null

  let prev = head
  while (prev.next !== null){
    if(prev.next.val === val){
      // prev.next = prev.next.next
      let delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
    }
    else {
      prev = prev.next
    }
  }
  return head
}
