/**
 * @param {number} low
 * @param {number} high
 * @param {number} one
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    const mod = 1e9 + 7;
    let ans = 0;
    for (let len = 1; len <= high; ++len) {
        if (len - zero >= 0) dp[len] += dp[len - zero];
        if (len - one >= 0) dp[len] += dp[len - one];
        dp[len] %= mod;
        if (len < low) continue;
        ans += dp[len];
        ans %= mod;
    }
    return ans;
};