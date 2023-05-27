/**
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function (segments) {
    const maxLen = segments.reduce((acc, [_, right]) => Math.max(right, acc), 0);
    const isAdd = Array(maxLen + 2).fill(false);
    const prefix = Array(maxLen + 2).fill(0);
    prefix[maxLen + 2] = -1;
    let start = Number.MAX_VALUE;
    for (let i = 0; i < segments.length; ++i) {
        const [l, r, c] = segments[i];
        isAdd[l] = true;
        isAdd[r] = true;
        prefix[l] += c;
        prefix[r] -= c;
        start = Math.min(start, l);
    }
    isAdd[start] = false;
    let ans = [], sum = 0;
    for (let i = start; i <= maxLen; ++i) {
        if (isAdd[i]) {
            if(sum !== 0) ans.push([start, i, sum]);
            start = i;
        }
        sum += prefix[i];
    }
    return ans;
};