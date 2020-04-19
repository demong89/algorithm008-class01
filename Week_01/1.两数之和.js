/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力破解
    // for (let i = 0; i < nums.length; i++) {
    //   for (let j = i+1; j < nums.length; j++) {
    //      if (nums[i]+nums[j]===target) {
    //          return [i,j]
    //      }
    //   }
    // }
    // 空间换时间
    let temp = []
    for (let i = 0; i < nums.length; i++) {
      let next = target -nums[i];
      if (temp[next]!==undefined) {
        return [temp[next],i]
      }
      temp[nums[i]] = i
    }
  };