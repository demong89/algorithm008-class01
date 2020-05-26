var postorder = function(root,arr=[]) {
    if (root == null) return arr;
    for (let i = 0; i < root.children.length; i++) {
        postorder(root.children[i],arr)
    }
    arr.push(root.val)
    return arr
 };