/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (38.22%)
 * Likes:    364
 * Dislikes: 0
 * Total Accepted:    57.4K
 * Total Submissions: 143.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let n = matrix.length - 1;
    if (n < 0) return []
    let m = matrix[0].length - 1;
    let number = [];
    let i = j = 0;
    let turn = m == 0 ? 'd' : 'r';
    let boundl = 0;
    let boundr = m;
    let boundu = 0;
    let boundd = n;
    for (let a = 0; a < (m + 1) * (n + 1); a++) {
        number.push(matrix[i][j])
        if (turn == 'r') {
            j++;
            if (j == boundr) {
                boundu++
                turn = 'd'
            }
        } else if (turn == 'd') {
            i++;
            if (i == boundd) {
                boundr--;
                turn = 'l'
            }
        } else if (turn == 'l') {
            j--
            if (j == boundl) {
                boundd--
                turn = 'u'
            }
        } else if (turn == 'u') {
            i--
            if (i == boundu) {
                boundl++
                turn = 'r'
            }
        }
    }
    return number

};
// @lc code=end

