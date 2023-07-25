/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0,
        r = arr.length - 1,
        ans = -1;
    while (l <= r) {
        const m = Math.floor((l + r) / 2);
        if (m - 1 < 0 || arr[m - 1] < arr[m]) {
            ans = Math.max(ans, m);
            l = m + 1;
        } else r = m - 1;
    }
    return ans;
};
