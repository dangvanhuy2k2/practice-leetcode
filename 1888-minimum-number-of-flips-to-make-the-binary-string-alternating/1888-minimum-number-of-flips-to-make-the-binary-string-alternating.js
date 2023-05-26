/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n }, () => []);
    let start0 = 0, start1 = 0;
    for (let i = n - 1; i >= 0; i--) {
        const digit = s.charAt(i);
        const save = start0;
        start0 = start1 + (digit === '0' ? 0 : 1);
        start1 = save + (digit === '1' ? 0 : 1);
        dp[i].push(start0, start1);
    }
    let ans = Number.MAX_VALUE;
    start0 = 0, start1 = 0;
    for (let i = 0; i < n; ++i) {
        const len = n - i;
        if (len % 2 === 0) {
            ans = Math.min(ans, dp[i][0] + start0);
            ans = Math.min(ans, dp[i][1] + start1);
        } else {
            ans = Math.min(ans, dp[i][0] + start1);
            ans = Math.min(ans, dp[i][1] + start0);
        }
        const digit = s.charAt(i);

        if (i % 2 === 0) {
            start0 += digit === '0' ? 0 : 1;
            start1 += digit === '1' ? 0 : 1;
        } else {
            start0 += digit === '1' ? 0 : 1;
            start1 += digit === '0' ? 0 : 1;
        }
    }
    return ans;
};