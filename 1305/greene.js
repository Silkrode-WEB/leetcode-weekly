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
function dfs(node, arr = []) {
  if (node === null) return arr;
  if (node.left !== null) dfs(node.left, arr);
  arr.push(node.val);
  if (node.right !== null) dfs(node.right, arr);
  return arr;
}
var getAllElements = function (root1, root2) {
  const [arr1, arr2] = [dfs(root1), dfs(root2)];
  return arr1.concat(arr2).sort((a, b) => a - b)
};