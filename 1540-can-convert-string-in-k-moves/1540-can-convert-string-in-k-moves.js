/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function (s, t, k) {
    if (s.length !== t.length) return false;
    const cntConvert = (c1, c2) => {
        const n1 = c1.charCodeAt(),
            n2 = c2.charCodeAt();
        if (n1 <= n2) return n2 - n1;
        return "z".charCodeAt() - n1 + 1 + n2 - "a".charCodeAt();
    };

    const m = Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {
        const c1 = s.charAt(i),
            c2 = t.charAt(i);
        if (c1 === c2) continue;
        const step = cntConvert(c1, c2);
        ++m[step];
        if (26 * (m[step] - 1) + step <= k) continue;
        return false;
    }
    return true;
};
