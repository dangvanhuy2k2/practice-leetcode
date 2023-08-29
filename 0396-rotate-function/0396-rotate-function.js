/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    let f = 0,
        sum = 0;
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        const val = nums[i];
        f += i * val;
        sum += val;
    }
    let ans = f;
    let i = n - 1;
    while (i >= 1) {
        sum -= nums[i];
        f = f + sum - nums[i] * (n - 1);
        ans = Math.max(ans, f);
        sum += nums[i];
        --i;
    }
    return ans;
};
