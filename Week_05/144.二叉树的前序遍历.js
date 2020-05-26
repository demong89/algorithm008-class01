/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (63.48%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    97.1K
 * Total Submissions: 148.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root,arr=[]) {
    if(root==null) return arr;
    arr.push(root.val)
    preorderTraversal(root.left,arr)
    preorderTraversal(root.right,arr)
    return arr
 };
 // var preorderTraversal = function(root) {
 //   let result = [];
 //   let stack = [];
 //   let cur = root;
 //   while (cur||stack.length>0) {
 //       while (cur) {
 //           result.push(cur.val)
 //           stack.push(cur)
 //           cur = cur.left
 //       }
 //       cur = stack.pop();
 //       cur = cur.right;
 //   }
 //     return result
 // };
 // @lc code=end
 
 