/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    const n = nums.length;
    const p = [];
    nums.sort((n1, n2) => n1 - n2);
    let sum = 0;
    for (const val of nums) {
        sum += val;
        p.push(sum);
    }
    let ans = 0;

    const bns = (i, val) => {
        let l = 0,
            r = i,
            max = 0;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            let curSum = p[i] - (m - 1 >= 0 ? p[m - 1] : 0);
            const needSum = (i - m + 1) * val;
            if (needSum - curSum <= k) {
                max = i - m + 1;
                r = m - 1;
            } else l = m + 1;
        }
        return max;
    };

    for (let i = 0; i < n; ++i) {
        const maxF = bns(i, nums[i]);
        ans = Math.max(maxF, ans);
    }
    return ans;
};
