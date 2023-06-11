/**
 * @param {string} s
 * @return {number}
 */
var longestSemiRepetitiveSubstring = function (s) {
    let cntPair = 0, l = 0, ans = 0;
    let prevC = '-';
    for (let r = 0; r < s.length; r++) {
        const c = s.charAt(r);
        if (c === prevC) ++cntPair;

        let lastC = '-';
        while (true) {
            if (lastC === s.charAt(l)) --cntPair;
            if(cntPair < 2) break;
            lastC = s.charAt(l);
            ++l;
        }
        ans = Math.max(ans, r - l + 1);
        prevC = c;
    }

    return ans;
};