/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
    const convertCharToNum = (c) => c.charCodeAt() - 'a'.charCodeAt();
    const size = convertCharToNum('z') + 1;
    const parent = new Array(size);
    const rank = new Array(size);
    const ban = new Set();
    for (let i = 0; i < size; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
    const find = (x) => {
        if (parent[x] === x) return x;
        return parent[x] = find(parent[x]);
    }
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX === rootY) return false;

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        return true;
    }
    const createKey = (i, j) => `${Math.min(i, j)}!=${Math.max(i, j)}`;

    const isBan = (par1, par2) => {
        for (let i = 0; i < size; ++i) {
            const p1 = find(i);
            if (p1 !== par1) continue;
            for (let j = 0; j < size; ++j) {
                const p2 = find(j);
                if (p2 !== par2) continue;
                const key = createKey(i, j);
                if (ban.has(key)) return true;
            }
        }
        return false;
    }

    for (const e of equations) {
        const n1 = convertCharToNum(e.charAt(0));
        const n2 = convertCharToNum(e.charAt(3));
        const relationship = e.charAt(1) + e.charAt(2);
        const parA = find(n1);
        const parB = find(n2);
        if (parA === parB && relationship === "!=")
            return false;
        if (relationship === "==") {
            if (isBan(parA, parB)) {
                return false;
            }
            union(n1, n2);
            continue;
        }
        ban.add(createKey(n1, n2));
    }
    return true;
};