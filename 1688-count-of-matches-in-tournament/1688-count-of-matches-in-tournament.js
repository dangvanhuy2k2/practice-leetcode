/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    const dfs = (n) => {
        if(n <= 1) return 0;
        const m = Math.floor(n / 2);
        return m + dfs(m + (n % 2 ? 1 : 0));
    }
    return dfs(n);
};