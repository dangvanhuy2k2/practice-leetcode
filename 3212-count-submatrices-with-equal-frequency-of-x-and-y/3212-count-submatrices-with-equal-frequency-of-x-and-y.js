/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    let ans = 0;
    const p = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => [0, 0])
    );
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            const c = grid[i][j];
            let x = 0,
                y = 0;
            if (c === "X") x = 1;
            else if (c === "Y") y = 1;
            if (i === 1 && j === 0) {
                console.log("log: ", p);
            }
            if (i - 1 >= 0) {
                x += p[i - 1][j][0];
                y += p[i - 1][j][1];
            }
            if (j - 1 >= 0) {
                x += p[i][j - 1][0];
                y += p[i][j - 1][1];
            }
            if (i - 1 >= 0 && j - 1 >= 0) {
                x -= p[i - 1][j - 1][0];
                y -= p[i - 1][j - 1][1];
            }
            p[i][j][0] = x;
            p[i][j][1] = y;
            ans += x === y && x > 0 ? 1 : 0;
        }
    }
    return ans;
};
