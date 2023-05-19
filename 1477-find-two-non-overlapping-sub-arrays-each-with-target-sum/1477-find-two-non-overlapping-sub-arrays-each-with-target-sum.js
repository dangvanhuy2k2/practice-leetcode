/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
    const n = arr.length;
    const dp = Array(n).fill(Number.MAX_VALUE);
    let sum = 0;
    const m = new Map();
    m.set(0, n);
    let minLen = Number.MAX_VALUE;
    for (let i = n - 1; i >= 0; i--) {
        sum += arr[i];
        const numberNeed = sum - target;
        const lastIdx = m.get(numberNeed);
        if (lastIdx != undefined) minLen = Math.min(minLen, lastIdx - i);
        dp[i] = minLen;
        m.set(sum, i);
    }
    let ans = Number.MAX_VALUE;
    m.clear();
    m.set(0, -1);
    sum = 0;
    minLen = Number.MAX_VALUE;
    for (let i = 0; i < n - 1; ++i) {
        sum += arr[i];
        const numberNeed = sum - target;
        const lastIdx = m.get(numberNeed);
        if (lastIdx != undefined) {
            minLen = Math.min(minLen, i - lastIdx);
        }
        if (dp[i + 1] !== Number.MAX_VALUE && minLen !== Number.MAX_VALUE) ans = Math.min(ans, minLen + dp[i + 1]);
        m.set(sum, i);
    }
    return ans === Number.MAX_VALUE ? -1 : ans;
};