/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    const cntBitOne = (num) => {
        let cnt = 0;
        while (num > 0) {
            cnt += num % 2;
            num = Math.floor(num / 2);
        }
        return cnt;
    };

    arr.sort((val1, val2) => {
        const n1 = cntBitOne(val1),
            n2 = cntBitOne(val2);
        if (n1 === n2) return val1 - val2;
        return n1 - n2;
    });
    return arr;
};
