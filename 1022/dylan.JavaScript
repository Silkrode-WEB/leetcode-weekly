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
    function helper (node, arr, str) {
        str += node.val
        if (node.left !== null) helper(node.left, arr, str)
        if (node.right !== null) helper(node.right, arr, str)
        if (node.left === null && node.right === null) arr.push(str)
        return arr
    }
    const binaryArr = helper(root, [] , '')
    result = 0
    for (let i = 0; i < binaryArr.length; i++) {
        result += parseInt(binaryArr[i], 2)
    }
    return result
};
