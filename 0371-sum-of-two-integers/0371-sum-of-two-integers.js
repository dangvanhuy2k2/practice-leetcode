/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    let ans = 0;
    let hasRemain = false;
    const maxBit = 32;
    for (let i = 0; i < maxBit; ++i) {
        const bitA = (1 << i) & a;
        const bitB = (1 << i) & b;
        if (bitA && bitB) {
            if (hasRemain) ans |= (1 << i);
            hasRemain = true;
        } else if (!bitA && !bitB) {
            if (!hasRemain) continue;
            ans |= (1 << i);
            hasRemain = false;
        } else {
            if (hasRemain) continue;
            ans |= (1 << i);
        }
    }
    return ans;
};