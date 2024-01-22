/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length;
    const m = Array(n + 1).fill(0);
    nums.forEach((val) => ++m[val]);
    const ans = [0, 0];
    for (let i = 0; i <= n; ++i) {
        if (m[i] === 1) continue;
        ans[m[i] == 2 ? 0 : 1] = i;
    }
    return ans;
};
