/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
    if(!k) return 0;
    const n = s.length;
    s += s;
    let l = 0, ans = Number.MAX_VALUE;
    const m = { 'a': 0, 'b': 0, 'c': 0 };
    const isValid = () => Object.values(m).every(val => val >= k);
    for (let r = 0; r < s.length && l < n; r++) {
        const c = s.charAt(r);
        ++m[c];
        if(r - l + 1 > n) break;
        while (isValid() && l < n && (l === 0 || r >= n - 1)) {
            ans = Math.min(ans, r - l + 1);
            --m[s.charAt(l++)];
        }
    }
    return ans === Number.MAX_VALUE ? -1 : ans;
};