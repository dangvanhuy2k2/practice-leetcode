/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDifference = function (nums, queries) {
    const a = Array.from({ length: 101 }, () => []);

    for (let i = 0; i < nums.length; ++i) {
        const val = nums[i];
        a[val].push(i);
    }

    const bns = (left, right, val) => {
        let l = 0,
            r = a[val].length - 1;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const idx = a[val][m];
            if (idx < left) l = m + 1;
            else if (idx > right) r = m - 1;
            else return true;
        }
        return false;
    };
    const ans = [];
    for (const [l, r] of queries) {
        let prev = -1,
            kq = Number.MAX_VALUE;
        for (let i = 1; i <= 100; ++i) {
            if (!bns(l, r, i)) continue;
            if (prev !== -1) kq = Math.min(kq, i - prev);
            prev = i;
        }
        ans.push(kq === Number.MAX_VALUE ? -1 : kq);
    }
    return ans;
};
