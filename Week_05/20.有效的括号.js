var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
       if (s[i]=='['||s[i]=='('||s[i]=='{') {
           stack.push(s[i])
       }else{
           let left = stack.pop();
           if (left=='['&&s[i]==']'||left=='('&&s[i]==')'||left=='{'&&s[i]=='}') {
               
           }else{
               return false
           }
       }
        
    }
    return stack.length === 0
}; 