/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const m = new Map();
    nums.forEach((val) => m.set(val, (m.get(val) || 0) + 1));
    let ans = 0;
    for (const sl of m.values()) {
        if (sl == 1) return -1;
        const min = Math.min(
            Math.floor(sl / 2),
            Math.floor(sl / 3) + (sl % 3 ? 1 : 0)
        );
        ans += min;
    }
    return ans;
};
