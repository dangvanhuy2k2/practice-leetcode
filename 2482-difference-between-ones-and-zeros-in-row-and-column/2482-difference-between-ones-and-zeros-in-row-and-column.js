/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    const cols = Array(n).fill(0);
    const rows = Array(m).fill(0);

    for (let i = 0; i < n; ++i) {
        let cnt = 0;
        for (let j = 0; j < m; ++j) cnt += grid[i][j];
        rows[i] = cnt;
    }

    for (let j = 0; j < m; ++j) {
        let cnt = 0;
        for (let i = 0; i < n; ++i) cnt += grid[i][j];
        cols[j] = cnt;
    }

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            const d = cols[j] + rows[i] - (n - rows[i]) - (m - cols[j]);
            grid[i][j] = d;
        }
    }
    return grid;
};
