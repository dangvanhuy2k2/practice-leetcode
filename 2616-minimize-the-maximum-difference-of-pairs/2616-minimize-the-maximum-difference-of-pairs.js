/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
    let l = 0,
        r = 1e9,
        ans = 1e18;
    const n = nums.length;

    nums.sort((n1, n2) => n1 - n2);

    const canMakePair = (maxDif) => {
        let cntPair = 0,
            i = 0;
        while (i < n) {
            const dif = nums[i + 1] - nums[i];
            if (dif <= maxDif) {
                ++cntPair;
                i += 2;
            } else ++i;
        }
        return cntPair >= p;
    };

    while (l <= r) {
        const maxDif = Math.floor((l + r) / 2);
        if (canMakePair(maxDif)) {
            ans = Math.min(ans, maxDif);
            r = maxDif - 1;
        } else l = maxDif + 1;
    }
    return ans;
};
