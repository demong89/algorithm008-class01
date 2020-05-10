/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (48.50%)
 * Likes:    653
 * Dislikes: 0
 * Total Accepted:    118.7K
 * Total Submissions: 230.5K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length < 1) return null;
    while (lists.length > 1) {
        let l1 = lists.pop();
        let l2 = lists.pop();
        lists.push(mergeTwoList(l1, l2))
    }
    return lists[0]
};

function mergeTwoList(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoList(l1, l2.next)
        return l2
    }
}
// @lc code=end

