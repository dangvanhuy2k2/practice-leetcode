/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
    const n = nums1.length;

    const countSwap = (a, b, max1, max2) => {
        const swap = Array(n).fill(false);
        for (let i = 0; i < n - 1; ++i) {
            if (a[i] <= max1) continue;
            if (a[i] > max2 || b[i] > max1) return Number.MAX_VALUE;
            swap[i] = true;
        }

        for (let i = 0; i < n - 1; ++i) {
            if (b[i] <= max2) continue;
            if (b[i] > max1 || a[i] > max2) return Number.MAX_VALUE;
            swap[i] = true;
        }
        return swap.reduce((acc, b) => acc + (b ? 1 : 0));
    };
    const maxS1 = nums1[nums1.length - 1];
    const maxS2 = nums2[nums2.length - 1];
    const ans = Math.min(
        countSwap(nums1, nums2, maxS1, maxS2),
        countSwap(nums1, nums2, maxS2, maxS1) + 1
    );
    return ans === Number.MAX_VALUE ? -1 : ans;
};
