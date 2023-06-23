/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    const n = grid.length;
    let l = 0,
        r = n ** 2,
        ans = 1e9;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    const isValid = (i, j) => i >= 0 && j >= 0 && i < n && j < n;

    let visit = Array.from({ length: n }, () => Array(n).fill(false));

    const canSwim = (i, j, depth) => {
        if (!isValid(i, j) || visit[i][j]) return false;
        const elevation = grid[i][j];
        if (elevation > depth) return false;
        if (i === n - 1 && j === n - 1) return true;
        visit[i][j] = true;
        for (let k = 0; k < 4; ++k) {
            const iNew = i + dx[k];
            const jNew = j + dy[k];
            if (!canSwim(iNew, jNew, depth)) continue;
            return true;
        }
        return false;
    };
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        visit = Array.from({ length: n }, () => Array(n).fill(false));
        if (canSwim(0, 0, m)) {
            ans = Math.min(ans, m);
            r = m - 1;
        } else l = m + 1;
    }
    return ans;
};
