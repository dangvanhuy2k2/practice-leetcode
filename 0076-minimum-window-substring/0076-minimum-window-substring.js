/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const m = new Map();
    for (const c of t) {
        m.set(c, (m.get(c) || 0) + 1);
    }
    const w = new Map();
    const isValid = () => {
        for (const [c, sl] of m.entries()) {
            if (!w.has(c) || w.get(c) < sl) {
                return false;
            }
        }
        return true;
    };
    let MIN = 0,
        MAX = 1e18;
    const ans = [MIN, MAX];
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        const c = s.charAt(r);
        w.set(c, (w.get(c) || 0) + 1);
        while (isValid()) {
            if (ans[1] - ans[0] > r - l) {
                ans[1] = r;
                ans[0] = l;
            }
            const c1 = s.charAt(l++);
            w.set(c1, w.get(c1) - 1);
        }
    }
    return ans[1] === MAX ? "" : s.substring(ans[0], ans[1] + 1);
};
