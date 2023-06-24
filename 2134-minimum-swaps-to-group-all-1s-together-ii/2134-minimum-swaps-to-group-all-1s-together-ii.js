/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    const sizeWindow = nums.reduce((acc, val) => acc + val, 0);
    if(sizeWindow === 0) return 0;
    let l = 0,
        cntZero = 0,
        ans = 1e8;
    for (let r = 0; r < nums.length; ++r) {
        cntZero += Math.abs(nums[r] - 1);
        const len = r - l + 1;
        if (len < sizeWindow) continue;
        ans = Math.min(ans, cntZero);
        cntZero -= Math.abs(nums[l++] - 1);
    }
    let r = 0;
    while(l < nums.length) {
        cntZero += Math.abs(nums[r++] - 1);
        ans = Math.min(ans, cntZero);
        cntZero -= Math.abs(nums[l++] - 1);
    }
    return ans;
};
