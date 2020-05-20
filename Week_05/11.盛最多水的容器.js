var maxArea = function (height) {
    if (!height || height.length<=1)  return 0
    let left = 0,right = height.length-1;//左右两个指针
    let max = 0;//最大值
    while (left<right) {
        // 计算
        const area = Math.abs(right-left)*Math.min(height[left],height[right])
        if (max<area) {
            max = area
        }
        if (height[left]<height[right]) {
            left++ // 左指针右移
        }else{
            right-- // 右指针左移
        }
    }
    return max
};