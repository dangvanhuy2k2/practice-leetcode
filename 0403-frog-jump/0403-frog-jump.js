/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    const cache = new Map();
    const backtrack = (pos, k) => {
        const idx = stones.indexOf(pos);
        if (idx === -1) return false;
        if (idx === stones.length - 1) return true;
        const key = [pos, k].join(":");
        if (cache.has(key)) return cache.get(key);

        let canJump = false;
        for (let i = k === 1 ? 0 : -1; i <= 1; ++i) {
            canJump = canJump || backtrack(pos + k + i, k + i);
            if (canJump) break;
        }
        cache.set(key, canJump);
        return canJump;
    };
    const ans = backtrack(1, 1);

    return ans;
};
