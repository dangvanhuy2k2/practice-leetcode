/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    const convert = (c) => c.charCodeAt() - "a".charCodeAt();
    const createCnt = (s) => {
        const cnt = Array(26).fill(0);
        for (const c of s) {
            ++cnt[convert(c)];
        }
        return cnt;
    };
    const a = createCnt(word1),
        b = createCnt(word2);
    for (let i = 0; i < 26; ++i) {
        if (a[i] && b[i] === 0) return false;
        if (b[i] && a[i] === 0) return false;
    }
    const createMap = (s) => {
        const c = createCnt(s);
        const m = new Map();
        for (const sl of c) {
            if (sl === 0) continue;
            m.set(sl, (m.get(sl) || 0) + 1);
        }
        return m;
    };

    const m1 = createMap(word1),
        m2 = createMap(word2);
    for (const [key, sl] of m1.entries()) {
        const tmp = m2.get(key) || 0;
        if (tmp !== sl) return false;
    }
    return true;
};
