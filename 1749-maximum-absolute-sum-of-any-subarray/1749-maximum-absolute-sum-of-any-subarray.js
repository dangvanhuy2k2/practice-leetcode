/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
    const n = nums.length;
    const min = Array(n).fill(Number.MAX_VALUE);
    const max = Array(n).fill(Number.MIN_VALUE);
    min[0] = max[0] = nums[0];
    let ans = Math.abs(nums[0]);
    for (let i = 1; i < n; ++i) {
        const val = nums[i];
        min[i] = Math.min(min[i - 1] + val, val);
        max[i] = Math.max(max[i - 1] + val, val);
        ans = Math.max(ans, Math.abs(max[i]), Math.abs(min[i]));
    }
    return ans; 
};