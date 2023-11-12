/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
    const need = [],
        remain = [];
    for (let i = 0; i < 3; ++i) {
        for (let j = 0; j < 3; ++j) {
            const stone = grid[i][j];
            if (stone === 0) need.push([i, j]);
            else if (stone > 1) remain.push([i, j, stone]);
        }
    }

    const calDis = (i, j, i1, j1) => Math.abs(i1 - i) + Math.abs(j1 - j);

    const copyA = (a) => {
        const ans = [];
        for (const el of a) ans.push([...el]);
        return ans;
    };

    const Try = (pos, remain) => {
        if (pos >= need.length) return 0;
        const [i, j] = need[pos];
        let min = Number.MAX_VALUE;
        for (let k = 0; k < remain.length; ++k) {
            const [iRemain, jRemain] = remain[k];
            const copy = copyA(remain);
            --copy[k][2];
            min = Math.min(
                min,
                calDis(i, j, iRemain, jRemain) +
                    Try(
                        pos + 1,
                        copy.filter(([_, __, s]) => s > 1)
                    )
            );
        }
        return min;
    };

    return Try(0, remain);
};
