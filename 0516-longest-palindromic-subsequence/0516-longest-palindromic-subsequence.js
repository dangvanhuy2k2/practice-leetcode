/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < n;

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i; j < n; ++j) {
            let maxSimilar = 0;
            if (s.charAt(i) === s.charAt(j)) {
                maxSimilar = i === j ? 1 : 2;
            }

            if (isValid(i + 1, j - 1)) maxSimilar += dp[i + 1][j - 1];
            if (isValid(i, j - 1))
                maxSimilar = Math.max(maxSimilar, dp[i][j - 1]);
            if (isValid(i + 1, j))
                maxSimilar = Math.max(maxSimilar, dp[i + 1][j]);

            dp[i][j] = maxSimilar;
        }
    }
    return dp[0][n - 1];
};
