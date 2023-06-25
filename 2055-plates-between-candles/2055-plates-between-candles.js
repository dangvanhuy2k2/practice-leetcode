/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
    const posCandle = [];
    for (let i = 0; i < s.length; ++i) {
        const c = s.charAt(i);
        if (c === "*") continue;
        posCandle.push(i);
    }
    let numPlate = 0,
        i = 0;
    const prefix = [];
    for (let j = 0; j < s.length; ++j) {
        const c = s.charAt(j);
        numPlate += c === "*" ? 1 : 0;
        if (posCandle[i] !== j) continue;
        ++i;
        prefix.push(numPlate);
    }
    const findFirstIdx = (posFind) => {
        let l = 0,
            r = posCandle.length - 1,
            idx = -1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (posCandle[m] >= posFind) {
                idx = idx === -1 ? m : Math.min(idx, m);
                r = m - 1;
            } else l = m + 1;
        }
        return idx;
    };
    const findLastIdx = (posFind) => {
        let l = 0,
            r = posCandle.length - 1,
            idx = -1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (posCandle[m] <= posFind) {
                idx = idx === -1 ? m : Math.max(idx, m);
                l = m + 1;
            } else r = m - 1;
        }
        return idx;
    };

    return queries.map(([l, r]) => {
        const idxLeft = findFirstIdx(l);
        const idxRight = findLastIdx(r);
        if (
            idxLeft === -1 ||
            idxRight === -1 ||
            posCandle[idxLeft] > r ||
            posCandle[idxRight] < l
        )
            return 0;
        return prefix[idxRight] - prefix[idxLeft];
    });
};
