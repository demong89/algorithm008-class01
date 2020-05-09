/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 *
 * https://leetcode-cn.com/problems/minimum-absolute-difference/description/
 *
 * algorithms
 * Easy (64.67%)
 * Likes:    18
 * Dislikes: 0
 * Total Accepted:    7.9K
 * Total Submissions: 11.9K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你个整数数组 arr，其中每个元素都 不相同。
 * 
 * 请你找到所有具有最小绝对差的元素对，并且按升序的顺序返回。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：arr = [4,2,1,3]
 * 输出：[[1,2],[2,3],[3,4]]
 * 
 * 
 * 示例 2：
 * 
 * 输入：arr = [1,3,6,10,15]
 * 输出：[[1,3]]
 * 
 * 
 * 示例 3：
 * 
 * 输入：arr = [3,8,-10,23,19,-4,-14,27]
 * 输出：[[-14,-10],[19,23],[23,27]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 2 <= arr.length <= 10^5
 * -10^6 <= arr[i] <= 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    // 排序  找最小差值 
    arr = arr.sort((a,b)=>a-b)
    let minAbs = Infinity;
    let res = [];
    for (let i = 0; i < arr.length-1; i++) {
        if (Math.abs(arr[i+1]-arr[i]) === minAbs) {
            res.push([arr[i],arr[i+1]])
        }else if (Math.abs(arr[i+1]-arr[i]) < minAbs) {
            minAbs = Math.abs(arr[i+1]-arr[i])
            res = [[arr[i],arr[i+1]]]
        }
    }
    return res
};
// @lc code=end

