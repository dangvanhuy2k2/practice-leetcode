/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
    const n = mat.length,
        m = mat[0].length;
    const isInValid = (i, j) => i < 0 || j < 0 || i >= n || j >= m;

    const prefix = Array.from({ length: n }, () => Array(m).fill(0));

    const updatePrefix = (i, j) => {
        let sum = mat[i][j];
        if (!isInValid(i - 1, j)) sum += prefix[i - 1][j];
        if (!isInValid(i, j - 1)) sum += prefix[i][j - 1];
        if (!isInValid(i - 1, j - 1)) sum -= prefix[i - 1][j - 1];

        prefix[i][j] = sum;
    };

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) updatePrefix(i, j);
    }

    const ans = Array.from({ length: n }, () => Array(m).fill(0));

    const updateAns = (i, j) => {
        let iMax = Math.min(i + k, n - 1),
            jMax = Math.min(j + k, m - 1);
        let iMin = Math.max(0, i - k),
            jMin = Math.max(0, j - k);

        let sum = prefix[iMax][jMax];
        if (!isInValid(iMin - 1, jMax)) sum -= prefix[iMin - 1][jMax];
        if (!isInValid(iMax, jMin - 1)) sum -= prefix[iMax][jMin - 1];
        if (!isInValid(iMin - 1, jMin - 1)) sum += prefix[iMin - 1][jMin - 1];
        ans[i][j] = sum;
    };

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) updateAns(i, j);
    }

    return ans;
};
