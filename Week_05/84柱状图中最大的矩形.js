var largestRectangleArea = function (heights) {
    let ans = 0,stack = [];
    heights.unshift(0)
    heights.push(0)
    for (let i = 0; i < heights.length; i++) {
       while (stack.length&&heights[stack[stack.length-1]]>heights[i]) {
           const currentHeight = stack.pop();
           const right = i,left = stack[stack.length-1]+1
         ans = Math.max(ans,(right-left)*heights[currentHeight])         
       }
        stack.push(i)
    }
    return ans
 };