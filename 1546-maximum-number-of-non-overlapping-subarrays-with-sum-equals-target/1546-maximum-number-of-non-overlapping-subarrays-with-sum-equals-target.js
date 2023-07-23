/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
    let sum = 0,
        ans = 0;
    const m = new Map();
    m.set(0, true);
    for (const val of nums) {
        sum += val;
        const minus = sum - target;
        if (m.has(minus)) {
            ++ans;
            m.clear();
            sum = 0;
            m.set(0, true);
        } else m.set(sum, true);
    }
    return ans;
};
