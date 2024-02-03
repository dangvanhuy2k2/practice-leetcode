/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
    const n = arr.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        let j = i;
        let maxValue = 0;
        for (let u = 0; u < k && j >= 0; ++u) {
            maxValue = Math.max(maxValue, arr[j]);
            const len = i - j + 1;
            dp[i] = Math.max(
                dp[i],
                len * maxValue + (j - 1 >= 0 ? dp[j - 1] : 0)
            );
            --j;
        }
    }
    return dp[n - 1];
};
