/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    arr.sort((n1, n2) => n1 - n2);
    let max = 0;
    for (const val of arr) {
        if (val > max) ++max;
    }
    return max;
};
