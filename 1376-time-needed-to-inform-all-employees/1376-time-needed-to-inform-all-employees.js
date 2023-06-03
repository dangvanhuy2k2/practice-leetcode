/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    const adj = Array.from({ length: n }, () => []);
    const dfs = (id) => {
        if (informTime[id] === 0) return 0;
        let max = 0;
        for (const emId of adj[id]) {
            max = Math.max(max, dfs(emId) + informTime[id]);
        }
        return max;
    }
    for (let i = 0; i < manager.length; ++i) {
        const m = manager[i];
        if (m === -1) continue;
        adj[m].push(i);
    }
    return dfs(headID);
};