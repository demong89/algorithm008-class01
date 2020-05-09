/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (60.15%)
 * Likes:    335
 * Dislikes: 0
 * Total Accepted:    71.4K
 * Total Submissions: 116.2K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').sort().join('')
        if (map.has(str)) {
            let tmp =  map.get(str)
            tmp.push(strs[i])
            map.set(str,tmp)
        }else{
            map.set(str,[strs[i]])
        }
    }
    return [...map.values()]
};

// @lc code=end

