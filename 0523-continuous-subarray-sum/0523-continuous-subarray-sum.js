/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    const n = nums.length;
    const cache = new Map();
    cache.set(0, true);
    let remain = nums[0] % k;
    let save = remain;
    for (let i = 1; i < n; ++i) {
        const num = nums[i];
        remain += num % k;
        remain %= k;
        const target = remain % k;
        if (cache.has(target)) return true;
        cache.set(save, true);
        save = remain;
    }
    return false;
};
