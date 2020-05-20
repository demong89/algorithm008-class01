var groupAnagrams = function(strs) {
    let map = new Map();
    strs.forEach(str=>{
        let s = str.split('').sort().join();
        if(map.has(s)){
            let tmp = map.get(s);
            tmp.push(str)
            map.set(s,tmp)
        }else{
            map.set(s,[str])
        }
    })
    return [...map.values()]
 };