/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    const MIN = -1e6,
        MAX = 1e6;
    let s = lower,
        e = upper;
    const findStart = (d) => {
        let newStart = MAX,
            l = s,
            r = e;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (d + m >= lower) {
                newStart = newStart === -1 ? m : Math.min(newStart, m);
                r = m - 1;
            } else l = m + 1;
        }
        return newStart;
    };

    const findEnd = (d) => {
        let newEnd = MIN,
            l = s,
            r = e;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (d + m <= upper) {
                newEnd = Math.max(newEnd, m);
                l = m + 1;
            } else r = m - 1;
        }
        return newEnd;
    };

    for (const d of differences) {
        const validS = findStart(d);
        const validE = findEnd(d);
        if (validS === MAX || validE === MIN) return 0;
        s = validS + d;
        e = validE + d;
    }

    return e - s + 1;
};
