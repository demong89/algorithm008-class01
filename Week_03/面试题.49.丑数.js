/**
 * 原题 264 
 * @param {number} n
 * @return {number}
 */
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