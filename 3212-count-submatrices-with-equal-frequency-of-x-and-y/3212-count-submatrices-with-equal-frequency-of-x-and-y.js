/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    let ans = 0;
    const p = Array.from({ length: n }, () => Array(m).fill(0));
    const hasX = Array.from({ length: n }, () => Array(m).fill(false));
    let isNotEmpty = false;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            const val = grid[i][j];
            if (val === "X") hasX[i][j] = true;
            isNotEmpty = isNotEmpty || val !== ".";
            let tmp = val === "X" ? 1 : val === "Y" ? -1 : 0;
            if (i - 1 >= 0) {
                tmp += p[i - 1][j];
                hasX[i][j] |= hasX[i - 1][j];
            }
            if (j - 1 >= 0) {
                tmp += p[i][j - 1];
                hasX[i][j] |= hasX[i][j - 1];
            }
            if (i - 1 >= 0 && j - 1 >= 0) {
                tmp -= p[i - 1][j - 1];
                hasX[i][j] |= hasX[i - 1][j - 1];
            }
            p[i][j] = tmp;
            ans += !tmp && hasX[i][j] ? 1 : 0;
        }
    }
    return ans;
};
