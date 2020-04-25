/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (73.59%)
 * Likes:    654
 * Dislikes: 0
 * Total Accepted:    114.7K
 * Total Submissions: 151.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let list = [];
    backtrack(list, [], nums)
    return list
};
function backtrack(list, temp, nums) {
    if (temp.length == nums.length) {
        return list.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) continue;
        temp.push(nums[i])
        backtrack(list, temp, nums)
        temp.pop()
    }
}
// @lc code=end

