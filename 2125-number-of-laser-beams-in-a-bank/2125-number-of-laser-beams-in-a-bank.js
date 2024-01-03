/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    const cnt = (s) => {
        let total = 0;
        for (const c of s) total += Number(c);
        return total;
    };
    let prev = cnt(bank[0]);
    let ans = 0;
    for (let i = 1; i < bank.length; ++i) {
        const cntOne = cnt(bank[i]);
        if (cntOne <= 0) continue;
        ans += prev * cntOne;
        prev = cntOne;
    }
    return ans;
};
