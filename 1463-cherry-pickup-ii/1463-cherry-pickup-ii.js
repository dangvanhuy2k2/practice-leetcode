/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function (grid) {
    const n = grid.length,
        m = grid[0].length;
    const dy = [-1, 0, 1];
    const dp = Array.from({ length: n * m + 5 }, () =>
        Array(n * m + 5).fill(-1)
    );
    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;
    const convertToNum = (i, j) => i * m + j;
    const createNewPos = (i, j) =>
        dy.map((add) => [i + 1, j + add]).filter(([r, c]) => isValid(r, c));
    const calCherry = (x1, y1, x2, y2) =>
        grid[x1][y1] + (x1 !== x2 || y1 !== y2 ? grid[x2][y2] : 0);
    const dfs = (x1, y1, x2, y2) => {
        if (x1 >= n) return 0;
        const n1 = convertToNum(x1, y1),
            n2 = convertToNum(x2, y2);
        if (dp[n1][n2] !== -1) return dp[n1][n2];
        const a = createNewPos(x1, y1);
        const b = createNewPos(x2, y2);
        let max = 0;
        for (const [x1New, y1New] of a) {
            for (const [x2New, y2New] of b) {
                const cherry = calCherry(x1New, y1New, x2New, y2New);
                max = Math.max(max, dfs(x1New, y1New, x2New, y2New) + cherry);
            }
        }
        dp[n1][n2] = max;
        return max;
    };
    return calCherry(0, 0, 0, m - 1) + dfs(0, 0, 0, m - 1);
};
