/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const n = grid.length, m = grid[0].length;
    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;
    const dfs = (i, j) => {
        if (!isValid(i, j) || !grid[i][j]) return 0;
        let cnt = grid[i][j];
        grid[i][j] = 0;
        for (let k = 0; k < dx.length; ++k) {
            const iNew = dx[k] + i;
            const jNew = dy[k] + j;
            cnt += dfs(iNew, jNew);
        }
        return cnt;
    }
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) ans = Math.max(ans, dfs(i, j));
    }
    return ans;
};