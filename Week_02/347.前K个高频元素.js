/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map()
    nums.forEach(item=>{
        if (map.get(item)) {
            map.set(item,map.get(item)+1)
        }else{
            map.set(item,1)
        }
    })
    let arr = [...map.entries()].sort((a,b)=>b[1]-a[1])
    let res = []
    for (let i = 0; i < k; i++) {
        res.push(arr[i][0])
    }
    return res;
};