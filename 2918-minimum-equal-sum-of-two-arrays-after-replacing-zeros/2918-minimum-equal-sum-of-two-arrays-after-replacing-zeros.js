/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
    let n1 = 0,
        n2 = 0;
    for (const val of nums1) n1 += val === 0 ? 1 : 0;
    for (const val of nums2) n2 += val === 0 ? 1 : 0;

    const sum1 = nums1.reduce((acc, val) => acc + val, 0);
    const sum2 = nums2.reduce((acc, val) => acc + val, 0);
    if (n1 === n2 && n1 === 0) return sum1 === sum2 ? sum1 : -1;
    if (n1 === 0) {
        const need = sum1 - sum2;
        return need >= n2 ? sum1 : -1;
    }

    if (n2 === 0) {
        const need = sum2 - sum1;
        return need >= n1 ? sum2 : -1;
    }

    return Math.max(sum1 + n1, sum2 + n2);
};
