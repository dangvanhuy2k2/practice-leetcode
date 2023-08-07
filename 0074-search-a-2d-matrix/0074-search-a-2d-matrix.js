/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const n = matrix.length,
        m = matrix[0].length;
    let l = 0,
        r = n * m - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const row = Math.floor(mid / m);
        const col = mid % m;
        const val = matrix[row][col];
        if (val === target) return true;
        if (val < target) l = mid + 1;
        else r = mid - 1;
    }
    return false;
};
