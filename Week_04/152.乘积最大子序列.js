/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (36.59%)
 * Likes:    510
 * Dislikes: 0
 * Total Accepted:    53.1K
 * Total Submissions: 138.1K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    if (!nums.length) return null;

    let max = nums[0], state = [];
    for (let i = 0; i < nums.length; i++) {
        state[i] = []
    }
    state[0][0] = nums[0]
    state[0][1] = nums[0]

    for (let i = 1; i < nums.length; i++) {

        state[i][0] = Math.max(state[i - 1][0] * nums[i], nums[i], state[i - 1][1] * nums[i])
        state[i][1] = Math.min(state[i - 1][1] * nums[i], nums[i], state[i - 1][0] * nums[i])

        if (max < state[i][0]) max = state[i][0]
    }
    return max
};
// @lc code=end

