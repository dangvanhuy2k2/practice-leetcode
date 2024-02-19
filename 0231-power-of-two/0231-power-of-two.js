/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let l = 0,
        r = 32;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        const num = Math.pow(2, mid);
        if (num === n) return true;
        if (num > n) --r;
        else ++l;
    }
    return false;
};
    