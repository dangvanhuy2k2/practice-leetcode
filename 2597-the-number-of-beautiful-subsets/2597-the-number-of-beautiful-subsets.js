/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    nums.sort((n1, n2) => n1 - n2);

    const a = [];
    const bns = (target) => {
        let l = 0,
            r = a.length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const val = a[m];
            if (val === target) return true;
            else if (val < target) l = m + 1;
            else r = m - 1;
        }
        return false;
    };
    let ans = 0;
    const backtrack = (pos) => {
        if (pos >= nums.length) return;
        backtrack(pos + 1);
        const has = bns(nums[pos] - k);
        if (has) return;
        ++ans;
        a.push(nums[pos]);
        backtrack(pos + 1);
        a.pop();
    };

    backtrack(0);
    return ans;
};
