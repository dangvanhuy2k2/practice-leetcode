/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
    const a = Array.from(new Set(nums));
    a.sort((n1, n2) => n1 - n2);
    let ans = Number.MAX_VALUE;
    const bns = (targetValue, l) => {
        let r = a.length - 1, idx = a.length;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (a[m] >= targetValue) {
                idx = Math.min(idx, m);
                r = m - 1;
            } else l = m + 1;
        }
        return idx;
    }
    for (let i = 0; i < a.length; i++) {
        const targetValue = a[i] + nums.length - 1;
        const idx = bns(targetValue, i + 1);
        let slNumValid = idx - i;
        if (idx < a.length && a[idx] === targetValue) ++slNumValid;
        ans = Math.min(ans, nums.length - slNumValid);
    }
    return ans;

};