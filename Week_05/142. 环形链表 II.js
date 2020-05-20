var detectCycle = function(head) {
    while(head){
        if (head.flag) {
            return head
        }else{
            head.flag = '1'
            head= head.next
        }
    }
    return null
};