/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 *
 * https://leetcode-cn.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (67.42%)
 * Likes:    347
 * Dislikes: 0
 * Total Accepted:    28.9K
 * Total Submissions: 42.4K
 * Testcase Example:  '4'
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 
 * 
 * 上图为 8 皇后问题的一种解法。
 * 
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 示例:
 * 
 * 输入: 4
 * 输出: [
 * ⁠[".Q..",  // 解法 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 * 
 * ⁠["..Q.",  // 解法 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * 解释: 4 皇后问题存在两个不同的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // 行不能一样 按行查找
    // 列不能一样
    // 行-列不能一样 
    // 行+列不能一样
    // tmp 为了记录之前的路径 tmp的索引是行数据 值是列数据 摆放的是棋子
    let ret = [];
    find(0)
    return ret;

    function find(row,tmp=[]) {
        if (row === n) {
            ret.push(tmp.map(c=>{
                let arr= new Array(n).fill('.')
                arr[c] = 'Q'
                return arr.join('')
            }))
        }
        for (let col = 0; col < n; col++) {
            let cantSet = tmp.some((ci,ri)=>{
                return ci===col||(ri-ci)===(row-col)||(ri+ci)===(row+col)
            })
            if (cantSet) continue
            find(row+1,[...tmp,col])
            
        }
    }

};
// @lc code=end

