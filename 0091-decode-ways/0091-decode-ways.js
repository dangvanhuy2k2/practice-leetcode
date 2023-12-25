/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const n = s.length;
    const dp = Array(n).fill(0);
    dp[0] = s.charAt(0) === "0" ? 0 : 1;
    for (let i = 1; i < n; ++i) {
        let tmp = "";
        for (let j = 0; j <= 1; ++j) {
            const index = i - j;
            if (index < 0) continue;
            const c = s.charAt(index);
            tmp = c + tmp;
            if (c === "0") continue;
            const num = Number(tmp);
            if (num >= 1 && num <= 26)
                dp[i] += index - 1 < 0 ? 1 : dp[index - 1];
        }
    }
    return dp[n - 1];
};
