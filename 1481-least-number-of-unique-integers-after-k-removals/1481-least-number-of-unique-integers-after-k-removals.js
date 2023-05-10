/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
    const m = new Map();
    arr.forEach(val => m.set(val, (m.get(val) || 0) + 1));
    const a = [...m.entries()];
    a.sort((el1, el2) => el1[1] - el2[1]);
    let ans = a.length;
    for(const [val ,sl] of a) {
        const subtract = Math.min(k , sl);
        k -= sl;
        if(subtract === sl) --ans;
        if(k <= 0) break;
    }
    return ans;
};