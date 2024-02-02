/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    const ans = [];
    for (let i = 1; i <= 9; ++i) {
        let num = 0;
        for (let j = i; j <= 9; ++j) {
            num = num * 10 + j;
            if (num < low || num > high) continue;
            ans.push(num);
        }
    }
    ans.sort((n1, n2) => n1 - n2);
    return ans;
};
