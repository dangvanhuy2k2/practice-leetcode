/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
    const m = new Map();
    for (const num of nums) {
        const sl = m.get(num) || 0;
        m.set(num, sl + 1);
    }
    const n = moveFrom.length;
    for (let i = 0; i < n; ++i) {
        const from = moveFrom[i],
            to = moveTo[i];
        const sl = m.get(from) || 0;
        m.set(from, 0);
        m.set(to, (m.get(to) || 0) + sl);
    }

    const ans = [];
    for (const [key, value] of m.entries()) {
        if (value === 0) continue;
        ans.push(key);
    }
    ans.sort((n1, n2) => n1 - n2);
    return ans;
};
