/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
    const m = new Map();
    nums.forEach(num => {
        if(num < 0) {
            num += Math.ceil(Math.abs(num) / value) * value;
        }
        const remain = num % value;
        m.set(remain, (m.get(remain) || 0) + 1)
    });
    let maxNum = 0;
    while (1) {
        const remain = maxNum % value;
        const sl = m.get(remain) || 0;
        if (!sl) break;
        m.set(remain, sl - 1);
        ++maxNum;
    }
    return maxNum;
};