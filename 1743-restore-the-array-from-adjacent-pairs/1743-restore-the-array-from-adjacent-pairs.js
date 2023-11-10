/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    const m = new Map();
    const addMap = (u, v) => {
        const a = m.get(u) || [];
        a.push(v);
        m.set(u, a);
    };
    for (const [u, v] of adjacentPairs) {
        addMap(u, v);
        addMap(v, u);
    }
    const s = new Set();
    let f;
    for (const [key, val] of m.entries()) {
        if (val.length > 1) continue;
        f = key;
        break;
    }
    s.add(f);
    const ans = [f];
    while (true) {
        const a = m.get(f);
        let isLast = true;
        for (const val of a) {
            if (s.has(val)) continue;
            s.add(val);
            ans.push(val);
            f = val;
            isLast = false;
            break;
        }
        if (isLast) break;
    }
    return ans;
};
