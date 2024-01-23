/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
    const backtrack = (pos, mask) => {
        if (pos >= arr.length) {
            let cnt = 0;
            for (let i = 0; i <= 26; ++i) {
                cnt += Math.min(1, mask & (1 << i));
            }
            return cnt;
        }
        // no select
        let max = backtrack(pos + 1, mask);
        // select
        let isValid = true;
        let newMask = mask;
        for (const c of arr[pos]) {
            const i = c.charCodeAt() - "a".charCodeAt();
            const bit = newMask & (1 << i);
            if (bit !== 0) {
                isValid = false;
                break;
            } else newMask ^= 1 << i;
        }
        if (isValid) max = Math.max(max, backtrack(pos + 1, newMask));
        return max;
    };

    return backtrack(0, 0);
};
