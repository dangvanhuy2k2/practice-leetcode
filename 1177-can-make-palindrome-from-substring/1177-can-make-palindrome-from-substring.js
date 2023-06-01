/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
    const n = s.length;
    const prefix = Array.from({ length: n }, () => []);
    const a = Array(26).fill(0);

    const convertToIdx = (c) => c.charCodeAt() - 'a'.charCodeAt();

    for (let i = 0; i < n; i++) {
        const c = s.charAt(i);
        const idx = convertToIdx(c);
        ++a[idx];
        prefix[i] = [...a];
    }
    return queries.map(q => {
        const [l, r, k] = q;
        const prefixLeft = l - 1 < 0 ? Array(26).fill(0) : prefix[l - 1];
        let cntCharOld = 0;
        for (let i = 0; i < 26; ++i) {
            const sl = prefix[r][i] - prefixLeft[i];
            cntCharOld += sl % 2 ? 1 : 0;
        }
        const replaceNeed = Math.floor(cntCharOld / 2);
        return k >= replaceNeed;
    })
};