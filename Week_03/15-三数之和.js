var threeSum = function (nums){
    if (nums.length<3)  return []
    nums.sort((a,b)=>a-b)
    let list  = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue
        let left = i+1;
        let right = nums.length - 1;
        while (left<right) {
            if (right === i) {
                right--
            }else if(nums[left]+nums[right]+nums[i]===0){
                list.push([nums[left],nums[right],nums[i]])
                while (nums[left] === nums[left+1]) {
                    left++
                }
                left++
                while (nums[right]===nums[right-1]) {
                    right--
                }
                right--
            }else if(nums[left]+nums[right]+nums[i]>0){
                right--
            }else{
                left++
            }
        }
    }
    return list
}
