/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    const p = Array.from({ length: n }, () => Array(m).fill(0));

    const cntDiv = (num, div) => {
        let cnt = 0;
        while (num && num % div === 0) {
            ++cnt;
            num /= div;
        }
        return cnt;
    };

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        let cntTwo = 0,
            cntFive = 0;
        for (let j = 0; j < m; ++j) {
            cntTwo += cntDiv(grid[i][j], 2);
            cntFive += cntDiv(grid[i][j], 5);
            p[i][j] = [cntTwo, cntFive];
            ans = Math.max(ans, Math.min(cntTwo, cntFive));
        }
    }
    for (let j = 0; j < m; ++j) {
        let cntTwo = 0,
            cntFive = 0;
        for (let i = 0; i < n; ++i) {
            cntTwo += cntDiv(grid[i][j], 2);
            cntFive += cntDiv(grid[i][j], 5);
            let a = cntTwo,
                b = cntFive;
            if (j - 1 >= 0) {
                a += p[i][j - 1][0];
                b += p[i][j - 1][1];
            }
            ans = Math.max(ans, Math.min(a, b));

            (a = cntTwo + p[i][m - 1][0] - p[i][j][0]),
                (b = cntFive + p[i][m - 1][1] - p[i][j][1]);
            ans = Math.max(ans, Math.min(a, b));
        }
    }

    for (let j = 0; j < m; ++j) {
        let cntTwo = 0,
            cntFive = 0;
        for (let i = n - 1; i >= 0; --i) {
            cntTwo += cntDiv(grid[i][j], 2);
            cntFive += cntDiv(grid[i][j], 5);
            let a = cntTwo,
                b = cntFive;
            if (j - 1 >= 0) {
                a += p[i][j - 1][0];
                b += p[i][j - 1][1];
            }
            ans = Math.max(ans, Math.min(a, b));

            (a = cntTwo + p[i][m - 1][0] - p[i][j][0]),
                (b = cntFive + p[i][m - 1][1] - p[i][j][1]);
            ans = Math.max(ans, Math.min(a, b));
        }
    }
    return ans;
};
