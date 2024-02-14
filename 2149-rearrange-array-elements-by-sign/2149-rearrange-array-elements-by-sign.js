/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let l = 0,
        r = 0;
    const ans = [];
    while (l < nums.length && r < nums.length) {
        while (nums[l] < 0) {
            ++l;
        }
        while (nums[r] > 0) {
            ++r;
        }
        ans.push(nums[l++], nums[r++]);
    }
    return ans;
};
