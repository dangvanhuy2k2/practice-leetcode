/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    const adj = Array.from({ length: n }, () => []);
    for (const [f, t] of edges) adj[f].push(t);
    const visit = Array(n).fill(false);
    const mark = Array(n).fill(false);

    const dfs = (u) => {
        if (visit[u]) {
            mark[u] = false;
            return;
        }
        visit[u] = true;
        for (const v of adj[u]) dfs(v);
    }
    for (let i = 0; i < n; ++i) {
        if (visit[i]) continue;
        mark[i] = true;
        dfs(i);
    }
    const ans = [];
    for (let i = 0; i < n; ++i) {
        if (!mark[i]) continue;
        ans.push(i);
    }
    return ans;
};