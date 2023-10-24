/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
var countPairs = function (coordinates, k) {
    let ans = 0;
    const m = new Map();
    const createKey = (x, y) => `${x}:${y}`;
    for (const [x, y] of coordinates) {
        const key = createKey(x, y);
        m.set(key, (m.get(key) || 0) + 1);
    }
    for (const [x1, y1] of coordinates) {
        const key = createKey(x1, y1);
        m.set(key, m.get(key) - 1);
        for (let n1 = 0; n1 <= k; ++n1) {
            const n2 = k - n1;
            const y2 = n2 ^ y1;
            const x2 = n1 ^ x1;
            ans += m.get(createKey(x2, y2)) || 0;
        }
    }
    return ans;
};
