/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
    const tmp = [a, b, c];
    let ans = 0;
    for (let i = 0; i < 32; ++i) {
        const [n1, n2, n3] = tmp.map(val => val & (1 << i));
        if (n3) {
            if (n1 === 0 && n2 === 0) ++ans;
        } else {
            if (n1 !== 0) ++ans; 
            if (n2 !== 0) ++ans;

        }
    }
    return ans;
};