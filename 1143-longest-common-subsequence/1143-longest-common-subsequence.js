/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const n = text1.length,
        m = text2.length;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = n - 1; i >= 0; --i) {
        for (let j = m - 1; j >= 0; --j) {
            dp[i][j] = text1.charAt(i) === text2.charAt(j) ? 1 : 0;
            if (i + 1 < n && j + 1 < m) dp[i][j] += dp[i + 1][j + 1];
            let max = 0;
            if (j + 1 < m) max = dp[i][j + 1];
            if (i + 1 < n) max = Math.max(max, dp[i + 1][j]);
            dp[i][j] = Math.max(max, dp[i][j]);
        }
    }
    return dp[0][0];
};
