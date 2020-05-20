var removeDuplicates = function(nums) {
    let slow = 0, len = nums.length;
    for (let fast = 0; fast <len; fast++) {
       if (nums[slow]!==nums[fast]) {
           slow++
           nums[slow] = nums[fast]
       } 
    }
    return slow+1
 };