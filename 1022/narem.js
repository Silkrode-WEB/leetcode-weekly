/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumRootToLeaf = function(root) {
  let result = 0;
  function path(node, list = []) {
    const newList = [...list, node.val]
    if (node.left === null & node.right === null) {
      result += (parseInt(newList.join(''), 2))
      return null;
    }
    if (node.left) path(node.left, newList);
    if (node.right) path(node.right, newList);
  }
  path(root)
  return result;
};
// @lc code=end

