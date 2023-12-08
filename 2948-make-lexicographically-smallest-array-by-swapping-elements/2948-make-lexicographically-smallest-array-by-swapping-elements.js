/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    const a = [];
    nums.forEach((val, i) => a.push([val, i]));
    a.sort(([val1], [val2]) => val1 - val2);
    a.push([Number.MAX_VALUE, -1]);
    let lastI = 0;
    for (let i = 1; i < a.length; ++i) {
        const [prevVal] = a[i - 1];
        const [curVal] = a[i];
        if (curVal - prevVal > limit) {
            const b = a.slice(lastI, i).map(([_, index]) => index);
            b.sort((n1, n2) => n1 - n2);
            for (let j = 0; j < b.length; j++) {
                nums[b[j]] = a[lastI++][0];
            }
        }
    }
    return nums;
};
