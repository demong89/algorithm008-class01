# 针对不同结构的专题训练


##  1、数组 
#### 1.1 [11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)
题解：
左右两个指针移动，算出其中的面积，最大的就是结果。
实现
```
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
```
#### 1.2 [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)70

题解：
从后向前，查找是0，就把当前位置移动到最后。注意：这里不能从前面开始.

```
var moveZeroes = function(nums) {
    for (let i = nums.length-1; i >=0; i--) {
       if (nums[i]===0) {
           nums.splice(i,1)
           nums.push(0)
       }
    }
    return nums;
};
```
其他方法：
从前往后遍历，加个计数器（从0开始），不是0的存起来，计数器+1，
遍历完后，跟原数组长度对比，差几个补几个0.


#### 1.3 [70.爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

题解：
1、递归求解 会超时 
2、将每个台阶的步数保存在一个数组里。

```
var climbStairs = function(n) {
    // if (n==0) return 0;
    // if(n==1) return 1
    // if(n==2) return 2
    // return climbStairs(n-1)+climbStairs(n-2)

    let step = [];
    step[0] = 1;
    step[1] = 1;
    for (let i = 2; i <= n; i++) {
        step[i] = step[i-1]+step[i-2]
    }
    return step[n]
};
```

#### 1.4 [15.三数之和](https://leetcode-cn.com/problems/3sum/)

```
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = [];
    let len = nums.length;
    if (nums[0] <= 0 && nums[len - 1] >= 0) {//三数之和才可能为零
        let i = 0;
        while (i < len - 2) {
            if (nums[i] > 0) break; //最左侧的值大于0  三数和不可能为0
            let first = i + 1;
            let last = len - 1;
            while (first < last) {
                if (nums[i] * nums[last] > 0) break;//三个数同符号 无解
                let sum = nums[i] + nums[first] + nums[last]
                if (sum === 0) {
                    res.push([nums[i], nums[first], nums[last]])
                }
                if (sum < 0) {
                    while (nums[first] === nums[++first]) { }
                } else {
                    while (nums[last] === nums[--last]) { }
                }
            }
            while (nums[i] == nums[++i]) { }
        }
    }
    return res;
}
```


#### 1.5 [88-合并两个有序数组](https://leetcode-cn.com/problems/merge-sorted-array/)
题解：
将数组2添加到数组1，排序
```
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m+i] = nums2[i]
    }
    nums1.sort((a,b)=>a-b)
  };
```

#### 1.6 [189旋转数组](https://leetcode-cn.com/problems/rotate-array)
题解：末尾弹出 添加到头部
```
var rotate = function(nums, k) {
   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop())
   }
  return nums;
};
```
#### 1.7 [26.删除排序数组中的重复项](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array)
```
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
```
## 2、链表 Linked List

#### 2.1 [21.合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists)

题解：利用递归的方式 合并
```
var mergeTwoLists = function(l1, l2) {
   if (l1===null) return l2;
   if (l2===null) return l1;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    }
};
```

#### 2.2 [206.反转链表](https://leetcode-cn.com/problems/reverse-linked-list)
题解： 将单链表中的每个节点的后继指针指向它的前驱节点即可
```

var reverseList = function(head) {
    let pre = null
    let cur = head;
    while(cur){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur=next;
    }
    return pre
};
```

#### 2.3 [24.两两交换链表中的节点](https://leetcode-cn.com/problems/swap-nodes-in-pairs)

```
var swapPairs = function(head) {
    if(head==null||head.next==null) return head;
    let next = head.next;// 获得第 2 个节点
    head.next = swapPairs(next.next)  // 第1个节点指向第 3 个节点，并从第3个节点开始递归
    next.next = head; // 第2个节点指向第 1 个节点
    return next;
};
```

#### 2.4 [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)
题解 标记法
``
var hasCycle = function(head) {
    while(head){
        if (head.flag) {
            return true
        }else{
            head.flag = '1'
            head = head.next
        }
    }
    return false
};
``

#### 2.5 [142 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii)
同2.4 只是返回数据类型不同
```
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
```

#### 2.6 [25.K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group)

```
var reverseKGroup = function (head, k) {
    let dummy = new ListNode();
    dummy.next = head;
    let [start,end] = [dummy,dummy.next]
    let count = 0;
    while(end){
        count++
        if (count%k === 0) {
            start = reverseList(start,end.next)
            end = start.next
        }else{
            end = end.next
        }
    }
    return dummy.next;
};

function reverseList(start,end){
    let [pre,cur] = [start,start.next]
    const first = cur;
    while (cur!==end) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur=next
    }
    start.next = pre;
    first.next = cur;
    return first
}
```



## 3、栈和队列
#### 3.1 [155. 最小栈](https://leetcode-cn.com/problems/min-stack/)
题解：利用数组实现
```
var MinStack = function() {
    this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.arr)
};
```

#### 3.2 [ 20 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)

```
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
```
#### 3.3 [84柱状图中最大的矩形](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/description/)
```
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
```

#### 3.4 [239.滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/description/)

```
var maxSlidingWindow = function(nums, k) {
    // 暴力破解
    // let num = []
    // for (let i = 0; i < nums.length-k+1; i++) {
    //     let arr = []
    //     for (let j = i; j < k+i; j++) {
    //         arr.push(nums[j])
    //     }
    //     num.push(Math.max(...arr))
    // }
    // return num

    let n = nums.length;
    class slideWindow{
        constructor(){
            this.data = []
        }
        push(val){
            let data = this.data;
            while(data.length>0&&data[data.length-1]<val){
                data.pop()
            }
            data.push(val)
        }
        pop(val){
            let data = this.data
            if(data.length>0&&data[0]===val){
                data.shift()
            }
        }
        max(){
            return this.data[0]
        }
    }
    let res = [];
    let window = new slideWindow();
    for (let i = 0; i < n; i++) {
       if(i<k-1){
           window.push(nums[i])
       } else{
           window.push(nums[i])
           res.push(window.max())
           window.pop(nums[i-k+1])
       }
    }
    return res;
};
```

#### 3.5 [641.设计循环双端队列](https://leetcode-cn.com/problems/design-circular-deque/description/)
```
var MyCircularDeque = function(k) {
    this.queue = new Array();
    this.size = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.queue.length === this.size) {
        return false
    }else{
        this.queue.unshift(value);
        return true
    }
   
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.queue.length === this.size){
        return false
    }else{
        this.queue.push(value)
        return true
    }
   
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    
    if (this.queue.length <= 0){
        return false
    }else{
        this.queue.shift()
        return true
    }
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    
    if (this.queue.length <= 0){
        return false
    }else{
        this.queue.pop()
        return true
    }
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.queue.length<=0) {
        return -1
    }
    return this.queue[0]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.queue.length<=0) {
        return -1
    }
    return this.queue[this.queue.length-1]
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length === this.size;
};
```

#### 3.6 [42.接雨水](https://leetcode-cn.com/problems/trapping-rain-water/description/)
```
var trap = function(height) {
   if(!height||height.length===0) return 0;
   let sum = 0;
   for (let i = 1; i < height.length-1; i++) {
       let max_left = 0;
       for(let j=i-1;j>=0;j--){
           max_left = Math.max(max_left,height[j])
       }
       let max_right = 0;
       for (let j = i+1; j < height.length; j++) {
           max_right = Math.max(max_right,height[j])
       }
       let min = Math.min(max_left,max_right)
       if (min>height[i]) {
           sum+=min-height[i]
       }
   }
   return sum 
};
```

## 4、哈希表、映射、集合
#### 4.1 [242.有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/description/)
```
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('') 
};
```
#### 4.2 [49.字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/description/)
```
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
```
#### 4.3 [1.两数之和](https://leetcode-cn.com/problems/two-sum/description/)

```
var twoSum = function(nums, target) {

    // 暴力破解
    // for (let i = 0; i < nums.length; i++) {
    //    for (let j = i+1; j < nums.length; j++) {
    //       if(nums[i]+nums[j]===target){
    //             return [i,j]
    //       }
    //    }
    // }

    // 空间换时间
  
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
       let next = target - nums[i]
       if (temp[next]!==undefined) {
           return [temp[next],i]
       }else{
           temp[nums[i]] = i
       }
    }
};
```

## 5、树、二叉树、二叉搜索树 
#### 5.1 [94.二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/)
```
var inorderTraversal = function(root,res=[]) {
    if(root===null) return res;
    inorderTraversal(root.left,res)
    res.push(root.val)
    inorderTraversal(root.right,res)
    return res
};
```
#### 5.2 [144.二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/)
```
var preorderTraversal = function(root,arr=[]) {
    if(root==null) return arr;
    arr.push(root.val)
    preorderTraversal(root.left,arr)
    preorderTraversal(root.right,arr)
    return arr
 };
 // var preorderTraversal = function(root) {
 //   let result = [];
 //   let stack = [];
 //   let cur = root;
 //   while (cur||stack.length>0) {
 //       while (cur) {
 //           result.push(cur.val)
 //           stack.push(cur)
 //           cur = cur.left
 //       }
 //       cur = stack.pop();
 //       cur = cur.right;
 //   }
 //     return result
 // };
```
#### 5.3 [590.N叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/description/)
```
var postorder = function(root,arr=[]) {
   if (root == null) return arr;
   for (let i = 0; i < root.children.length; i++) {
       postorder(root.children[i],arr)
   }
   arr.push(root.val)
   return arr
};
```
#### 5.4 [589.N叉树的前序遍历](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/)
```
var preorder = function(root,arr=[]) { //迭代
    if(root==null) return arr;
    arr.push(root.val)
    for (let i = 0; i < root.children.length; i++) {
        preorder(root.children[i],arr)
    }
    return arr
    // if(!root) return []
    // let res = [],arr =[root]
    // while (arr.length) {
    //     let current = arr.pop();
    //     res.push(current.val)
    //     for (let i = current.children.length-1; i >=0; i--) {
    //        arr.push(current.children[i])
    //     }
    // }
    // return res;
};
```
#### 5.5 [429. N叉树的层序遍历](https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/)
```
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
```

#### 5.6 [105 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/)
```
var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null;
    let tmp = preorder[0],mid = inorder.indexOf(tmp)
    let root = new TreeNode(tmp)
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
    return root
};
```

## 6、堆、二叉堆、图
#### 6.1 [面试题40. 最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)
    ```
    var getLeastNumbers = function(arr, k) {
    let len = arr.length
    if (!len || !k) return []
    let heap = new Heap()
    // 建立最小堆，O(N) 复杂度
    heap.init(arr)
    let res = []
    while (k) {
        // 依次从堆顶弹出最小元素，O(logN) 复杂度
        res.push(heap.delete())
        k--
    }
    return res
    }

    function Heap() {
    this.heap = [-Infinity]
    }
    Heap.prototype.init = function(arr) {
    this.heap = [-Infinity]
    this.heap.push(...arr)
    let size = arr.length
    // 从最后一个元素的父节点开始实现最小堆，类似删除操作中将最后一个元素放在堆顶进行调整。
    for (let pos = parseInt(size / 2); pos > 0; pos--) {
        let tmp = this.heap[pos]
        let parent, child
        for (parent = pos; parent * 2 <= size; parent = child) {
        child = parent * 2
        if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
        if (tmp < this.heap[child]) break
        else this.heap[parent] = this.heap[child]
        }
        this.heap[parent] = tmp
    }
    }
    Heap.prototype.delete = function() {
    let size = this.heap.length - 1
    let res = this.heap[1]
    // 拿到最后一个元素
    let tmp = this.heap[size]
    this.heap.length--
    size--
    // 将最后一个元素放在堆顶，并调整最小堆
    let parent, child
    for (parent = 1; parent * 2 <= size; parent = child) {
        child = parent * 2
        if (child + 1 <= size && this.heap[child + 1] < this.heap[child]) child++
        if (tmp < this.heap[child]) break
        else this.heap[parent] = this.heap[child]
    }
    this.heap[parent] = tmp
    return res
    }

    ```
#### 6.2 [前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)
```
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
```
#### 6.3 [239. 滑动窗口最大值](https://leetcode-cn.com/problems/sliding-window-maximum/)
#### 6.4 [面试题49. 丑数](https://leetcode-cn.com/problems/chou-shu-lcof/)
```
var nthUglyNumber = function(n) {
    let p2 = p3 = p5 = 0;
    let uglyArr = [];
    uglyArr[0] = 1;
    for(let i = 1; i<n;i++){
        let nextP2 = uglyArr[p2]*2;
        let nextP3 = uglyArr[p3]*3;
        let nextP5 = uglyArr[p5]*5;
        let nextUgly = Math.min(nextP2,nextP3,nextP5)
        uglyArr.push(nextUgly)
        if(nextUgly === nextP2) p2++;
        if(nextUgly === nextP3) p3++;
        if(nextUgly === nextP5) p5++;
    }
    return uglyArr[n-1]
};
```
#### 6.5 图 [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
```
var numIslands = function(grid) {
    let num =0;
    if (grid&&grid.length) {
     const maxI = grid.length-1,maxJ=grid[0].length-1;
     function overturn(i,j) {
         if (i<0||j<0||i>maxI||j>maxJ) return;
         if (grid[i][j]==='1') {
             grid[i][j] = '0';
             overturn(i,j-1)
             overturn(i-1,j)
             overturn(i+1,j)
             overturn(i,j+1)
         }
     }
     for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]==='1') {
                num++;
                overturn(i,j)
            }
            
        }
         
     }   
    }
    return num;
};
```


## 7、泛型递归、树的递归
#### 7.1 [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
```
var climbStairs = function(n) {
    // if (n==0) return 0;
    // if(n==1) return 1
    // if(n==2) return 2
    // return climbStairs(n-1)+climbStairs(n-2)

    let step = [];
    step[0] = 1;
    step[1] = 1;
    for (let i = 2; i <= n; i++) {
        step[i] = step[i-1]+step[i-2]
    }
    return step[n]
};
```
#### 7.2 [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
```
var generateParenthesis = function(n) {
    let res = [];
    const help = (cur,left,right)=>{
        if (cur.length === 2*n) {
            res.push(cur)
            return
        }
        if (left<n) {
            help(cur+"(",left+1,right)
        }
        if (right<left) {
            help(cur+')',left,right+1)
        }
      
    }
    help('',0,0)
    return res
};
```
#### 7.3 [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/description/)
```
var invertTree = function(root) {
    if (root==null) {
        return root
    }
    [root.left,root.right] = [invertTree
    (root.right),invertTree(root.left)]
    return root
};
```
#### 7.4 [98. 验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)
```
var isValidBST = function(root) {
    let sortArr = preorderTraversal(root)
    for (let i = 0; i < sortArr.length-1; i++) {
       if (sortArr[i+1]<=sortArr[i]) {
           return false
       } 
    }
    return true
};
var preorderTraversal = function(root,arr=[]){
    if (root == null) {
        return arr
    }
    preorderTraversal(root.left,arr)
    arr.push(root.val)
    preorderTraversal(root.right,arr)
    return arr
}
```
#### 7.5 [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
```
var maxDepth = function(root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
};
```
#### 7.6 [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
```
var minDepth = function(root) {
   if (root == null) {
       return 0
   }
   if(root.left == null && root.right == null){
       return 1
   }
   let ans = Number.MAX_SAFE_INTEGER;
   if (root.left != null) {
       ans = Math.min(minDepth(root.left),ans)
   }
   if (root.right != null) {
       ans = Math.min(minDepth(root.right),ans)
   }
   return ans+=1
};
```
#### 7.7 [297. 二叉树的序列化与反序列化](https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/)
```
var serialize = function(root) {
    if(!root) return '[]'
    let res = '';
    let node = root;
    const queue = [node];
    while(queue.length){
        const front = queue.shift();
        if (front) {
            res+=`${front.val},`
            queue.push(front.left)
            queue.push(front.right)
        }else{
            res+='#,'
        }
    }
    res = res.substring(0,res.length-1)
    return `[${res}]`
};

var deserialize = function(data) {
    if(data.length<=2) return null;
    const nodes = data.substring(1,data.length-1).split(',');
    const root = new TreeNode(parseInt(nodes[0]))
    nodes.shift();
    const queue = [root]
    while (queue.length) {
        const node = queue.shift();
        const leftVal = nodes.shift();
        if(leftVal!='#'){
            node.left = new TreeNode(leftVal)
            queue.push(node.left)
        }
        const rightVal = nodes.shift();
        if(rightVal!=='#'){
            node.right = new TreeNode(rightVal)
            queue.push(node.right)
        }
    }
    return root;
};
```
#### 7.8 [236. 二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
```
var lowestCommonAncestor = function(root, p, q) {
   if(root == null||root === p||root === q) return root
   let left = lowestCommonAncestor(root.left,p,q)
   let right = lowestCommonAncestor(root.right,p,q)
   return left === null?right:right===null?left:root
};
```
#### 7.9 [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
```
var buildTree = function(preorder, inorder) {
    if(!inorder.length) return null;
    let tmp = preorder[0],mid = inorder.indexOf(tmp);
    let root = new TreeNode(tmp)
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
    return root
};
```
#### 7.10 [77. 组合](https://leetcode-cn.com/problems/combinations/)
```
var combine = function(n, k) {
    let res = [];
    let subres = [];
    function combineSub(start,subres) {
        if(subres.length==k){
            res.push(subres.slice(0))
            return
        }
        var len = subres.length;
        for (let i = start; i <= n-(k-len)+1; i++) {
            subres.push(i)
            combineSub(i+1,subres)
            subres.pop()
        }
    }
    combineSub(1,subres)
    return res
};

```
#### 7.11 [46. 全排列](https://leetcode-cn.com/problems/permutations/)
```
var permute = function (nums) {
    let list = [];
    backtrack(list,[],nums)
    return list;
};
function backtrack(list,temp,nums){
    if(temp.length == nums.length) return list.push([...temp])
    for (let i = 0; i < nums.length; i++) {
        if(temp.includes(nums[i])) continue;
        temp.push(nums[i])
        backtrack(list,temp,nums)
        temp.pop()
    }
}
```
#### 7.12 [47. 全排列 II](https://leetcode-cn.com/problems/permutations-ii/)
```
var permuteUnique = function(nums) {
    if(nums===null) return;
    nums.sort((a,b)=>a-b)
    const res = [];
    cal(nums,0,res)
    return res
};

const swap = (nums,i,j)=> {
    if(i===j) return
    const t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}
const cal = (nums,first,result)=>{
    if(nums.length === first){
        result.push([...nums])
        return;
    }
    const map = new Map();
    for (let i = first; i < nums.length; i++) {
        if(!map.get(nums[i])){
            map.set(nums[i],true)
            swap(nums,first,i)
            cal(nums,first+1,result)
            swap(nums,first,i)
        }
    }
}
```

## 8、分治、回溯
#### 8.1 [50. Pow(x, n)](https://leetcode-cn.com/problems/powx-n/)
```
var myPow = function(x, n) {
    if(n<0) return 1/myPow(x,-n)
    if(n===0) return 1;
    if(n%2===0) return myPow(x*x,Math.floor(n/2))
    return myPow(x*x,Math.floor(n/2))*x
};
```
#### 8.2 [78.子集](https://leetcode-cn.com/problems/subsets/)
```
var subsets = function(nums) {
    let n = nums.length;
    let tmpPath = [];
    let res = [];
    let backtrack = (tmpPath,start)=>{
        res.push(tmpPath)
        for (let i = start; i < n; i++) {
            tmpPath.push(nums[i])
            backtrack(tmpPath.slice(),i+1)
            tmpPath.pop()
        }
    }
    backtrack(tmpPath,0)
    return res;
};
```
#### 8.3 [169. 多数元素](https://leetcode-cn.com/problems/majority-element/description/)
```
var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b)
    return nums[Math.floor(nums.length/2)]
};
```
```
// 投票算法
var majorityElement = function(nums) {
    let count = 1;
    let majority = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(count === 0){
            majority = nums[i]
        }
        if(nums[i] === majority){
            count++
        }else{
            count--
        }
    }
    return majority
};
```
#### 8.4 [17. 电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
```
var letterCombinations = function(digits) {
    let result = [];
    if(digits.length == 0) return [];
    let numMap = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz'
    }
    for (const code of digits) {
        let word = numMap[code]
        if (result.length>0) {
            let tmp = [];
            for (const char of word) {
                for (const old of result) {
                    tmp.push(old+char)
                }
            }
            result = tmp
        }else{
            result.push(...word)
        }
    }
    return result
};
```

#### 8.5 [51. N皇后](https://leetcode-cn.com/problems/n-queens/)
```
var solveNQueens = function(n) {
    // 行不能一样 按行查找
    // 列不能一样
    // 行-列不能一样 
    // 行+列不能一样
    // tmp 为了记录之前的路径 tmp的索引是行数据 值是列数据 摆放的是棋子
    let ret = [];
    find(0)
    return ret;

    function find(row,tmp=[]) {
        if (row === n) {
            ret.push(tmp.map(c=>{
                let arr = new Array(n).fill('.')
                arr[c] = 'Q'
                return arr.join('')
            }))
        }
        for (let col = 0; col < n; col++) {
           let canSet = tmp.some((ci,ri)=>{
               return ci===col||(ri-ci)===(row-col)||(ri+ci)===(row+col)
           })
            if (canSet) continue;
            find(row+1,[...tmp,col])
        }
    }

};
```

## 9、深度优先、广度优先
#### 9.1  [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
```
var levelOrder = function (root){
    if(root===null) return [];
    let res = [];
    let queue = [root];
    let level = 0;
    while(queue.length){
       
        let num = queue.length;
        res[level]= [];
        while(num--){
                 let cur = queue.shift();
                 res[level].push(cur.val)
                 if(cur.left) queue.push(cur.left)
                 if(cur.right) queue.push(cur.right)
        }
        level++
    }
    return res;
}
```
#### 9.2  [433. 最小基因变化](https://leetcode-cn.com/problems/minimum-genetic-mutation/#/description)
```
var minMutation = function(start, end, bank) {
    let bankSet = new Set(bank);
    if(!bankSet.has(end)) return -1;
    let queue = [[start,0]]
    let dna = ['A','C','G','T'];
    while(queue.length){
        let [node,count] = queue.shift();
        if(node === end) return count;
        for (let i = 0; i < node.length; i++) {
            for (let j = 0; j < dna.length; j++) {
               let d = node.slice(0,i) + dna[j] + node.slice(i+1)
               if (bankSet.has(d)) {
                   queue.push([d,count+1])
                   bankSet.delete(d)
               }
            }
        }
    }
    return -1;
};
```
#### 9.3  [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
```
var generateParenthesis = function (n) {
    let res = [];
    const help = (cur,left,right)=>{
        if (cur.length === 2*n) {
            res.push(cur)
            return
        }
        if(left <n){
            help(cur+'(',left+1,right)
        }
        if (right<left) {
            help(cur+')',left,right+1)
        }
    }
    help('',0,0)
    return res;
};
```
#### 9.4  [515 在每个树行中找最大值](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)
```
var largestValues = function(root) {
    if(root === null) return []
    let res = [];
    let level = 0;
    let queue = [root]
    let result = [];
    while(queue.length){
        res[level] = [];
        let num = queue.length;
        while (num--) {
            let cur = queue.shift();
            res[level].push(cur.val);
            if(cur.left) queue.push(cur.left)
            if(cur.right) queue.push(cur.right)
        }
        result.push(Math.max(...res[level]))
        level++
    }
    return result
};
```
#### 9.5  [127. 单词接龙](https://leetcode-cn.com/problems/word-ladder/description/)
```
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if(!wordSet.has(endWord)) return 0;
    let queue = [[beginWord,1]]
    while(queue.length){
        let [word,transNumber] = queue.pop();
        if(word === endWord) return transNumber;
        for (const str of wordSet) {
            if(charDiff(word,str)===1){
                queue.unshift([str,transNumber+1])
                wordSet.delete(str)
            }
        }
    }
    return 0;
};

const charDiff = (str1,str2)=>{
    let changes = 0;
    for (let i = 0; i < str1.length; i++) {
       if (str1[i]!=str2[i])  changes+=1
    }
    return changes;
}
```
#### 9.6  [126. 单词接龙 II](https://leetcode-cn.com/problems/word-ladder-ii/description/)
```
var findLadders = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if(!wordSet.has(endWord)) return [];
    wordSet.delete(beginWord);
    let beginSet = new Set([beginWord]);
    let map = new Map();
    let distance = 0;
    let minDistance = 0;
    while (beginSet.size) {
        if (beginSet.has(endWord)) break;
        let trySet = new Set();
        for (const word of beginSet) {
            let mapSet = new Set();
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                   let tryWord = word.slice(0,i) + String.fromCharCode(97+j)+word.slice(i+1);
                   if(!minDistance&&tryWord === endWord) minDistance = distance+1;
                   if (wordSet.has(tryWord)) {
                       trySet.add(tryWord)
                       mapSet.add(tryWord)
                   }
                    
                }
                
            }
            map.set(word,mapSet)
        }
        distance++;
        for (const w of trySet) {
            wordSet.delete(w)
        }
        beginSet = trySet
    }
    let ans = [];
    let path = [beginWord];
    dfs(beginWord,endWord,ans,path,map,minDistance,0)
    return ans
};
function dfs(beginWord,endWord,ans,path,map,minDistance,distance) {
    if(distance>minDistance) return;
    if(beginWord === endWord) ans.push(path.slice())
    let words = map.get(beginWord);
    if(words){
        for (const word of words) {
            path.push(word)
            dfs(word,endWord,ans,path,map,minDistance,distance+1)
            path.pop()
        }
    }
}
```
#### 9.7  [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
```
var numIslands = function (grid) {
    let num = 0;
    if (grid && grid.length) {
        const maxI = grid.length - 1, maxJ = grid[0].length - 1;
        function overturn(i, j) {
            if (i < 0 || j < 0 || i > maxI || j > maxJ) return;
            if (grid[i][j] === '1') {
                grid[i][j] = '0';
                overturn(i, j - 1)
                overturn(i - 1, j)
                overturn(i + 1, j)
                overturn(i, j + 1)
            }
        }
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '1') {
                    num++
                    overturn(i, j)
                }
            }
        }
    }
    return num
};
```
#### 9.8  [529. 扫雷游戏](https://leetcode-cn.com/problems/minesweeper/)
```
var updateBoard = function (board, click) {
    let x = click[0], y = click[1];
    if (board[x][y] === 'M') {
        board[x][y] = 'X'
        return board
    }
    let dx = [-1, -1, -1, 1, 1, 1, 0, 0];
    let dy = [-1, 1, 0, -1, 1, 0, -1, 1];
    let getNumsBombs = (board, x, y) => {
        let num = 0;
        for (let i = 0; i < 8; i++) {
            let newX = x + dx[i], newY = y + dy[i];
            if (newX < 0 || newX >= board.length || newY < 0 || newY >= board[0].length) continue;
            if (board[newX][newY] === 'M' || board[newX][newY] === 'X') num++
        }
        return num;
    }
    let dfs = (board, x, y) => {
        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] != 'E') return;
        let num = getNumsBombs(board, x, y);
        if (num === 0) {
            board[x][y] = 'B'
            for (let i = 0; i < 8; i++) {
                let newX = x + dx[i], newY = y + dy[i];
                dfs(board, newX, newY)

            }
        } else {
            board[x][y] = num + ''
        }
    }
    dfs(board, x, y)
    return board;
};
```

## 10、贪心算法

#### 10.1 [322 零钱兑换](https://leetcode-cn.com/problems/coin-change/description/)
```
var coinChange = function(coins, amount) {
  if(amount===0) return 0;
  let dp = new Array(amount+1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < coins.length; j++) {
          if(i-coins[j]>=0){
              dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
          }
      }
  }
  return dp[dp.length-1] === Number.MAX_VALUE ? -1:dp[dp.length-1]
};
```
#### 10.2 [860. 柠檬水找零](https://leetcode-cn.com/problems/lemonade-change/)
```
var lemonadeChange = function (bills) {
   let five = 0;
   let ten = 0;
   for (let i = 0; i < bills.length; i++) {
       if(bills[i]===5){
           five++
       }else if(bills[i]===10){
           if(five<=0) return false
           five--
           ten++
       }else{
           if(five>0&&ten>0){
               five--
               ten--
           }else if(five-3>=0){
               five = five-3
           }else{
               return false
           }
       }
   }
   return true
};
```
#### 10.3 [455 分发饼干](https://leetcode-cn.com/problems/assign-cookies/description/)
```
var findContentChildren = function(g, s) {
  g = g.sort((a,b)=>a-b)
  s = s.sort((a,b)=>a-b)
  let gLen = g.length,sLen = s.length;
  let i = j =0;
  let maxNum = 0;
  while (i<gLen&&j<sLen) {
      if(s[j]>=g[i]){
          i++
          j++
          maxNum++
      }else{
          j++
      }
  }
  return maxNum
};
```
#### 10.4 [122 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/)
```
var maxProfit = function(prices) {
    let max = 0;
    const len =  prices.length;
    for (let i = 1; i <len; i++) {
       max += Math.max(prices[i]-prices[i-1],0)
    }
    return max
};
```
#### 10.5 [45 跳跃游戏 II](ttps://leetcode-cn.com/problems/jump-game-ii/description/)
```
var jump = function(nums) {
    const hash = {}
    const toEnd = (from)=>{
        if(hash[from]) return hash[from]
        if(from === nums.length-1)return 0;
        if(from + nums[from]>=nums.length-1) return 1;
        let min = Infinity;
        for (let i = nums[from]; i > 0; i--) {
            min = Math.min(toEnd(from+i),min)
            if (min===1) break
        }
        hash[from] = min +1;
        return hash[from]
    }
    return toEnd(0)
};
```
#### 10.6 [55. 跳跃游戏](https://leetcode-cn.com/problems/jump-game/)
```
var canJump = function (nums) {
    let max = nums[0];
    let len = nums.length
    for (let i = 1; i < len; i++) {
        if (max >= len) {
            return true
        } else if (max < i) {
            return false
        } else {
            max = Math.max(max, i + nums[i])
        }
    }
    return true
};
```
#### 10.7 [874. 模拟行走机器人](https://leetcode-cn.com/problems/walking-robot-simulation/)
```
var robotSim = function(commands, obstacles) {
    let obstacleMap = {};
    obstacles.forEach(o=>{
        if(o.length>0) obstacleMap[o[0]+','+o[1]] = true
    })
    let res = 0;
    let dx = [0,1,0,-1];
    let dy = [1,0,-1,0];
    let [x,y,di] = [0,0,0];
    commands.forEach((c,index)=>{
        if(c===-1) di = (di+1)%4
        if(c===-2) di = (di+3)%4
        if(c>0) {
            for (let z = 0; z < c; z++) {
              if(!obstacleMap[(x+dx[di])+','+(y+dy[di])]){
                  x+=dx[di];
                  y+=dy[di];
                  res = Math.max(res,x*x+y*y)
              }
                
            }
        }
    })
    return res;
};
```




## 11、二分查找
#### 11.1 [69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
```
// 投机取巧的方法
//var mySqrt = function(x) {
//    return parseInt(Math.sqrt(x))
//};
// 暴力破解
// var mySqrt = function(x) {
//     let sqrt = 0;
//     while (!(sqrt*sqrt<=x&&((sqrt+1)*(sqrt+1)>x))) {
//         sqrt++
//     }
//     return sqrt
// };

var mySqrt = function (x) {
  if(x<0) return NaN;
  if(x<2) return x;
  let left = 1,right=x>>1;
  while(left+1<right){
      let mid = left + ((right-left)>>1)
      if(mid === x/mid){
          return mid
      }else if(mid< x/mid){
          left = mid
      }else{
          right = mid
      }
  }
  return right>x/right?left:right;
};

```
#### 11.2 [367. 有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)
```
// 暴力破解
// var isPerfectSquare = function(num) {
//     if (num===1)  return true
//     let mid = num>>1;
//     for (let i = 0; i <=mid; i++) {
//        if (i*i===num) {
//            console.log(i);
           
//            return true
//        }
//     }
//     return false
// };
// 二分法
var isPerfectSquare = function(num) {
    if (num === 1) return true;
    let left = 0,right = num;
    while(left<=right){
        let mid = parseInt((left+right)/2);
        if (mid*mid === num) {
            return true
        }else if(mid*mid < num){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return false
}
```
#### 11.3 [33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)
```
// 投机取巧的
//var search = function(nums, target) {
//    return nums.findIndex(item=>item===target)
//};

var search = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        const mid = start + ((end - start) >> 1)
        if (nums[mid] === target) return mid;
        if (nums[mid] >= nums[start]) {
            if (target >= nums[start] && target <= nums[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if (target >= nums[mid] && target <= nums[end]) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
    }
    return -1;
};
```
#### 11.4 [74. 搜索二维矩阵](https://leetcode-cn.com/problems/search-a-2d-matrix/)
```
// 暴力
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j]===target) {
//             return true
//         }
//     }
// }
// return false

// var searchMatrix = function(matrix, target) {
//     if(!matrix.length) return false;
//     let i =0;
//     for (;i< matrix.length;i++) {
//        if(matrix[i][0]>target) break
//     }
//     if(i===0) return false
//     return matrix[i-1].indexOf(target)!=-1
// };

// 二分法
var searchMatrix = function(matrix, target){
    let m = matrix.length;
    if(m==0) return false;
    let n = matrix[0].length,low = 0,high = m*n -1;
    while(low<=high){
        let mid = (low+high)>>1;
        let row = parseInt(mid/n),col = mid%n;
        let matrixMid = matrix[row][col];
        if(matrixMid<target){
            low = mid+1
        }else if(matrixMid>target){
            high = mid -1
        }else if(matrixMid === target){
            return true
        }
    }
    return false
}
```
#### 11.5 [153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)

```
// 投机法
//var findMin = function(nums) {
//    return Math.min(...nums)
//};
// 二分法
var findMin = function(nums) {
    let low = 0,high = nums.length -1;
    while(low<high){
        let mid = (low+high)>>1
        if (nums[mid]>nums[high]) {
            low = mid+1
        }else{
            high = mid
        }
    }
    return nums[low]
};
```
