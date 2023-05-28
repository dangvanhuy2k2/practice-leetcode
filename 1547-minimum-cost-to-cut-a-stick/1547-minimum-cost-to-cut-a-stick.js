/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    const cache = new Map();
    const dfs = (l , r) => {
        if(r - l === 1) return 0;
        const key = `${l}:${r}`;
        if(cache.has(key)) return cache.get(key);
        let minCut = 1e9;
        for(const c of cuts) {
            if(c <= l || c >= r) continue;
            minCut = Math.min(
                minCut,
                (r - l) + dfs(l, c) + dfs(c, r)
            )
        }
        minCut = minCut === 1e9 ? 0 : minCut;
        cache.set(key , minCut);
        return minCut;
    }
    return dfs(0, n);
};