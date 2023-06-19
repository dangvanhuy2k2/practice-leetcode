/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const n = points.length,
        m = points[0].length;
    let ans = points[0].reduce((acc, val) => Math.max(acc, val));
    const pick = (i, j) => {
        let maxPoint = 0;
        for (let c = 0; c < m; ++c) {
            maxPoint = Math.max(maxPoint, points[i - 1][c] - Math.abs(c - j));
        }
        points[i][j] += maxPoint;
        ans = Math.max(ans, points[i][j]);
    };
    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < m; ++j) pick(i, j);
    }
    return ans;
};