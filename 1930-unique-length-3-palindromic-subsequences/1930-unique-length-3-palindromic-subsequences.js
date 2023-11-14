/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
    const convertToIdx = (c) => c.charCodeAt() - "a".charCodeAt();
    const a = Array(26).fill(0);
    const b = [...a];
    for (const c of s) ++a[convertToIdx(c)];
    const hasCount = Array.from({ length: 26 }, () => Array(26).fill(0));
    let ans = 0;
    for (const c of s) {
        const i = convertToIdx(c);
        --a[i];
        for (let j = 0; j < a.length; ++j) {
            if (hasCount[i][j] || Math.min(a[j], b[j]) < 1) continue;
            hasCount[i][j] = true;
            ++ans;
        }
        ++b[i];
    }
    return ans;
};
