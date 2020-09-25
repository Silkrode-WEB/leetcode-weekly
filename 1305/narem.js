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
  // 深度優先取得升序陣列
  const dfsFunc = (t, arr = []) => {
    if (t === null) return arr;
    if (t.left !== null) dfsFunc(t.left, arr);
    arr.push(t.val);
    if (t.right !== null) dfsFunc(t.right, arr);
    return arr;
  }
  const [root1Arr, root2Arr] = [dfsFunc(root1, []), dfsFunc(root2, [])];
  let j = k = 0;
  const result = [];
  // 對兩個有序陣列，進行合併排序
  while (j < root1Arr.length || k < root2Arr.length) {
    if (j < root1Arr.length && k < root2Arr.length) {
      result.push(root1Arr[j] < root2Arr[k] ? root1Arr[j++] : root2Arr[k++])
    } else if (j < root1Arr.length) {
      result.push(...root1Arr.splice(j));
      return result;
    } else if (k < root2Arr.length) {
      result.push(...root2Arr.splice(k));
      return result;
    }
  }
  return result;
};
// @lc code=end

