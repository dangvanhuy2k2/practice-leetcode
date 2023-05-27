/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const n = nums.length;
    let ans = Array(n).fill(-1);
    let sum = 0, r = 0;
    while(r < Math.min(2 * k , n)) sum += nums[r++];
    let l = 0;
    const lenRequireWindown = 2 * k + 1;
    for(let mid = k; r < n; ++mid) {
        sum += nums[r++];
        ans[mid] = Math.floor(sum / lenRequireWindown);
        sum -= nums[l++];
    }
    return ans;
};