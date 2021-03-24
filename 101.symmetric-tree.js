/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root){
    return true
  }
  return isSameTree(root.left, root.right)
};

function isSameTree(p,q){
  if(p == null && q == null)
    return true;
  if(p == null || q == null)
    return false;
  if(p.val != q.val)
    return false;
  return isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
}