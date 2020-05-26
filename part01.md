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
#### 1.2 [283. 移动零](https://leetcode-cn.com/problems/move-zeroes/)

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
## 7、泛型递归、树的递归

## 8、分治、回溯
## 9、深度优先、广度优先
## 10、贪心算法、二分查找



