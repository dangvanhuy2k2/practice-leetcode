/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
    const n = s.length;
    let l = 0, r = n - 1;
    while (l < r && l < n && r >= 0 && s.charAt(l) === s.charAt(r)) {
        const charSimilar = s.charAt(l);
        while (l <= r && s.charAt(l) === charSimilar) ++l;
        while (r >= l && s.charAt(r) === charSimilar) --r;
    }
    return r - l + 1;
};