/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const n = nums.length;
    const dp = Array(n).fill(0);
    let max = 0;
    for (let i = 0; i < n; ++i) {
        dp[i] = nums[i] + (i - 2 < 0 ? 0 : dp[i - 2]);
        max = Math.max(max, dp[i]);
        dp[i] = max;
    }
    return max;
};
