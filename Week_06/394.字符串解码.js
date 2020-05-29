
/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 *
 * https://leetcode-cn.com/problems/decode-string/description/
 *
 * algorithms
 * Medium (47.98%)
 * Likes:    320
 * Dislikes: 0
 * Total Accepted:    36.2K
 * Total Submissions: 70.2K
 * Testcase Example:  '"3[a]2[bc]"'
 *
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 示例:
 * 
 * 
 * s = "3[a]2[bc]", 返回 "aaabcbc".
 * s = "3[a2[c]]", 返回 "accaccacc".
 * s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i]!==']') {
            stack.push(s[i])
            continue
        }
        let cur = stack.pop();
        let str = '';
        while(cur!=='['){
            str = cur+str;
            cur = stack.pop()
        }
        let num = '';
        cur = stack.pop();
        while (!isNaN(cur)) {
            num = cur+num;
            cur = stack.pop()
        }
        stack.push(cur)
        stack.push(str.repeat(num))
    }
    return stack.join('')
};
// @lc code=end

