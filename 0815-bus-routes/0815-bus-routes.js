/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    const m = new Map();
    m.clear();
    const visit = new Set();
    const visitIdx = Array(routes.length).fill(false);
    for (let i = 0; i < routes.length; i++) {
        for (const r of routes[i]) {
            const a = m.get(r) || [];
            a.push(i);
            m.set(r, a);
        }
    }
    visit.add(source);
    let ans = 0;
    const q = [source];
    while (q.length) {
        const len = q.length;
        for (let i = 0; i < len; i++) {
            const top = q.shift();
            if (top === target) return ans;
            const idxs = m.get(top);
            for (const idx of idxs) {
                if (visitIdx[idx]) continue;
                visitIdx[idx] = true;
                for (const r of routes[idx]) {
                    if (visit.has(r)) continue;
                    visit.add(r);
                    q.push(r);
                }
            }
        }
        ++ans;
    }
    return -1;
};
