/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function (nums, target) {
    const n = nums.length;
    const dp = Array.from({ length: target + 1 }, () => Array(n).fill(0));
    for (let i = 1; i <= target; ++i) {
        let len = 0;
        for (let j = 0; j < n; ++j) {
            const need = i - nums[j];
            if (need === 0) len = Math.max(len, 1);
            else {
                if (need > 0 && j - 1 >= 0 && dp[need][j - 1] > 0)
                    len = Math.max(len, 1 + dp[need][j - 1]);
            }
            dp[i][j] = len;
        }
    }
    return dp[target][n - 1] || -1;
};
