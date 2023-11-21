/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
    const m = new Map();
    let ans = 0;
    const mod = 1e9 + 7;
    const rev = (val) => {
        return Number(String(val).split("").reverse().join(""));
    };
    for (const val of nums) {
        const d = val - rev(val);
        const sl = m.get(d) || 0;
        ans += sl;
        ans %= mod;
        m.set(d, sl + 1);
    }
    return ans;
};
