/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
    const adj = Array.from({ length: n + 1}, () => []);
    for (const [p, n] of relations) {
        adj[p].push(n);
    }
    const cache = Array(n + 1).fill(-1);
    const dfs = (u) => {
        if (cache[u] !== -1) return cache[u];
        let max = 0;
        for (const v of adj[u]) max = Math.max(max, dfs(v));
        cache[u] = time[u - 1] + max;
        return cache[u];
    };
    let ans = 0;
    for (let i = 1; i <= n; ++i) ans = Math.max(ans, dfs(i));
    return ans;
};
