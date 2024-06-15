/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function (nums1, nums2) {
    nums1.sort((n1, n2) => n1 - n2);
    nums2.sort((n1, n2) => n1 - n2);

    const find = (i, j) => {
        let m = 0,
            n = 0,
            prevAdd = Number.MAX_VALUE;
        while (m < nums1.length && n < nums2.length) {
            while (m === i || m === j) ++m;
            const add = nums2[n] - nums1[m];
            if (prevAdd !== Number.MAX_VALUE) {
                if (prevAdd !== add) return Number.MAX_VALUE;
            }
            prevAdd = add;
            ++m, ++n;
        }
        return prevAdd;
    };
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = i + 1; j < nums1.length; ++j) {
            ans = Math.min(ans, find(i, j));
        }
    }
    return ans;
};
