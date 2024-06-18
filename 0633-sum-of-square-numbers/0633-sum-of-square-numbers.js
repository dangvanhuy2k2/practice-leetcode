/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    const isSquare = (num) => {
        let l = 0,
            r = num;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const tmp = m * m;
            if (tmp === num) return true;
            if (tmp < num) l = m + 1;
            else r = m - 1;
        }
        return false;
    };
    let i = 0;
    while (i * i <= c) {
        if (isSquare(c - i * i)) return true;
        ++i;
    }
    return false;
};
