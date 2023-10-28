/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function (num) {
    const m = {
        0: 0,
        2: 5,
        5: 0,
        7: 5,
    };
    const n = num.length;
    const a = Object.keys(m);
    const save = Array(10).fill(-1);
    let ans = -1;
    for (let i = n - 1; i >= 0; i--) {
        const c = num.charAt(i);
        if (!a.includes(c)) continue;
        const digitNeed = m[c];
        const pos = save[digitNeed];
        if (pos !== -1) {
            ans = pos - i - 1 + n - pos - 1;
            break;
        }
        save[Number(c)] = i;
    }

    return ans === -1 ? (save[0] !== -1 ? n - 1 : n) : ans;
};
