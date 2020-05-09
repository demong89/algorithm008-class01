/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (71.47%)
 * Likes:    77
 * Dislikes: 0
 * Total Accepted:    25.4K
 * Total Submissions: 34.7K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) { //递归
//     if(!root) return [];
//     let res = [];
//     recusion(root)
//     return res

//     function recusion(root) {
//         if(!root) return;
//         res.push(root.val)
//         for (let i = 0; i < root.children.length; i++) {
//             recusion(root.children[i])
//         }
//     }
// };

// var preorder = function(root,arr=[]) { //递归2
//     if(!root) return arr
//     arr.push(root.val)
//     for (let i = 0; i < root.children.length; i++) {
//         preorder(root.children[i],arr)
//     }
//     return arr
// };

var preorder = function(root) { //迭代
    if(!root) return []
    let res = [],arr =[root]
    while (arr.length) {
        let current = arr.pop();
        res.push(current.val)
        for (let i = current.children.length-1; i >=0; i--) {
           arr.push(current.children[i])
        }
    }
    return res;
};
// @lc code=end

