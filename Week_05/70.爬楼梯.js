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