/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    console.log(2 ** 16);
    const numDigit = 2 ** n - 1;
    const ans = Array(numDigit + 1).fill(0);
    const used = Array(numDigit + 1).fill(0);
    used[0] = 1;

    const backtrack = (pos) => {
        if (pos > numDigit) {
            let cnt = 0,
                lastNum = ans[numDigit];
            for (let i = 0; i < 32; ++i) {
                cnt += (lastNum & (1 << i)) ? 1 : 0;
            }
            return cnt === 1;
        }

        const prevVal = ans[pos - 1];
        for (let i = 0; i < 32; ++i) {
            const val = prevVal ^ (1 << i);
            if (val > numDigit) break;
            if (used[val]) continue;
            used[val] = 1;
            ans[pos] = val;
            if (backtrack(pos + 1)) return true;
            used[val] = 0;
            ans[pos] = 0;
        }
        return false;
    };

    backtrack(1);
    return ans;
};
