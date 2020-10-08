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
    // 根據TreeNode定義 根節點不存在 給0
    if(!root){
        return 0;
    }
    // 思路是 總合（total）先為0
    var totalSum = 0;
    getNum(root,0);
    return totalSum;
    
    // 參數node為目前遍歷到的節點 參數currentSum是目前總和
    function getNum(node,currentSum){
        // 因為是二進位制 所以父節點 遇到子節點的時候 total要增加該子節點 父節點就要*2並納入total
        currentSum = node.val + currentSum*2;
        var left = node.left;
        var right = node.right;
        // 沒有左右子節點 不處理
        if(left === null && right === null){
            totalSum += currentSum;
            return;
        }
        // 有左節點 處理左節點
        if(left !== null){
            getNum(node.left,currentSum);
        }
        // 有右節點 處理右節點
        if(right !== null){
            getNum(node.right,currentSum);
        }
    }
};

// leetcode 題目129 Sum Root to Leaf Numbers
// 也是同樣想法 只是改為十進位 所以*2 改為*10