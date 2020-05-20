var hasCycle = function(head) {
    while(head){
        if (head.flag) {
            return true
        }else{
            head.flag = '1'
            head = head.next
        }
    }
    return false
};