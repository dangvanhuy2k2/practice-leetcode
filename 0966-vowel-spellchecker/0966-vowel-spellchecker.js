/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
    const m = new Map(),
        m1 = new Map();
    for (const w of wordlist) {
        m.set(w, true);
        const tmp = w.toLowerCase();
        if (m1.has(tmp)) continue;
        m1.set(tmp, w);
    }
    const vowels = "ueoai";
    const isVowelErrors = (s, s1) => {
        for (let i = 0; i < s.length; ++i) {
            const c1 = s.charAt(i).toLowerCase(),
                c2 = s1.charAt(i).toLowerCase();
            if (c1 === c2) continue;
            if (!vowels.includes(c1) || !vowels.includes(c2)) return false;
        }
        return true;
    };
    let ans = [];
    for (const q of queries) {
        const tmp = q.toLowerCase();
        if (m.has(q)) ans.push(q);
        else if (m1.has(tmp)) ans.push(m1.get(tmp));
        else {
            let kq = "";
            for (const w of wordlist) {
                if (!isVowelErrors(w, q)) continue;
                kq = w;
                break;
            }
            ans.push(kq);
        }
    }
    return ans;
};
