/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr = [];
    let jinwei = 0;
    let arr1 = Array(digits.length).fill(0);
    arr1[arr1.length-1] = 1;
    for(let i = digits.length-1;i>=0;i--){
        const {shiwei,geiwei} = sum(digits[i],arr1[i],jinwei);
        jinwei = shiwei>0?1:0;
        arr.unshift(geiwei)
    }
    jinwei>0?arr.unshift(jinwei):'';
    return arr;
};
function sum(a,b,c) {
    let sum = Number(a) + Number(b) +Number(c)
    return sum > 9? {shiwei:parseInt(sum/10),geiwei:sum%10}:{shiwei:0,geiwei:sum}
}
// @lc code=end

