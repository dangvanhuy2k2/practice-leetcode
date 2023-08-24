/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
    console.log(s.length);
    const n = s.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < n;
    let max = 0;
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i; j < n; ++j) {
            if (s.charAt(i) === s.charAt(j)) {
                if (i === j) dp[i][j] = 1;
                else dp[i][j] = 2;
            }
            if (isValid(i + 1, j - 1)) dp[i][j] += dp[i + 1][j - 1];
            if (isValid(i, j - 1)) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
            if (isValid(i + 1, j)) dp[i][j] = Math.max(dp[i][j], dp[i + 1][j]);
            
            max = Math.max(max,  dp[i][j])
        }
    }
    return n - max;
};
