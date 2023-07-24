/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    const dfs = (x, n) => {
        if (n === 1) return x;
        const haft = Math.floor(n / 2);
        const tmp = dfs(x, haft);
        return tmp * tmp * (n % 2 === 1 ? x : 1);
    };
    const ans = dfs(x, Math.abs(n));
    return n < 0 ? 1 / ans : ans;
};
