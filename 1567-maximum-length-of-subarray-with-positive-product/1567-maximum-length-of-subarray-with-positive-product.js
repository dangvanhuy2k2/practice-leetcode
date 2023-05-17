/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
    const n = nums.length;
    let cntNumPos = 0, cntNumNeg = 0, ans = 0;
    for (const num of nums) {
        if (!num) {
            cntNumPos = cntNumNeg = 0;
        }
        else if (num > 0) {
            ++cntNumPos;
            cntNumNeg += cntNumNeg > 0 ? 1 : 0;
        } else {
            const save = cntNumNeg;
            cntNumNeg = cntNumPos + 1;
            cntNumPos = save > 0 ? save + 1 : 0;
        }
        ans = Math.max(ans, cntNumPos);
    }
    return ans;
};