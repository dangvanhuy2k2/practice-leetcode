/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const convertToNum = (c) => c.charCodeAt() - "a".charCodeAt();
    const a = Array(26).fill(0);
    const update = (s, add) => {
        for (const c of s) {
            const i = convertToNum(c);
            a[i] += add;
        }
        return a;
    };
    update(s, 1);
    update(t, -1);
    for (let i = 0; i < 26; ++i) {
        if (a[i]) return false;
    }
    return true;
};
