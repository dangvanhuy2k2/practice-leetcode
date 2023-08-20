/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
    let curMax = nums.pop();
    let ans = curMax;
    for (let i = nums.length - 1; i >= 0; --i) {
        if (curMax < nums[i]) {
            curMax = nums[i];
        } else {
            curMax += nums[i];
        }
        ans = Math.max(ans, curMax);
    }
    return ans;
};
