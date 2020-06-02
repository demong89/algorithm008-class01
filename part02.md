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
#### 1.6 [322. 零钱兑换](https://leetcode-cn.com/problems/coin-change/)
```
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
    let dp = new Array(amount+1).fill(Number.MAX_VALUE)
    dp[0] = [0];
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
           if(i-coins[j]>=0){
               dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
           }
        }
    }
    return dp[dp.length-1] === Number.MAX_VALUE?-1:dp[dp.length-1]
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
#### 1.16 []()
```

```
#### 1.17 []()
```

```
#### 1.18 []()
```

```
#### 1.19 []()
```

```
#### 1.20 []()
```

```
#### 1.21 []()
```

```
#### 1.22 []()
```

```
#### 1.23 []()
```

```
#### 1.24 []()
```

```
#### 1.25 []()
```

```
#### 1.26 []()
```

```
#### 1.27 []()
```

```
#### 1.28 []()
```

```
#### 1.29 []()
```

```
#### 1.30 []()
```

```
#### 1.31 []()
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
## 4、红黑树和AVL树
## 5、位运算
## 6、布隆过滤器和LRU缓存
## 7、排序算法
## 8、高级动态规划
## 9、字符串算法