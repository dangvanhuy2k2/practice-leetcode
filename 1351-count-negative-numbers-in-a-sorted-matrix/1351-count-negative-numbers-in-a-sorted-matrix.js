/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    const bns = a => {
        let l = 0, r = a.length - 1, minIdx = a.length;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (a[m] < 0) {
                minIdx = Math.min(minIdx, m);
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return a.length - minIdx;
    }

    return grid.reduce((acc, r) => acc + bns(r), 0);
};