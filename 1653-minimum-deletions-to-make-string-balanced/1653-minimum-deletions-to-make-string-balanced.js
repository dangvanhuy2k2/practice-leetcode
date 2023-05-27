/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    const n = s.length;
    const dp = Array(n).fill(0);
    let cntB = 0;
    for (let i = n - 1; i >= 0; i--) {
        const c = s.charAt(i);
        cntB += c === 'b' ? 1 : 0;
        dp[i] = cntB;
    }
    let cntA = 0, ans = 0;
    for (let i = 0; i < n; ++i) {
        const c = s.charAt(i);
        cntA += c === 'a' ? 1 : 0;
        if (c === 'a') continue;
        ans = Math.max(ans, cntA + dp[i]);
    }
    return n - Math.max(ans, cntA);
};