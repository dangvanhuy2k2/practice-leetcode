/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    const mark = Array(10 ** 5 + 1).fill(0);
    let ans = 0,
        max = 0;
    for (const num of nums) {
        ++mark[num];
        max = Math.max(max, num);
    }
    for (let i = 0; i < mark.length - 1; ++i) {
        const add = Math.max(mark[i] - 1, 0);
        ans += add;
        mark[i + 1] += add;
    }
    if (mark[mark.length - 1]) {
        for (let i = mark[mark.length - 1] - 1; i >= 1; --i) ans += i;
    }
    return ans;
};
