/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (row, col, cells) {
    let firstDay = 0,
        lastDay = cells.length,
        ans = 0;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    let grid = [];

    const isValid = (i, j) => i >= 0 && i < row && j >= 0 && j < col;

    const bfs = (day) => {
        grid = Array.from({ length: row }, () => Array(col).fill(0));
        for (let i = 0; i < day; ++i) {
            const [r, c] = cells[i];
            grid[r - 1][c - 1] = 1;
        }
        const q = [];
        for (let j = 0; j < col; ++j) {
            if (grid[0][j] === 1) continue;
            q.push([0, j]);
        }

        while (q.length) {
            const top = q.shift();
            const [i, j] = top;
            if (i >= row - 1) return true;
            for (let k = 0; k < 4; ++k) {
                const iNew = i + dx[k];
                const jNew = j + dy[k];
                if (!isValid(iNew, jNew) || grid[iNew][jNew] === 1) continue;
                grid[iNew][jNew] = 1;
                q.push([iNew, jNew]);
            }
        }
        return false;
    };

    while (firstDay <= lastDay) {
        const day = Math.floor((firstDay + lastDay) / 2);
        if (bfs(day)) {
            ans = Math.max(ans, day);
            firstDay = day + 1;
        } else lastDay = day - 1;
    }
    return ans;
};
