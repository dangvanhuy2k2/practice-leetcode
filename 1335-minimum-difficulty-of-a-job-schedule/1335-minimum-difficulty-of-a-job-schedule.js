/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    const n = jobDifficulty.length;
    const dp = Array.from({ length: d + 1 }, () => Array(n).fill(-1));
    dp[1][0] = jobDifficulty[0];
    for (let j = 1; j < n; j++)
        dp[1][j] = Math.max(dp[1][j - 1], jobDifficulty[j]);

    for (let i = 2; i <= d; ++i) {
        for (let j = 0; j < n; ++j) {
            let max = 0,
                min = Number.MAX_VALUE;
            let tmp = j;
            while(tmp + 1 >= i && tmp - 1 >= 0) {
                max = Math.max(max, jobDifficulty[tmp]);
                min = Math.min(min, max + dp[i - 1][tmp - 1]);
                --tmp;
            }
            dp[i][j] = min === Number.MAX_VALUE ? -1 : min;
        }
    }
    return dp[d][n - 1];
};
