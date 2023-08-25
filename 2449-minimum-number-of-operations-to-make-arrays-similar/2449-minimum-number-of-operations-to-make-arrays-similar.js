/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
var makeSimilar = function (nums, target) {
    nums.sort((n1, n2) => n1 - n2);
    target.sort((n1, n2) => n1 - n2);

    const findMax = (du) => {
        const a = nums.filter((val) => val % 2 === du);
        const b = target.filter((val) => val % 2 === du);
        let ans = 0;
        for (let i = 0; i < a.length; ++i) {
            const dif = a[i] - b[i];
            if (dif <= 0) continue;
            ans += dif / 2;
        }
        return ans;
    };

    return findMax(1) + findMax(0);
};
