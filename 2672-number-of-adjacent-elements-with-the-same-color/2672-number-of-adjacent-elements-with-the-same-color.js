/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function (n, queries) {
    const isSameColor = Array(n).fill(false);
    const color = Array(n).fill(0);
    const ans = [];
    let cnt = 0;
    const isValidIdx = (i) => i >= 0 && i < n;
    for (const [i, c] of queries) {
        color[i] = c;
        for (let add = -1; add <= 1; add += 2) {
            const newIdx = i + add;
            if (!isValidIdx(newIdx)) continue;
            const minIdx = Math.min(i, newIdx);
            if (color[i] === color[newIdx]) {
                cnt += isSameColor[minIdx] ? 0 : 1;
                isSameColor[minIdx] = true;
            } else {
                cnt -= isSameColor[minIdx] ? 1 : 0;
                isSameColor[minIdx] = false;
            }
        }
        ans.push(cnt);
    }
    return ans;
};