/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function (startWords, targetWords) {
    const m = new Map();
    const convertToNum = (c) => c.charCodeAt() - "a".charCodeAt();
    const convert = (s) => {
        let num = 0;
        for (const c of s) {
            num ^= 1 << convertToNum(c);
        }
        return num;
    };
    for (const s of startWords) {
        const num = convert(s);
        m.set(num, true);
    }
    let ans = 0;
    for (const s of targetWords) {
        const num = convert(s);
        for (const c of s) {
            const need = num ^ (1 << convertToNum(c));
            if (!m.has(need)) continue;
            ++ans;
            break;
        }
    }
    return ans;
};
