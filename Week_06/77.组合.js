/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (72.17%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    49.6K
 * Total Submissions: 67.4K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let subres = [];
    function combineSub(start,subres) {
        if (subres.length == k) {
            res.push(subres.slice(0))
            return
        }
        var len = subres.length;
        for (let i = start; i <= n-(k-len)+1 ; i++) {
            subres.push(i)
            combineSub(i+1,subres)
            subres.pop()
        }
    }
    combineSub(1,subres)
    return res
};
// @lc code=end

