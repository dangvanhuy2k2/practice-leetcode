/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    const cache = new Map();
    const sum = piles.reduce((acc, val) => acc + val);
    const backtrack = (pos, m, remain) => {
        const key = [pos, m, remain].join(":");
        if (cache.has(key)) return cache.get(key);
        if (pos >= piles.length) return 0;
        let max = 0,
            total = 0;
        for (let i = 0; i < 2 * m; ++i) {
            const index = pos + i;
            if (index >= piles.length) break;
            total += piles[index];
            max = Math.max(
                max,
                remain -
                    backtrack(index + 1, Math.max(m, i + 1), remain - total)
            );
        }
        cache.set(key, max);
        return max;
    };
    const ans = backtrack(0, 1, sum);
    return ans;
};
