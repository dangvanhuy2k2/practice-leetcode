/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const l = arr.length;
    const need = l * (25 / 100);
    let cnt = 0,
        prev = -1,
        ans = -1;
    for (const val of arr) {
        if (val === prev) {
            ++cnt;
        } else cnt = 1;
        if (cnt > need) {
            ans = val;
            break;
        }
        prev = val;
    }
    return ans;
};
