## 1、动态规划
#### 1.1 [322.零钱兑换](https://leetcode-cn.com/problems/coin-change/description/)
```
var coinChange = function(coins, amount) {
    if(amount===0) return 0;
    const dp = Array(amount+1).fill(Number.MAX_VALUE)
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
       for (let j = 0; j < coins.length; j++) {
          if (i-coins[j]>=0) {
              dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
          }
       }
    }
    return dp[dp.length-1] ===Number.MAX_VALUE?-1:dp[dp.length-1]
};

```
#### 1.2  [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
```
var climbStairs = function(n) {
    let step = [];
    step[0] = 1;
    step[1] = 1;
    for(let i=2;i<=n;i++){
        step[i] = step[i-1]+step[i-2]
    }
    return step[n]
};
```

#### 1.3 [120. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/description/)
```
var minimumTotal = function(triangle) {
    let dp = triangle;
    for (let i = dp.length-2; i >= 0 ; i--) {
       for (let j = 0; j < dp[i].length; j++) {
           dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + dp[i][j]
       }
    }
    return dp[0][0]
};
```

#### 1.4 [53. 最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
```
var maxSubArray = function(nums) {
  let ans = nums[0]
  let sum = 0;
  for(const num of nums){
      if(sum>0){
          sum+=num
      }else{
          sum = num
      }
      ans = Math.max(ans,sum)
  }
  return ans
};
```

#### 1.5 [152. 乘积最大子数组](https://leetcode-cn.com/problems/maximum-product-subarray/)
```
var maxProduct = function (nums) {
    if (!nums.length) return null;
    let max = nums[0], state = [];
    for (let i = 0; i < nums.length; i++) {
        state[i] = []
    }
    state[0][0] = nums[0];
    state[0][1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        state[i][0] = Math.max(state[i - 1][0] * nums[i], nums[i], state[i - 1][1] * nums[i])
        state[i][1] = Math.min(state[i - 1][1] * nums[i], nums[i], state[i - 1][0] * nums[i])
        if (max < state[i][0]) max = state[i][0]
    }
    return max
};
```
#### 1.6 [518. 零钱兑换 II](https://leetcode-cn.com/problems/coin-change-2/)
```
var change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0)
    if(amount === 0) return 1;
    dp[0] = 1;
    for (let j = 0; j < coins.length; j++) {
       for (let i = 1; i < amount+1; i++) {
           if(i-coins[j]>=0){
               dp[i] = dp[i]+dp[i-coins[j]]
           }
       }
    }
    return dp[dp.length-1]
};
```
#### 1.7 [1143. 最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)
```
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(0))
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    return dp[n][m]
};
```
#### 1.8 [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)
```
var rob = function(nums) {
    const len = nums.length;
    const res = new Array(len+1);
    res[0] = 0;
    res[1] = nums[0];
    for (let i = 2; i <= len; i++) {
        res[i] = Math.max(res[i-1],res[i-2]+nums[i-1])
    }
    return res[len]
};
```
#### 1.9 [213. 打家劫舍 II](https://leetcode-cn.com/problems/house-robber-ii/)
```
var rob = function(nums) {
    let len = nums.length;
    if(len===1) return nums[0]
    if(len ===0) return 0;
    function dpGo(nums) {
        const dp = new Array(len-1);
        dp[0] = 0;
        dp[1] = nums[0];
        for (let i = 2; i <len; i++) {
            dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1])
        }
        return dp[len-1]
    }
    var n1 = dpGo(nums.slice(1))
    var n2 = dpGo(nums.slice(0,nums.length-1))
    return Math.max(n2,n1)
};
```
#### 1.10 [121. 买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
```
// var maxProfit = function(prices) {
//   let len = prices.length;
//   let max = 0;
//   for (let i = 0; i <len; i++) {
//      for (let j = i+1; j < len; j++) {
//          max = Math.max(max,prices[j]-prices[i])
//      }
//   }
//   return max;
// };

var maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfile = 0;
  for (let i = 0; i < prices.length; i++) {
   if(prices[i]<=minPrice){
     minPrice= Math.min(minPrice,prices[i])
   }else{
     maxProfile = Math.max(prices[i]-minPrice,maxProfile)
   }
  }
  return maxProfile
}

```
#### 1.11 [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
```
// var maxProfit = function(prices) {
//     let max = 0;
//     const len = prices.length;
//     for (let i = 1; i < len; i++) {
//        max+=Math.max(prices[i]-prices[i-1],0)
//     }
//     return max;
// };

var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length-1; i++) {
        if(prices[i+1]>prices[i]) profit+=prices[i+1]-prices[i]
    }
    return profit;
}
```

#### 1.12 [123. 买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)
```
var maxProfit = function(prices) {
    let n = prices.length;
    if(n===0) return 0;

    let dpi10 = 0,dpi11=-Infinity,dpi20 = 0,dpi21 = -Infinity;
    for (let i = 0; i < n; i++) {
       dpi10 = Math.max(dpi10,dpi11+prices[i])
       dpi11 = Math.max(dpi11,0-prices[i])
       dpi20 = Math.max(dpi20,dpi21+prices[i])
       dpi21 = Math.max(dpi21,dpi10-prices[i])
    }
    return dpi20
};
```

#### 1.13 [188. 买卖股票的最佳时机 IV](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/)
```
var maxProfit = function(k, prices) {
    let len = prices.length;
    if(len === 0) return 0;
    if(k >= len/2) return maxProfit2(prices);
    let dp = Array.from(new Array(len), () => new Array(k+1));
    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= k; j++) {
            dp[i][j] = new Array(2).fill(0);
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = k; j > 0; j--) {
            if(i===0) {
                dp[i][j][0] = 0;
                dp[i][j][1] = -prices[i];
                continue;
            }
            dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
        }
    }
    return dp[len-1][k][0];
};

function maxProfit2(prices) {
    let profits = 0;
    for (let i = 0; i < prices.length + 1; i++) {
        if(prices[i + 1] - prices[i] > 0) {
            profits += prices[i + 1] - prices[i]
        }
    }
    return profits;
};
```
#### 1.14 [309. 最佳买卖股票时机含冷冻期](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
```
var maxProfit = function(prices) {
    let n = prices.length;
    if(n===0) return 0;
    let dp_i_0 = 0,dp_i_1 = -Infinity,dp_pre = 0;
    for (let i = 0; i < n; i++) {
        let tmp = dp_i_0;
        dp_i_0 = Math.max(dp_i_0,dp_i_1+prices[i])
        dp_i_1 = Math.max(dp_i_1,dp_pre-prices[i])
        dp_pre = tmp;
    }
    return dp_i_0
};
```
#### 1.15 [714. 买卖股票的最佳时机含手续费](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
```
var maxProfit = function(prices, fee) {
    let dp = new Array(prices.length);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(2)
    }
    dp[0][0] = 0;
    dp[0][1] = 0-fee-prices[0];
    for (let i = 1; i < prices.length; i++) {
       dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
       dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i]-fee)
    }
    return dp[prices.length-1][0]
};
```
#### 1.16 [279. 完全平方数](https://leetcode-cn.com/problems/perfect-squares/)
```
var numSquares = function(n) {
    let dp = new Array(n+1).fill(0)
    for (let i = 1; i <= n; i++) {
       dp[i] = i;
       for (let j = 1; j*j <= i; j++) {
          dp[i] = Math.min(dp[i],dp[i-j*j]+1)
       }
    }
    return dp[n]
};
```
#### 1.17 [72. 编辑距离](https://leetcode-cn.com/problems/edit-distance/)
```
var minDistance = function(word1, word2) {
    let n = word1.length;
    let m = word2.length;
    let dp = [];
    for (let i = 0; i <=n; i++) {
        dp.push([])
        for (let j = 0; j <= m; j++) {
          if(i*j){
            dp[i][j] = word1[i-1]===word2[j-1]?dp[i-1][j-1]:(Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1)
          }else{
              dp[i][j] = i+j
          }
            
        }
    }
    return dp[n][m]
};
```
#### 1.18 [62. 不同路径](https://leetcode-cn.com/problems/unique-paths/)
```
var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(1);
    for (let i = 1; i <m; i++) {
        for (let j = 1; j < n; j++) {
           dp[j] = dp[j-1]+dp[j]
        }
    }
    return dp[n-1]
};
```
#### 1.19 [63. 不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)
```
var uniquePathsWithObstacles = function(obstacleGrid) {
    let n = obstacleGrid.length;
    let m = obstacleGrid[0].length;
    let res = new Array(m).fill(0);
    res[0] = 1;
    for (let i = 0; i < n; i++) {
       for (let j = 0; j < m; j++) {
          if(obstacleGrid[i][j]==1){
              res[j] = 0;
          }else if(j>0){
              res[j] += res[j-1]
          }
       }
    }
    return res[m-1]
};
```
#### 1.20 [980. 不同路径 III](https://leetcode-cn.com/problems/unique-paths-iii/)
```
var uniquePathsIII = function(grid) {
    let init = {
        grid:null,
        start:[],
        end:[],
        path_num:0,
        res:0
    }
    init_grid.call(init,grid);
    get_paths(init)
    return init.res
};

function get_paths(obj){
    if(move(obj,1,0)===1){
        get_paths(obj);
        trace_back(obj,1,0)
    }
    if(move(obj,0,-1)===1){
        get_paths(obj);
        trace_back(obj,0,-1)
    }
    if(move(obj,-1,0)===1){
        get_paths(obj);
        trace_back(obj,-1,0)
    }
    if(move(obj,0,1)===1){
        get_paths(obj);
        trace_back(obj,0,1)
    }
}
function trace_back(obj,up,left){
    obj.grid[obj.start[0]][obj.start[1]] = 0;
    obj.start[0] += up;
    obj.start[1] += left;
    obj.path_num++;
}

function move(obj,up,left){
    if (obj.grid[obj.start[0]-up][obj.start[1]-left]===2&&obj.path_num===0) {
        obj.res++;
        return 2;
    }else if(obj.grid[obj.start[0]-up][obj.start[1]-left] === 0){
        obj.start[0] -= up;
        obj.start[1] -= left;
        obj.grid[obj.start[0]][obj.start[1]] = -1;
        obj.path_num--
        return 1
    }else{
        return -1
    }
}

function init_grid(grid){
    this.grid = new Array(grid.length+2);
    for (let i = 0; i < this.grid.length; i++) {
        this.grid[i] = new Array(grid[0].length+2).fill(-1)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) this.start = [i+1,j+1];
            if(grid[i][j]===2) this.end = [i+1,j+1];
            if(grid[i][j]===0) this.path_num++
            this.grid[i+1][j+1] = grid[i][j]
        }
    }
}
```
#### 1.21 [32. 最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/)
```
var longestValidParentheses = function(s) {
    var max = 0,n = s.length;
    const dp = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
       if(s[i] === ')'){
           if(s[i-1] === '('){
               dp[i] = (i>=2?dp[i-2]:0)+2
           }else if(i-dp[i-1]>0&&s[i-dp[i-1]-1]=='('){
               dp[i] = dp[i-1]+((i-dp[i-1]>=2)?dp[i-dp[i-1]-2]:0)+2
           }
           max = Math.max(max,dp[i])
       }
        
    }
    return max
};
```
#### 1.22 [64. 最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)
```
/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (64.01%)
 * Likes:    480
 * Dislikes: 0
 * Total Accepted:    89.6K
 * Total Submissions: 136.6K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (grid.length === 0) return 0;
    const dp = [];
    const rows = grid.length;
    const cols = grid[0].length;
    for (let i = 0; i < rows + 1; i++) {
        dp[i] = [];
        // 初始化第一列
        dp[i][0] = Number.MAX_VALUE;
        for (let j = 0; j < cols + 1; j++) {
            // 初始化第一行
            if (i === 0) {
                dp[i][j] = Number.MAX_VALUE;
            }
        }
    }
    // tricky
    dp[0][1] = 0;
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < cols + 1; j++) {
            // state transition
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[rows][cols];
};
// @lc code=end


```
#### 1.23 [221. 最大正方形](https://leetcode-cn.com/problems/maximal-square/)
```
var maximalSquare = function(matrix) {
    if(matrix.length === 0) return 0;
    const dp = [];
    const rows = matrix.length;
    const cols = matrix[0].length;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < rows+1; i++) {
       if(i===0){
           dp[i] = new Array(cols+1).fill(0)
       }else{
           dp[i] = [0]
       }
    }
    for (let i = 1; i < rows+1; i++) {
        for (let j = 1; j < cols+1; j++) {
           if(matrix[i-1][j-1] === '1'){
               dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]) +1;
               max = Math.max(max,dp[i][j])
           }else{
               dp[i][j] = 0;
           }
        }
    }
    return max*max
};
```
#### 1.24 [363. 矩形区域不超过 K 的最大数值和](https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/)
```
function maxSumSubmatrix (matrix, K) {
    let max = -Infinity;
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < n; i++) {
        const rowSum = Array(m).fill(0);

        for (let j = i; j < n; j++) {
            for (let k = 0; k < m; k++) {
                rowSum[k] += matrix[k][j];
            }

            let sum = 0;
            const arr = [0];

            for (let r = 0; r < m; r++) {
                sum += rowSum[r];

                // js中的Set没有ceiling或者lowerbound方法，
                // 所以实现一个方法查找应当插入值的位置
                let idx = insertIndex(arr, sum - K);

                idx = idx >= arr.length ? arr.length - 1 : idx;
                const val = sum - arr[idx];

                if (idx > -1 && val <= K) {
                    if (val === K) return K;
                    else max = Math.max(max, val);
                }

                const insertIdx = insertIndex(arr, sum);
                if (arr[insertIdx] !== sum) {
                    // 在合适的index位置插入该值，保证arr是个有序数组
                    arr.splice(insertIdx, 0, sum);
                }
            }

        }
    }

    return max;
}

function insertIndex(nums, target){
    let low = 0;
    let high = nums.length - 1;
    let mid;

    while (low <= high) {
        mid = (low + high) >> 1;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;
}
```
#### 1.25 [403. 青蛙过河](https://leetcode-cn.com/problems/frog-jump/)
```

```
#### 1.26 [410. 分割数组的最大值](https://leetcode-cn.com/problems/split-array-largest-sum/)
```

```
#### 1.27 [552. 学生出勤记录 II](https://leetcode-cn.com/problems/student-attendance-record-ii/)
```

```
#### 1.28 [621. 任务调度器](https://leetcode-cn.com/problems/task-scheduler/)
```

```
#### 1.29 [647. 回文子串](https://leetcode-cn.com/problems/palindromic-substrings/)
```

```
#### 1.30 [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)
```

```
#### 1.31 [312. 戳气球](https://leetcode-cn.com/problems/burst-balloons/)
```

```


## 2、字典树和并查集

#### 2.1 [547. 朋友圈](https://leetcode-cn.com/problems/friend-circles/) 并查集
```
var findCircleNum = function(M) {
    let n = M.length;
    if(n===0) return 0;
    let count = n;
    let find = (p)=>{
        while(p!=parent[p]){
            parent[p] = parent[parent[p]]
            p=parent[p]
        }
        return p
    }
    let union = (p,q)=>{
        let rootP = find(p)
        let rootQ = find(q)
        if(rootP === rootQ) return
        parent[rootP] = rootQ;
        count--
    }
    let parent = new Array(n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    for (let i = 0; i <n; i++) {
        for (let j = 0; j < n; j++) {
           if(M[i][j]===1) union(i,j)
        }
    }
    return count;
};
```

## 3、高级搜索
#### 3.1 [22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/)
#### 3.2 [36. 有效的数独](https://leetcode-cn.com/problems/valid-sudoku/description/)
#### 3.3 [37. 解数独](https://leetcode-cn.com/problems/sudoku-solver/#/description)
#### 3.4 [51. N皇后](https://leetcode-cn.com/problems/n-queens/description/)
#### 3.5 [127. 单词接龙](https://leetcode-cn.com/problems/word-ladder/description/)
#### 3.6 [433. 最小基因变化](https://leetcode-cn.com/problems/minimum-genetic-mutation/#/description)
#### 3.7 [1091. 二进制矩阵中的最短路径](https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/)
#### 3.8 [773. 滑动谜题](https://leetcode-cn.com/problems/sliding-puzzle/)


## 4、红黑树和AVL树
#### 4.1 [208. 实现 Trie (前缀树)](https://leetcode-cn.com/problems/implement-trie-prefix-tree/#/description)
#### 4.2 [547. 朋友圈](https://leetcode-cn.com/problems/friend-circles/)
#### 4.3 [200. 岛屿数量](https://leetcode-cn.com/problems/number-of-islands/)
#### 4.4 [130. 被围绕的区域](https://leetcode-cn.com/problems/surrounded-regions/)
#### 4.5 [212. 单词搜索 II](https://leetcode-cn.com/problems/word-search-ii/)

## 5、位运算
#### 5.1 [191. 位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)
#### 5.2 [231. 2的幂](https://leetcode-cn.com/problems/power-of-two/)
#### 5.3 [190. 颠倒二进制位](https://leetcode-cn.com/problems/reverse-bits/)
#### 5.4 [51. N皇后](https://leetcode-cn.com/problems/n-queens/description/)
#### 5.5 [52. N皇后 II](https://leetcode-cn.com/problems/n-queens-ii/description/)
#### 5.6 [338. 比特位计数](https://leetcode-cn.com/problems/counting-bits/description/)--DP+位运算

## 6、布隆过滤器和LRU缓存

#### 6.1 [146. LRU缓存机制](https://leetcode-cn.com/problems/lru-cache/#/)

## 7、排序算法
#### 7.1 [1122. 数组的相对排序](https://leetcode-cn.com/problems/relative-sort-array/)
#### 7.2 [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)
#### 7.3 [56. 合并区间](https://leetcode-cn.com/problems/merge-intervals/)
#### 7.4 [493. 翻转对](https://leetcode-cn.com/problems/reverse-pairs/)

## 8、高级动态规划
#### 8.1 [746. 使用最小花费爬楼梯](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)
#### 8.2 [300. 最长上升子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
#### 8.3 [91. 解码方法](https://leetcode-cn.com/problems/decode-ways/)
#### 8.4 [32. 最长有效括号](https://leetcode-cn.com/problems/longest-valid-parentheses/)
#### 8.5 [85. 最大矩形](https://leetcode-cn.com/problems/maximal-rectangle/)
#### 8.6 [115. 不同的子序列](https://leetcode-cn.com/problems/distinct-subsequences/)
#### 8.7 [818. 赛车](https://leetcode-cn.com/problems/race-car/)

## 9、字符串算法
* 基础算法
#### 9.1 [709. 转换成小写字母](https://leetcode-cn.com/problems/to-lower-case/)
#### 9.2 [58. 最后一个单词的长度](https://leetcode-cn.com/problems/length-of-last-word/)
#### 9.3 [771. 宝石与石头](https://leetcode-cn.com/problems/jewels-and-stones/)
#### 9.4 [387. 字符串中的第一个唯一字符](https://leetcode-cn.com/problems/first-unique-character-in-a-string/)
#### 9.5 [8. 字符串转换整数 (atoi)](https://leetcode-cn.com/problems/string-to-integer-atoi/)

* 字符串操作 
#### 9.6 [14. 最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/description/)
#### 9.7 [344. 反转字符串](https://leetcode-cn.com/problems/reverse-string/)
#### 9.8 [541. 反转字符串 II](https://leetcode-cn.com/problems/reverse-string-ii/)
#### 9.9 [151. 翻转字符串里的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)
#### 9.10 [557. 反转字符串中的单词 III](https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/)
#### 9.11 [917. 仅仅反转字母](https://leetcode-cn.com/problems/reverse-only-letters/)

* Anagram异位词问题 (242 )
#### 9.12 [49. 字母异位词分组](https://leetcode-cn.com/problems/group-anagrams/)
#### 9.13 [438. 找到字符串中所有字母异位词](https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/)
* Palindrome回文串问题
#### 9.14 [125. 验证回文串](https://leetcode-cn.com/problems/valid-palindrome/)
#### 9.15 [680. 验证回文字符串 Ⅱ](https://leetcode-cn.com/problems/valid-palindrome-ii/)
#### 9.16 [5. 最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
* 最长子串、子序列(1143,72)

* 字符串+递归 or DP(115)
#### 9.17 [10. 正则表达式匹配](https://leetcode-cn.com/problems/regular-expression-matching/)
#### 9.18 [44. 通配符匹配](https://leetcode-cn.com/problems/wildcard-matching/)

#### 9.19 [205. 同构字符串](https://leetcode-cn.com/problems/isomorphic-strings/)
