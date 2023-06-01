/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
    const n = grid.length, m = grid[0].length;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));
    for (let i = 0; i < n; ++i) dp[i][0] = 1;
    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;
    const dir = [[0, -1], [1, -1], [-1, -1]];

    const findMaxPath = (i, j) => {
        let maxStep = 0;
        for (const [dx, dy] of dir) {
            const iNew = i + dx, jNew = j + dy;
            if (!isValid(iNew, jNew) || !dp[iNew][jNew]) continue;
            if (grid[iNew][jNew] >= grid[i][j]) continue;
            maxStep = Math.max(maxStep, dp[iNew][jNew] + 1);
        }
        return maxStep;
    }
    let ans = 1;
    for (let j = 1; j < m; ++j) {
        for (let i = 0; i < n; ++i) {
            dp[i][j] = findMaxPath(i, j);
            ans = Math.max(ans, dp[i][j]);
        }
    }
    console.log(dp)
    return ans - 1;
};