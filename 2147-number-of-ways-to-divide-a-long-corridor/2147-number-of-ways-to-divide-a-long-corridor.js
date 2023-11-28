/**
 * @param {string} corridor
 * @return {number}
 */
var numberOfWays = function (corridor) {
    let ans = BigInt(1);
    let i = 0,
        prev = BigInt(1);
    while (i < corridor.length) {
        let cnt = 0;
        while (i < corridor.length && cnt < 2) {
            cnt += corridor.charAt(i) === "S" ? 1 : 0;
            ++i;
        }
        if (cnt < 2) return 0;
        const tmp = i;
        while (i < corridor.length && corridor.charAt(i) === "P") ++i;
        ans *= prev;
        prev = BigInt(i - tmp + 1);
    }
    return ans % BigInt(1e9 + 7);
};
