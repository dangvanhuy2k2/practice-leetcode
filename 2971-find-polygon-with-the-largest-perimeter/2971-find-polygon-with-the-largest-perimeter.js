/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((n1, n2) => n1 - n2);
    let sum = 0,
        ans = -1;
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 >= 3 && sum > nums[i]) {
            ans = Math.max(ans, sum + nums[i]);
        }
        sum += nums[i];
    }
    return ans;
};
