/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
    const n = heights.length;
    const ans = Array(n).fill(0);
    const s = [];
    const getHeightTop = () => heights[s[s.length - 1]];
    for (let i = 0; i < n; ++i) {
        const h = heights[i];
        while (s.length && getHeightTop() < h) {
            const idxTop = s.pop();
            ++ans[idxTop];
        }
        if(s.length) {
            const idxTop = s[s.length - 1];
            ++ans[idxTop];
        }
        s.push(i);
    }
    return ans;
};