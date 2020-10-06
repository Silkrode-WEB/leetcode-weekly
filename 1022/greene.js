

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
function dfs(node, arr = [], acc = '') {
  if (node === null) return arr;
  acc += node.val
  if (node.left !== null) dfs(node.left, arr, acc);
  if (node.right !== null) dfs(node.right, arr, acc);
  if (node.left === null && node.right === null) arr.push(acc)
  return arr;
}
var sumRootToLeaf = function (root) {
  const binaryArr = dfs(root);
  let ans = 0;
  for (let i = 0; i < binaryArr.length; i++) {
    ans += parseInt(binaryArr[i], 2)
  }
  return ans;
};

