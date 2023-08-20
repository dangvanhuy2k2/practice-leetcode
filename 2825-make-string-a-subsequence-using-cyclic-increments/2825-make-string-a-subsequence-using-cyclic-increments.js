/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    let i = 0,
        j = 0;
    const convertToNum = (c) => c.charCodeAt() - "a".charCodeAt();
    const isNextChar = (c1, c2) => {
        if (c1 === "z") return c2 === "a" || c2 === "z";
        const dif = convertToNum(c2) - convertToNum(c1);
        console.log(dif);
        return dif === 0 || dif === 1;
    };
    while (i < str1.length && j < str2.length) {
        let isNext = isNextChar(str1.charAt(i), str2.charAt(j));
        j += isNext ? 1 : 0;
        ++i;
    }

    return j === str2.length;
};
