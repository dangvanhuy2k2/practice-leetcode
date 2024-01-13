/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const convert = (c) => c.charCodeAt() - "a".charCodeAt();
    const createMap = (str) => {
        const a = Array(26).fill(0);
        for (const c of str) {
            ++a[convert(c)];
        }
        return a;
    };
    let ans = 0;
    const a = createMap(s),
        b = createMap(t);
    for (let i = 0; i < 26; ++i) {
        if (s[i] === 0 || b[i] >= a[i]) continue;
        ans += a[i] - b[i];
    }
    return ans;
};
