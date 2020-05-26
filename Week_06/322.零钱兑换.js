/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (37.00%)
 * Likes:    601
 * Dislikes: 0
 * Total Accepted:    86.5K
 * Total Submissions: 218.3K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount===0) return 0;
    const dp = Array(amount+1).fill(Number.MAX_VALUE)
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
       for (let j = 0; j < coins.length; j++) {
          if (i-coins[j]>=0) {
              dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
          }
       }
    }
    return dp[dp.length-1] ===Number.MAX_VALUE?-1:dp[dp.length-1]
};
// @lc code=end

