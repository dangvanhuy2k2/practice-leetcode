/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const m = new Map();
    for (const val of nums) m.set(val, (m.get(val) || 0) + 1);
    const freq = [...m.entries()].sort((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return b[0] - a[0];
    });
    const ans = [];
    for (const [val, sl] of freq) {
        for (let i = 0; i < sl; ++i) ans.push(val);
    }
    return ans;
};
