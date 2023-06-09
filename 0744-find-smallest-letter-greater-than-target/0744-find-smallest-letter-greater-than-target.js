/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let ans = "zz";
    let l = 0, r = letters.length - 1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        const c = letters[m];
        const cmp = c.localeCompare(target);
        if (cmp <= 0) l = m + 1;
        else {
            ans = ans.localeCompare(c) < 0 ? ans : c;
            r = m - 1;
        }
    }
    return ans === "zz" ? letters[0] : ans;
};