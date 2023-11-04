/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var numberOfWays = function (n, x) {
    const mod = BigInt(1e9 + 7);
    const a = [];
    let i = 1;
    while (true) {
        const val = i ** x;
        if (val > n) break;
        a.push(val);
        ++i;
    }
    const dp = Array.from({ length: n + 1 }, () =>
        Array(a.length).fill(BigInt(0))
    );
    for (let num = 1; num <= n; ++num) {
        for (let i = 0; i < a.length; ++i) {
            let cntWay = BigInt(0);
            const need = num - a[i];
            if (need === 0) cntWay = BigInt(1);
            else if (need > 0) {
                cntWay = (i - 1 >= 0 ? dp[need][i - 1] : BigInt(0));
            }
            cntWay += (i - 1 >= 0 ? dp[num][i - 1] : BigInt(0));
            dp[num][i] = cntWay;
        }
    }
    return dp[n][a.length - 1] % mod;
};
