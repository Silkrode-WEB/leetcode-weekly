# All Elements in Two Binary Search Trees

Date: Sep 16, 2020 → Sep 22, 2020
Difficulty: Medium
Link: https://leetcode.com/problems/all-elements-in-two-binary-search-trees/
Question number: 1305
Status: 本週題目

```jsx
/**
 * @param {TreeNode} root1 二元搜尋樹 1
 * @param {TreeNode} root2 二元搜尋樹 2
 * @return {Array<number>}
 * 對兩個二元搜尋樹的 `所有節點` 進行 `升序` 排序，以陣列的方式返回。
 */
```

### TIP

1. 二元搜尋樹以 BFS（廣度優先）來做存儲，中間有不存在的節點可以以 `NULL`表示。
2. 每一個二元搜尋樹最多有 `5000` 個節點。
3. 每一個節點的值的範圍是： `[-10^5, 10^5]` 。

### Example

```jsx
// 1
Input: (root1 = [2, 1, 4]), (root2 = [1, 0, 3])
Output: [0, 1, 1, 2, 3, 4]

// 2
Input: (root1 = [0, -10, 10]), (root2 = [5, 1, 7, 0, 2])
Output: [-10, 0, 0, 1, 2, 5, 7, 10]

// 3
Input: (root1 = []), (root2 = [5, 1, 7, 0, 2])
Output: [0, 1, 2, 5, 7]

// 4
Input: (root1 = [0, -10, 10]), (root2 = [])
Output: [-10, 0, 10]

// 5
Input: (root1 = [1, null, 8]), (root2 = [8, 1])
Output: [1, 1, 8, 8]
```

### 作答

```jsx
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
var getAllElements = function(root1, root2) {}
```
