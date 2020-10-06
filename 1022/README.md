# Sum of Root To Leaf Binary Numbers

```jsx
/**
 * @param {TreeNode} root 二元搜尋樹
 * @return {Number}
 * 對所有從根節點到葉子節點不重複的路徑，
 * 該路徑上以根節點為二進制位的最高位元，
 * 葉子節點為二進制的最低位元依次排列；
 * 最後以每個路徑表示的二進制位進行加總，並轉成十進制輸出。
*/
```

## TIP

1. 對給定的樹，需要遍歷出所有不重複的路徑（部分節點有可能重複，但整條路徑不能重複）。
2. 二進制轉換十進制。

## Ex

```jsx
// 1
Input: root = [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

// 2
Input: root = [0]
Output: 0

// 3
Input: root = [1]
Output: 1

// 4
Input: root = [1,1]
Output: 3
```