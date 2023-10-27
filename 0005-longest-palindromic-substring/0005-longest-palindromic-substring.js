/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const n = s.length;
    const findMaxSubstring = (i) => {
        let r = i + 1,
            l = i - 1;
        while (r < n && s.charAt(r) === s.charAt(i)) ++r;
        while (l >= 0 && s.charAt(l) === s.charAt(i)) --l;
        while (r < n && l >= 0 && s.charAt(r) === s.charAt(l)) {
            ++r;
            --l;
        }
        return s.substring(l + 1, r);
    };
    let ans = findMaxSubstring(0);
    for (let i = 0; i < n; ++i) {
        const tmp = findMaxSubstring(i);
        ans = ans.length < tmp.length ? tmp : ans;
    }
    return ans;
};
