/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
    const gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    const cache = new Map();
    const n = nums.length;
    const backtrack = (mask,ope) => {
        if(cache.has(mask)) return cache.get(mask);
        for (let i = 0; i < n; ++i) {
            if((1 << i) & mask) continue;
            for (let j = i + 1; j < n; ++j) {
                if ((1 << j) & mask) continue;
                const newMask = mask | (1 << i) | (1 << j);
                let score = ope * gcd(nums[i], nums[j]);
                score += backtrack(newMask,ope + 1);
                cache.set(mask, Math.max(cache.get(mask) || 0 , score))
            }
        }
        return cache.get(mask) || 0;
    }
    return backtrack(0, 1);;
};