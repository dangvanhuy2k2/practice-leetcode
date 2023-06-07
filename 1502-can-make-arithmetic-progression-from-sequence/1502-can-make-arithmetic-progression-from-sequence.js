/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((n1, n2) => n1 - n2);
    const dif = arr[1] - arr[0];
    for(let i = 2; i < arr.length; ++i) {
        if(arr[i] - arr[i - 1] === dif) continue;
        return false;
    }
    return true;
};