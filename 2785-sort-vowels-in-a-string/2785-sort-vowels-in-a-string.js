/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
    const vowels = "ueoai";
    const cnt1 = Array(26).fill(0);
    const cnt2 = Array(26).fill(0);

    const convertToIdx = (c) =>
        c.charCodeAt() -
        (c.toUpperCase() === c ? "A".charCodeAt() : "a".charCodeAt());

    for (const c of s) {
        if (vowels.toUpperCase().includes(c)) {
            ++cnt1[convertToIdx(c)];
        }
        if (vowels.includes(c)) {
            ++cnt2[convertToIdx(c)];
        }
    }
    const a = s.split("");

    const findChar = () => {
        for (let i = 0; i < cnt1.length; ++i) {
            if (cnt1[i] === 0) continue;
            --cnt1[i];
            return String.fromCharCode(i + "A".charCodeAt());
        }

        for (let i = 0; i < cnt2.length; ++i) {
            if (cnt2[i] === 0) continue;
            --cnt2[i];
            return String.fromCharCode(i + "a".charCodeAt());
        }
        return "";
    };

    for (let i = 0; i < a.length; ++i) {
        if (!vowels.includes(a[i]) && !vowels.toUpperCase().includes(a[i]))
            continue;
        a[i] = findChar();
    }

    return a.join("");
};
