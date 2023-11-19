/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    nums.sort((n1, n2) => n2 - n1);
    let p = 0,
        ans = 0;
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (p !== val) {
            ans += i;
        }
        p = val;
    }
    return ans;
};
