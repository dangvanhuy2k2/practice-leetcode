/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
    const m = new Map();
    for (const w of words) {
        for (const c of w) {
            const sl = m.get(c) || 0;
            m.set(c, sl + 1);
        }
    }
    for (const sl of m.values()) {
        if (sl % words.length) return false;
    }
    return true;
};
