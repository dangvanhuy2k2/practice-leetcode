/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function (stoneValue) {
    const total = stoneValue.reduce((acc, val) => acc + val);
    const cache = new Map();

    const backtrack = (pos, remain) => {
        if (pos >= stoneValue.length) return 0;
        const key = `${pos}:${remain}`;
        if (cache.has(key)) return cache.get(key);
        let sum = 0,
            max = -1e9;
        for (let i = pos; i < Math.min(stoneValue.length, pos + 3); ++i) {
            sum += stoneValue[i];
            max = Math.max(max, remain - backtrack(i + 1, remain - sum));
        }
        cache.set(key, max);
        return max;
    };

    const maxStone = backtrack(0, total);
    const mid = total / 2;
    if (maxStone * 2 === total) return "Tie";
    return maxStone > mid ? "Alice" : "Bob";
};
