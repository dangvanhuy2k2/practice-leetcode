/**
 * @param {string} word
 * @param {string[]} forbidden
 * @return {number}
 */
var longestValidSubstring = function (word, forbidden) {
    const a = Array.from({ length: 11 }, () => new Set());
    for (const f of forbidden) a[f.length].add(f);

    let ans = 0,
        l = 0;
    for (let r = 0; r < word.length; ++r) {
        let str = "";
        let i = r;
        while (i >= l) {
            str = word.charAt(i) + str;
            if (str.length > 10) break;
            if (a[str.length].has(str)) {
                l = i + 1;
                break;
            }
            --i;
        }
        if (l > r) continue;
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};
