/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (64.81%)
 * Likes:    1218
 * Dislikes: 0
 * Total Accepted:    191.3K
 * Total Submissions: 284.3K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 说明：
 * 
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 * 
 * 示例 1:
 * 
 * 输入: [2,2,1]
 * 输出: 1
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,1,2,1,2]
 * 输出: 4
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.delete(nums[i])
    //     }else{
    //         map.set(nums[i],1)
    //     }
    // }
    // let res = null;
    // for (const i of map.keys()) {
    //     res = i
    // }
    
    // return res

    let res = 0;
    for (let i  in nums) {
        res ^= nums[i]
    }
    return res;
};
// @lc code=end

