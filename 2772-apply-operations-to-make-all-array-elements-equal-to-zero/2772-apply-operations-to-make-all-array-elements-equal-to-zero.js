/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
    const n = nums.length;
    const prefix = Array(n + 1).fill(0);
    let sum = 0;
    for (let i = 0; i < n; ++i) {
        sum += prefix[i];
        nums[i] += sum;
        if (nums[i] < 0) return 0;
        if (nums[i] !== 0 && i + k > n) return false;
        sum -= nums[i];
        prefix[i + k] += nums[i];
    }
    return true;
};
