/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function (arr, d) {
    const a = [];
    const n = arr.length;
    for (let i = 0; i < n; ++i) a.push([i, arr[i]]);
    a.sort((el1, el2) => {
        if (el1[1] !== el2[1]) return el2[1] - el1[1];
        return el1[1] - el2[1];
    });

    const cache = Array.from({ length: n }, () => Array(n).fill(-1));
    for (let i = 0; i < n; ++i) {
        let max = 0;
        for (let j = i; j < n; ++j) {
            max = Math.max(max, arr[j]);
            cache[i][j] = max;
        }
    }

    const dp = Array(n).fill(1);
    let max = 1;
    for (let i = 0; i < n; ++i) {
        const [idx1, val1] = a[i];
        for (let j = i + 1; j < n; ++j) {
            const [idx2, val2] = a[j];
            const dif = Math.abs(idx1 - idx2);
            if (val1 === val2 || dif > d) continue;
            let start, end;
            if (idx1 < idx2) {
                start = idx1 + 1;
                end = idx2;
            } else {
                start = idx2;
                end = idx1 - 1;
            }
            if (cache[start][end] >= val1) continue;
            dp[j] = Math.max(dp[j], dp[i] + 1);
            max = Math.max(max, dp[j]);
        }
    }

    return max;
};
