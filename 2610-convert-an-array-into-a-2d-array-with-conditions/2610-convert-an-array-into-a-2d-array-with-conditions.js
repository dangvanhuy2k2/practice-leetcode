/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const n = nums.length;
    const m = Array(n + 1).fill(0);
    let maxRow = 0;
    nums.forEach((val) => {
        ++m[val];
        maxRow = Math.max(maxRow, m[val]);
    });
    const ans = Array.from({ length: maxRow }, () => []);
    for (let i = 1; i <= n; ++i) {
        while (m[i]) {
            ans[m[i] - 1].push(i);
            --m[i];
        }
    }
    return ans;
};
