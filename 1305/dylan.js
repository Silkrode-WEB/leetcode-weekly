/*
 * @lc app=leetcode id=1305 lang=javascript
 *
 * [1305] All Elements in Two Binary Search Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  function helper(root, arr) {
      if (root === null) return
      helper(root.left, arr)
      arr.push(root.val)
      helper(root.right, arr)
  }
  const arr1 = [], arr2 = []
  helper(root1, arr1)
  helper(root2, arr2)
  return arr1.concat(arr2).sort((a, b) => a - b )
};
