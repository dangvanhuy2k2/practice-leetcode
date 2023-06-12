/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    const color = Array(n).fill(-1);
    const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    let cntV = 0, cntEdge = 0;
    const dfs = (u) => {
        if (color[u] === 1) return;
        if (color[u] === 0) {
            ++cntEdge;
            return;
        }
        ++cntV;
        color[u] = 0;
        for (const v of adj[u]) {
            dfs(v);
        }
        color[u] = 1;
    }
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
        if (color[i] === 1) continue;
        cntV = cntEdge = 0;
        dfs(i);
        const totalEdge = cntV * (cntV - 1);
        cnt += totalEdge === cntEdge * 2;
    }

    return cnt;
}; 