/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    // e - a , i
    // a - u , i
    // i - o , e
    // u - o , i
    // o - i
    const vowels = "ueoai";
    const chars = vowels.split("");
    const dp = Array.from({ length: chars.length }, () => Array(n + 1).fill(0));
    for (let i = 0; i < chars.length; ++i) dp[i][1] = 1;

    const map = {
        e: ["a", "i"],
        a: ["u", "i", "e"],
        i: ["o", "e"],
        u: ["o", "i"],
        o: ["i"],
    };
    const mod = 1e9 + 7;
    for (let i = 2; i <= n; ++i) {
        for (let j = 0; j < chars.length; ++j) {
            const c = chars[j];
            for (const followChar of map[c]) {
                const idx = vowels.indexOf(followChar);
                dp[j][i] += dp[idx][i - 1];
                dp[j][i] %= mod;
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < chars.length; ++i) {
        ans += dp[i][n];
        ans %= mod;
    }
    return ans;
};