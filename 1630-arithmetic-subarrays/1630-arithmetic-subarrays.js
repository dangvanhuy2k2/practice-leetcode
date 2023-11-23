/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    const isValid = (left, right) => {
        if (right - left + 1 < 2) return false;
        const a = nums.slice(left, right + 1);
        a.sort((n1, n2) => n1 - n2);
        const d = a[1] - a[0];
        for (let i = 2; i < a.length; ++i) {
            if (a[i] - a[i - 1] !== d) return false;
        }
        return true;
    };

    return l.map((left, i) => isValid(left, r[i]));
};
