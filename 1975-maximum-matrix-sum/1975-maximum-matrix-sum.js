/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    let cnt = 0,
        sum = 0,
        minVal = Number.MAX_VALUE;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            const val = Math.abs(matrix[i][j]);
            cnt += matrix[i][j] < 0 ? 1 : 0;
            sum += val;
            minVal = Math.min(minVal, val);
        }
    }
    if (cnt % 2 === 0) return sum;
    return sum - 2 * minVal;
};
