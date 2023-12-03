/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    const findDir = (p1, p2) => {
        if (p1 < p2) return 1;
        if (p1 > p2) return -1;
        return 0;
    };
    function tinhKhoangCach(x1, y1, x2, y2) {
        const dx = findDir(x1, x2);
        const dy = findDir(y1, y2);
        let cnt = 0;
        while (x1 !== x2 && y1 !== y2) {
            x1 += dx;
            y1 += dy;
            ++cnt;
        }
        return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2)) + cnt;
    }
    let ans = 0;
    for (let i = 1; i < points.length; ++i) {
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];
        ans += tinhKhoangCach(x1, y1, x2, y2);
    }
    return ans;
};
