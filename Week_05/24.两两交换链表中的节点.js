var swapPairs = function(head) {
    if(head==null||head.next==null) return head;
    let next = head.next;// 获得第 2 个节点
    head.next = swapPairs(next.next)  // 第1个节点指向第 3 个节点，并从第3个节点开始递归
    next.next = head; // 第2个节点指向第 1 个节点
    return next;
};