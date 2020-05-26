var levelOrder = function(root) {
    let nums = [];
    search(nums,root,0)
    return nums;
};

function search(nums,root,k){
    if (root==null) return ;
    if (nums[k] === undefined) {
        nums[k] = []
    }
    nums[k].push(root.val)
    for (let i = 0; i < root.children.length; i++) {
       search(nums,root.children[i],k+1)
    }
}