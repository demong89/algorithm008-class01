/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (32.62%)
 * Likes:    539
 * Dislikes: 0
 * Total Accepted:    56.2K
 * Total Submissions: 156.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 示例:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 说明:
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const hash = {}
    const toEnd = (from)=>{
        if (hash[from]) return hash[from]
        if(from === nums.length-1)return 0;
        if(from + nums[from] >= nums.length-1)return 1;
        let min = Infinity;
        for (let i = nums[from]; i > 0 ; i--) {
            min = Math.min(toEnd(from+i),min)
            if (min === 1) break
        }
        hash[from] = min + 1
        return hash[from]
    }
    return toEnd(0)
};
// @lc code=end

