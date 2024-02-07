/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const m = new Map();
    for (const c of s) {
        m.set(c, (m.get(c) || 0) + 1);
    }
    const a = Array.from(m.entries()).sort((el1, el2) => el2[1] - el1[1]);
    console.log(a);
    return a.reduce((acc, [c, sl]) => acc + Array(sl).fill(c).join(""), "");
};
